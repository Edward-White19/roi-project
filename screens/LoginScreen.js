import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-web';

export default function LoginScreen(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onUsernameChange = () => {
    const name = username;
    setUsername(name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <View style={styles.containerFields}>
        <TextInput
          label="Username"
          placeholder="example.name"
          value={username}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          label="Password"
          placeholder=""
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.containerButtons}>
        <Button
          title="Sign Up"
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        />
        <Button
          title="Log In"
          onPress={() => {
            props.navigation.navigate("Error");
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444",
    margin: 12,
  },
  containerFields: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    paddingVertical: 12,
  },
  containerButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#777",
    padding: 12,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});