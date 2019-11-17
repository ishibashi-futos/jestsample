/**
 * wijmoをglobalに展開するだけ
 */
const wijmo = {
  grid: {
    FlexGrid: require("@grapecity/wijmo.grid").FlexGrid
  },
  input: require("@grapecity/wijmo.input"),
  gauge: require("@grapecity/wijmo.gauge"),
  nav: require("@grapecity/wijmo.nav")
}
global.wijmo = wijmo;
