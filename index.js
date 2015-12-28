var Hammer = require('./hammer');
var GestureRecognizer = require('./GestureRecognizer');
var React = require('react-native');

function addGestureRecognizer(Component) {
  var gr = new GestureRecognizer();

  var Wrapper = React.createClass({
    render() {
      return <Component {...this.props} handlers={gr.handlers()} hammer={gr.hammer()} />;
    }
  });

  return Wrapper;
};

exports = module.exports = {
  default: Hammer,
  Hammer: Hammer,
  GestureRecognizer: GestureRecognizer,
  addGestureRecognizer: addGestureRecognizer
}
