var documenterSearchIndex = {"docs":
[{"location":"literate/examples/","page":"Examples","title":"Examples","text":"EditURL = \"https://github.com/cossio/Pastebin.jl/blob/master/docs/src/literate/examples.jl\"","category":"page"},{"location":"literate/examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"import Pastebin","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"Fetch a paste by key.","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"response = Pastebin.getraw(\"Lt9PtFc4\")\nPastebin.content(response)","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"Create a Pastebin client using only a devKey.","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"client = Pastebin.Client(ENV[\"PASTEBIN_DEVKEY\"])","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"Paste something","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"response = Pastebin.paste!(client, \"A test\", \"Hola Pastebin\")","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"URL of the created paste","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"url = Pastebin.content(response)","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"Extract only the key","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"key = Pastebin.parsekey(url)","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"We can now access the created paste using this key","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"Pastebin.content(Pastebin.getraw(key))","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"","category":"page"},{"location":"literate/examples/","page":"Examples","title":"Examples","text":"This page was generated using Literate.jl.","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [Pastebin]","category":"page"},{"location":"reference/#Pastebin.delpaste!-Tuple{Pastebin.Client, String}","page":"Reference","title":"Pastebin.delpaste!","text":"delpaste!(client, key)\n\nDeletes paste key from the server. Requires a userKey.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Pastebin.getraw-Tuple{AbstractString}","page":"Reference","title":"Pastebin.getraw","text":"getraw(key)\n\nFetch a raw paste by key. Returns a response = Pastebin.Response(...) object. The raw paste string can be accessed as Pastebin.content(response).\n\n\n\n\n\n","category":"method"},{"location":"reference/#Pastebin.paste!-Tuple{Pastebin.Client, String, String}","page":"Reference","title":"Pastebin.paste!","text":"paste!(client, title, text; expire = \"N\", access = 0)\n\nSubmits text to pastebin. expire date is one of: \"N\" (never, default), \"10M\" (10 minutes), \"1H\" (1 hour), \"1D\" (1 day), \"1W\" (1 week), \"2W\" (2 weeks), \"1M\" (1 month), \"6M\" (6 months), \"1Y\" (1 year). access is an integer: 0 (public), 1 (unlisted, default) or 2 (private, requires a userKey). format determines syntax highlight (plain text by default), see https://pastebin.com/doc_api.\n\n\n\n\n\n","category":"method"},{"location":"#Pastebin.jl-Documentation","page":"Home","title":"Pastebin.jl Documentation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia wrapper around the Pastebin REST API. See https://pastebin.com/doc_api.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is registered. Install with:","category":"page"},{"location":"","page":"Home","title":"Home","text":"import Pkg\nPkg.add(\"Pastebin\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"The source code is hosted on Github: https://github.com/cossio/Pastebin.jl","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package doesn't export any symbols.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Most of the functions have a helpful docstring. See Reference section. See also the Examples on the menu on the left side bar.","category":"page"},{"location":"#Pastebin.Client","page":"Home","title":"Pastebin.Client","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You have 3 ways of creating a Pastebin.Client:","category":"page"},{"location":"","page":"Home","title":"Home","text":"# create pastes as guest\nPastebin.Client(devKey::String)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Your devKey can be found here: https://pastebin.com/doc_api#1 (you need to login first).","category":"page"},{"location":"","page":"Home","title":"Home","text":"# create pastes as a logged in user\nPastebin.Client(devKey::String, userKey::String)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The userKey is unique to each session and must be retrieved as explained here: https://pastebin.com/doc_api#9. Alternatively, you can provide your username and password:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pastebin.Client(devKey::String, username::String, password::String)","category":"page"},{"location":"","page":"Home","title":"Home","text":"In this case Pastebin.Client will query Pastebin and populate userKey automatically.","category":"page"},{"location":"#Available-functions:","page":"Home","title":"Available functions:","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"# For creating pastes\n# Note: If your client has a userKey, the paste will be created by that user.\npaste!(client::Client, title::String, text::String; expire::String, access::Int)\n\n# For removing pastes (requires userKey)\ndelpaste!(client::Client, key::String)\n\n# For retrieving pastes by Paste key.\n# Example: getraw(\"fs52lKAHf\")\ngetraw(key::String)","category":"page"},{"location":"","page":"Home","title":"Home","text":"These functions return a Pastebin.Response object. You can use the following methods to access parts of the Pastebin.Response:","category":"page"},{"location":"","page":"Home","title":"Home","text":"content(resp::Response) # a String with the response contents\nsuccess(resp::Response) # true if query was succesful, false otherwise","category":"page"},{"location":"","page":"Home","title":"Home","text":"Docstrings (see Reference) contain more details on the arguments.","category":"page"}]
}
