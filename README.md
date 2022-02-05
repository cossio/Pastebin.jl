# Pastebin.jl - A Wrapper around the Pastebin REST API

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cossio/Pastebin.jl/blob/master/LICENSE.md)
[![](https://img.shields.io/badge/docs-stable-blue.svg)](https://cossio.github.io/Pastebin.jl/stable)
[![](https://img.shields.io/badge/docs-dev-blue.svg)](https://cossio.github.io/Pastebin.jl/dev)
![](https://github.com/cossio/Pastebin.jl/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/cossio/Pastebin.jl/branch/master/graph/badge.svg?token=cg6SYz6xuU)](https://codecov.io/gh/cossio/Pastebin.jl)

Pastebin.jl is a Julia wrapper for the [Pastebin](https://pastebin.com/) API.

## Installation

This package is registered. Install with:

```Julia
using Pkg
Pkg.add("Pastebin")
```

## Related

Pastebin.jl was originally developed by Mark Molnar,
<https://github.com/molnarmark/Pastebin.jl>

See also [Pasteee.jl](https://github.com/cossio/Pasteee.jl), a Julia wrapper for the [Paste.ee](https://paste.ee/) API.
Note that Pastebin has some limitations, such as 10 pastes / day for guests accounts (see <https://pastebin.com/faq#11a>).
Paste.ee doesn't have such strict limitations.