const FormManager = require("./app").FormManager 
require("./wijmo_importer")
require("./jquery_importer")
let formManager = new FormManager();
document.documentElement.innerHTML = `
<div id="hostElement"></div>
`

describe("テスト", () => {
  test("test1", () => {
    formManager.initWijmo("#hostElement")
    formManager.removeFlexGrid("#hostElement")
  })
})