import {loader, fallback, buffer, include,
  filters, sandbox, engine} from "biscotti"
import CSS from "panda-vcss"
import filter from "./filter"


processor = (global = {}) ->

  globals = Object.assign {}, {require}, CSS, globals

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

export {processor as default}
