# Biscotti CSS

CoffeeScript virtual CSS templates.

```coffee
# add a helper
rhythm = (lineHeight, fontSize) -> [
  p "font-size", scale lineHeight, fontSize
  p "line-height", lineHeight
]

$$ s "article", [

  # nested styles using &
  s "& > h1", [

    # built-in unit helpers
    rhythm (rem 4), (pct 90)
  ]

  s "& > p", [
    p "font-face", "Montserrat"
  ]
]
```

# Install

`npm i -s biscotti-css`

# Usage

```coffee
import processor from "biscotti-css"
render = do processor
render path: "./vcss/index.vcss"
```
