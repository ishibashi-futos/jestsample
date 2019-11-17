const FormManager = (() => {
  const FormManager = function () {
    this.items = new Map()
    this.initInputColor = () => {
      new wijmo.input.InputColor("#inputColor")
    }
  }

  let p = FormManager.prototype
  let initWijmo = function (selector) {
    let flexGrid = new wijmo.grid.FlexGrid(selector);
    this.items.set(selector, flexGrid)
  }
  p.initWijmo = initWijmo;

  let removeFlexGrid = function (selector) {
    $(selector).empty();
  }
  p.removeFlexGrid = removeFlexGrid;

  return FormManager
})()

exports.FormManager = FormManager