import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Your authentication logic goes here
    // For simplicity, let's assume a successful login for any input

    navigation.navigate('ProductList', {
      username: username,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>LoginScreen</Text>
        <View style={styles.crdential}>
          <Text style={styles.text}>UserName</Text>
          <TextInput
            style={styles.texInput}
            placeholder="Username"
            value={username}
            onChangeText={text => {
              setUsername(text);
              setError('');
            }}
          />
          <Text style={styles.text}>PassWord</Text>
          <TextInput
            style={styles.texInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => {
              setPassword(text);
              setError('');
            }}
          />

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texInput: {
    backgroundColor: '#fff',
    marginVertical: 16,
    borderRadius: 10,
    color: '#000',
  },
  text: {
    color: '#fff',
  },
  container: {
    margin: 16,
  },
  crdential: {
    margin: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default LoginScreen;
