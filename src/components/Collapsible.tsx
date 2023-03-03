import React, { useCallback, useImperativeHandle } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { CollapsibleProps, CollapsibleType } from './types';

const Collapsible = React.forwardRef<CollapsibleType, CollapsibleProps>(
  ({ children }, ref) => {
    const aref = useAnimatedRef<View>();
    const isOpen = useSharedValue<boolean>(false);
    const progress = useDerivedValue(() =>
      isOpen.value ? withSpring(1) : withTiming(0)
    );
    const animatedHeight = useSharedValue<number>(0);

    const animatedStyle = useAnimatedStyle(() => ({
      height: animatedHeight.value * progress.value + 1,
      opacity: progress.value === 0 ? 0 : 1,
    }));

    const toggle = useCallback(() => {
      runOnUI(() => {
        'worklet';
        const measuredHeight = measure(aref)?.height;
        if (typeof measuredHeight === 'number') {
          animatedHeight.value = measuredHeight;
        }
        isOpen.value = !isOpen.value;
      })();
    }, [animatedHeight, aref, isOpen]);

    useImperativeHandle(ref, () => ({
      toggle,
    }));

    return (
      <Animated.View style={[styles.container, animatedStyle]}>
        <View ref={aref} style={styles.content}>
          {children}
        </View>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
  content: { position: 'absolute', width: '100%' },
});
export default Collapsible;
