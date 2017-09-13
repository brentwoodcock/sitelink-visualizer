'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WSDLElement = require('./wsdlElement');

var Documentation = function (_WSDLElement) {
  _inherits(Documentation, _WSDLElement);

  function Documentation(nsName, attrs, options) {
    _classCallCheck(this, Documentation);

    return _possibleConstructorReturn(this, (Documentation.__proto__ || Object.getPrototypeOf(Documentation)).call(this, nsName, attrs, options));
  }

  return Documentation;
}(WSDLElement);

Documentation.elementName = 'documentation';
Documentation.allowedChildren = [];

module.exports = Documentation;