module Pastebin

import HTTP

const API = "https://pastebin.com/api/api_post.php"

struct Client
    devKey::String
    userKey::String

    """
        Client(devKey, userKey = "")

    Creates a `Pastebin.Client`. If `userKey` is empty, accesses are as guest.
    """
    Client(devKey::String, userKey::String = "") = new(devKey, userKey)

    """
        Client(devKey, username, password)

    Login, generating a `userKey` for the session.
    """
    function Client(devKey::String, username::String, password::String)
        data = Dict(
            "api_dev_key" => devKey,
            "api_user_name" => username,
            "api_user_password" => password,
        )
        response = String(HTTP.post("https://pastebin.com/api/api_login.php", [], HTTP.Form(data)).body)
        return new(devKey, response)
    end
end

function Base.show(io::IO, client::Client)
    if isempty(client.userKey)
        print(io, "Pastebin.Client(...) -- no userKey")
    else
        print(io, "Pastebin.Client(...) -- userKey set")
    end
end

struct Response
    successful::Bool
    response::String
end

function Response(response::AbstractString)
    successful = !contains("Bad API Request", response)
    return Response(successful, response)
end

"""
    paste(client, title, text; expire = "N", access = 0)

Submits `text` to pastebin. If `client` has a `userKey`, the paste will be created by
that user.

`expire` date is one of: `"N"` (never, default), `"10M"` (10 minutes), `"1H"` (1 hour),
`"1D"` (1 day), `"1W"` (1 week), `"2W"` (2 weeks), `"1M"` (1 month), `"6M"` (6 months),
`"1Y"` (1 year).

`access` is an integer: `0` (public), `1` (unlisted, default) or `2` (private, requires a `userKey`).
`format` determines syntax highlight (plain text by default).

See <https://pastebin.com/doc_api>.
"""
function paste(
    client::Client, title::String, text::String;
    expire::String="N", access::Int=1, format::String="text"
)
    if access == 2 && isempty(client.userKey)
        throw(ArgumentError("for a private paste, providing a user key is required"))
    end
    data = Dict(
        "api_option"            => "paste",
        "api_paste_private"     => string(access),
        "api_paste_name"        => title,
        "api_paste_expire_date" => expire,
        "api_paste_format"      => format,
        "api_dev_key"           => client.devKey,
        "api_user_key"          => client.userKey,
        "api_paste_code"        => text
    )
    response = String(HTTP.post(API, [], HTTP.Form(data)).body)
    return Response(response)
end

"""
    delete(client, key)

Deletes paste `key` from the server. Requires a `userKey`.
"""
function delete(client::Client, key::String)
    if isempty(client.userKey)
        throw(ArgumentError("providing a userKey is required to delete a paste"))
    end
    data = Dict(
        "api_option"    => "delete",
        "api_dev_key"   => client.devKey,
        "api_user_key"  => client.userKey,
        "api_paste_key" => key,
    )
    response = String(HTTP.post(API, [], HTTP.Form(data)).body)
    return Response(response)
end

"""
    getraw(key)

Fetch a raw paste by `key`. Returns a `response = Pastebin.Response(...)` object.
The raw paste string can be accessed as `Pastebin.content(response)`.
"""
function getraw(key::AbstractString)
    response = String(HTTP.get("https://pastebin.com/raw/$key").body)
    return Response(response)
end

content(resp::Response) = resp.response
success(resp::Response) = resp.successful
parsekey(url::String) = split(url, "/")[end]
parsekey(resp::Response) = parsekey(content(resp))

end # end of module
