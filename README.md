# rxn-input
🎮 🖱️ ⌨️‎ ‎ Cross Platform Input Handler for React and React Native.

<br/><a href="#"><img width="250px" src="http://www.animatedgif.net/underconstruction/anim0205-1_e0.gif"/></a>

Support:

|               | Android | IOS | Web <br/>(react-native-web) | Windows <br/>(react-native-windows) |  Expo  |
|----------------|:-------:|:---:|:----------------------:|:---------------------------------------:|:------:|
| Mouse‎ ‎ 🖱️    |    🚧  |  🚧  |            🚧        |                    🚧                   |   ❌  |
| Keyboard‎ ‎ ⌨️ |    ✅  |  🚧  |            ✅        |                    🚧                   |   ❌  |
| Gamepad‎ ‎ 🎮  |    🚧  |  🚧  |            🚧        |                    🚧                   |   ❌  |
| MIDI‎ ‎ 🎹     |    🚧  |  🚧  |            🚧        |                    🚧                   |   ❌  |

Inspired by [react-native-keyevent](https://github.com/kevinejohn/react-native-keyevent) and [Unity](https://unity.com).

##  Install

Using NPM
```sh
npm install rxn-input
```

Using Yarn
```sh
yarn add rxn-input
```

## Setup

<table>
  <tr>
    <td align="center"><img width="46" src="https://cdn.vox-cdn.com/thumbor/kL-Z76ZSmU6AUOBanezRDqSQ7us=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086219/Android_logo_stacked__RGB_.jpg"/><br/>Android</td>
     <td align="center"><img width="46" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnunL1fJZICp_7tCdH7lqBZ6K8CXgBGFu4Q&usqp=CAU"/><br/>IOS</td>
  </tr>
  <tr>
    <td align="center"><a href="./docs/ANDROID_SETUP.md">See instructions here</a></td>
    <td align="center">Working on it...</td>
  </tr>
 </table>

🌐 Using this module for Web?<br/>Don't forget to setup [react-native-web](https://github.com/necolas/react-native-web)

## Usage

```typescript
import React, {useCallback, useEffect} from 'react';
import {KeyListener} from "rxn-input";

const App = () => {

  const handleKeyDown = useCallback((e) => {
    // Your implementation here
  }, []);

  const handleKeyUp = useCallback((e) => {
    // Your implementation here
  }, []);

  useEffect(() => {
    const keyDownListener = KeyListener.addListener("keydown", handleKeyDown);
    const keyUpListener = KeyListener.addListener("keyup", handleKeyUp);

    return () => {
      KeyListener.removeListener(keyDownListener);
      KeyListener.removeListener(keyUpListener);
    };
  }, [handleKeyDown, handleKeyUp]);

  return <></>;
};
```

## Contributors

<a href = "https://github.com/Luffos/rxn-input/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=Luffos/rxn-input"/>
</a>

##  📄 License
MIT - This module was built with ❤️ by [Luffos](https://github.com/Luffos)<br/>Feel free for modify, edit, copy, fork and share