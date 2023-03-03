# react-native-collapsible

A perfomant collapsible container for dynamic content

## Installation

```sh
npm install react-native-collapsible
```

## Usage

```js
import React from 'react';
import {StyleSheet} from 'react-native;
import Collapsible, { CollapsibleType } from 'react-native-collapsible';

// ...

const App = () => {
  const collapsibleRef = React.useRef<CollapsibleType>(null);
  return (
    <View style={styles.screen}>
      <Pressable onPress={() => collapsibleRef.current?.toggle()}>
        <Text>Header</Text>
      </Pressable>

      <Collapsible ref={collapsibleRef}>
        <View style={styles.contentContainer}>
          <Text>Collapsible Content</Text>
          <Text>Collapsible Content</Text>
          <Text>Collapsible Content</Text>
        </View>
      </Collapsible>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  contentContainer: {backgroundColor: 'lightblue', alignItems: 'center'}
})
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
