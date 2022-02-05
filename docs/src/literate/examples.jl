#=
# Examples
=#

import Pastebin

# Fetch a paste by key.

response = Pastebin.getraw("Lt9PtFc4")
Pastebin.content(response)

# Create a Pastebin client using only a `devKey`.

client = Pastebin.Client(ENV["PASTEBIN_DEVKEY"])

# Paste something (to expire in 1 hour)

response = Pastebin.paste(client, "A test", "Hola Pastebin"; expire="1H")

# Extract the key of the created paste

key = Pastebin.parsekey(response)

# We can now access the created paste using this key

Pastebin.content(Pastebin.getraw(key))
