# Pastebin.jl Documentation

A Julia wrapper around the Pastebin REST API.
See <https://pastebin.com/doc_api>.

## Installation

This package is registered.
Install with:

```julia
import Pkg
Pkg.add("Pastebin")
```

The source code is hosted on Github:
<https://github.com/cossio/Pastebin.jl>

## Usage

This package doesn't export any symbols.

Most of the functions have a helpful docstring.
See [Reference](@ref) section.
See also the [Examples](@ref) on the menu on the left side bar.

## Pastebin.Client

You have 3 ways of creating a `Pastebin.Client`:

```julia
# create pastes as guest
Pastebin.Client(devKey::String)
```

Your `devKey` can be found here: <https://pastebin.com/doc_api#1> (you need to login first).

```julia
# create pastes as a logged in user
Pastebin.Client(devKey::String, userKey::String)
```

The `userKey` is unique to each session and must be retrieved as explained here:
<https://pastebin.com/doc_api#9>.
Alternatively, you can provide your `username` and `password`:

```julia
Pastebin.Client(devKey::String, username::String, password::String)
```

In this case `Pastebin.Client` will query Pastebin and populate `userKey` automatically.

## Available functions

```julia
# For creating pastes
# Note: If your client has a userKey, the paste will be created by that user.
paste(client::Client, title::String, text::String; expire::String, access::Int)

# For removing pastes (requires userKey)
delete(client::Client, key::String)

# For retrieving pastes by Paste key.
# Example: getraw("fs52lKAHf")
getraw(key::String)
```

These functions return a `Pastebin.Response` object.
You can use the following methods to access parts of the `Pastebin.Response`:

```julia
content(resp::Response) # a String with the response contents
success(resp::Response) # true if query was succesful, false otherwise
```

Docstrings (see [Reference](@ref)) contain more details on the arguments.