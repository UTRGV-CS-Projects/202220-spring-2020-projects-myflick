import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

function TestScreen() {
  return (
    <View style={styles.container}>
        <Text>
            This is a test
        </Text>
        <Button
        title="Press me!"
        onPress={() => {}}
        testID="pressMeButton"
        accessibilityLabel="Press me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default TestScreen;