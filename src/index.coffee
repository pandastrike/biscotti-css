import {loader, fallback, buffer, include,
  filters, sandbox, engine} from "biscotti"
import CSS from "panda-vcss"


render = do ->

  globals = Object.assign {}, {require}, CSS

  engine [
    sandbox: sandbox globals
    loader
      coffeescript:
        index: true
        extensions: [ ".vdom" ]
    do fallback
    include isBuffered: false
    buffer
    filter
  ]

export {render as default}
