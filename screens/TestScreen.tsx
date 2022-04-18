import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function TestScreen() {
  return (
    <View style={styles.container}>
        <Text>
            This is a test
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default TestScreen;