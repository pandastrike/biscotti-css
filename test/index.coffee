import assert from "assert"
import {print, test} from "amen"
import render from "../src"
import CSS from "panda-vcss"

do ->

  print await test "biscotti-css", ->
    sheets = await render path: resolve "./test/files/vcss/index.vcss"
    result = CSS.render do sheets[0]
    assert result, """
      article > h1 { font-size: 3.6rem; line-height: 4rem; }
      article > p { font-face: Montserrat; }
     """
