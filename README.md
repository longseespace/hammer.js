# React Native Hammer.JS

This is a port of Hammer.JS for React Native.
* ReactNative: peerDependencies 0.17.x
* HammerJS: 2.0.4

## Usage

```jsx
import ...

import { Hammer, addGestureRecognizer } from 'react-native-hammerjs';

class YourComponent extends React.Component {
  constructor(props: any) {
    super(props);

    const mc = this.props.hammer;

    const pan = new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
    mc.add(pan);

    mc.on('pan', (e) => {
      console.log('pan', e);
    });
  }

  render() {
    return (
      <View {...this.props.handlers}>
      </View>
    );
  }
}

export default addGestureRecognizer(YourComponent);
```

This module exposes:
1. `Hammer`: Hammer class as in `HammerJS`
2. `GestureRecognizer`: Class `GestureRecognizer`
3. `addGestureRecognizer`: A function that create a [Higher Order Component](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.kdny7yuwf) that wraps `YourComponent` and passes props `handlers` (GestureRecognizer handlers)

Visit [hammerjs.github.io](http://hammerjs.github.io) for documentation.
