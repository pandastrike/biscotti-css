"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _path = require("path");

var _amen = require("amen");

var _src = require("../src");

var _src2 = _interopRequireDefault(_src);

var _pandaVcss = require("panda-vcss");

var _pandaVcss2 = _interopRequireDefault(_pandaVcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_asyncToGenerator(function* () {
  return (0, _amen.print)((yield (0, _amen.test)("biscotti-css", _asyncToGenerator(function* () {
    var render, result, sheets;
    render = (0, _src2.default)();
    sheets = yield render({
      path: (0, _path.resolve)("./test/files/index.vcss")
    });
    result = _pandaVcss2.default.render(sheets[0]());
    return (0, _assert2.default)(result, "article > h1 { font-size: 3.6rem; line-height: 4rem; }\narticle > p { font-face: Montserrat; }");
  }))));
})();