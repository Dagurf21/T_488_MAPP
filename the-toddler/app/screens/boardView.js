// views/BoardView.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BoardView = () => {
  return (
    <View style={styles.container}>
      <Text>Boards</Text>
      <Button title={'Create New Board'} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BoardView;
