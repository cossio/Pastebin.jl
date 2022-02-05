#=
# Examples
=#

import Pastebin

# Fetch a paste by key.

response = Pastebin.getraw("Lt9PtFc4")
Pastebin.content(response)

# Create a Pastebin client using only a `devKey`.

client = Pastebin.Client(ENV["PASTEBIN_DEVKEY"])

# Paste something

response = Pastebin.paste!(client, "A test", "Hola Pastebin")

# URL of the created paste

url = Pastebin.content(response)

# Extract only the key

key = Pastebin.parsekey(url)

# We can now access the created paste using this key

Pastebin.content(Pastebin.getraw(key))
