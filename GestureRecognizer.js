var Hammer = require('./hammer');

GestureRecognizer = function() {
  var noop = function() {
  }

  this._mcEventHandlers = {
    touchstart: noop,
    touchmove: noop,
    touchend: noop,
    touchcancel: noop
  };

  this._touchHandlers = {
    onStartShouldSetResponder: this._onStartShouldSetResponder.bind(this),
    onMoveShouldSetResponder: this._onMoveShouldSetResponder.bind(this),
    onResponderGrant: this._onResponderGrant.bind(this),
    onResponderReject: this._onResponderReject.bind(this),
    onResponderMove: this._onResponderMove.bind(this),
    onResponderRelease: this._onResponderRelease.bind(this),
    onResponderTerminationRequest: this._onResponderTerminationRequest.bind(this),
    onResponderTerminate: this._onResponderTerminate.bind(this)
  };

  var _fakeElement = {
    addEventListener: function(type, handler, flag) {
      this._mcEventHandlers[type] = function(ev) {
        // console.log(ev)
        ev.type = type;
        ev.x = ev.clientX = ev.screenX = ev.locationX;
        ev.y = ev.clientY = ev.screenY = ev.locationY;
        handler(ev);
      };
    }.bind(this),
    style: {
      touchAction: 'compute'
    }
  };

  var mc = new Hammer.Manager(_fakeElement, {
    inputClass: Hammer.TouchInput,
    touchAction: 'compute'
  });

  this._mc = mc;
}

GestureRecognizer.prototype.hammer = function() {
  return this._mc;
}

GestureRecognizer.prototype.handlers = function() {
  return this._touchHandlers;
}

GestureRecognizer.prototype._onStartShouldSetResponder = function(e, gs) {
  return true;
}

GestureRecognizer.prototype._onMoveShouldSetResponder = function(e, gs) {
  return true;
};

GestureRecognizer.prototype._onResponderGrant = function(e, gs) {
  console.log(this, this._mcEventHandlers);
  this._mcEventHandlers.touchstart(e.nativeEvent);
};

GestureRecognizer.prototype._onResponderReject = function(e, gs) {
  this._mcEventHandlers.touchcancel(e.nativeEvent);
};

GestureRecognizer.prototype._onResponderMove = function(e, gs) {
  this._mcEventHandlers.touchmove(e.nativeEvent);
};

GestureRecognizer.prototype._onResponderRelease = function(e, gs) {
  this._mcEventHandlers.touchend(e.nativeEvent);
};

GestureRecognizer.prototype._onResponderTerminationRequest = function(e, gs) {
  // console.log("_onResponderTerminationRequest", e);
};

GestureRecognizer.prototype._onResponderTerminate = function(e, gs) {
  // console.log("_onResponderTerminate", e);
};


module.exports = GestureRecognizer;
