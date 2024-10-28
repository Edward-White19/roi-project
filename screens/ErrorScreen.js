import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ErrorScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error Screen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});