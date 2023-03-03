import * as React from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import Collapsible, { CollapsibleType } from 'react-native-collapsible';

export default function App() {
  const collapsibleRef = React.useRef<CollapsibleType>(null);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => collapsibleRef.current?.toggle()}>
        <Text>Header Text</Text>
      </Pressable>
      <Collapsible ref={collapsibleRef}>
        <View style={styles.content}>
          <Text>Collapsible Content 1</Text>
          <Text>Collapsible Content 2</Text>
          <Text>Collapsible Content 3</Text>
        </View>
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
});
