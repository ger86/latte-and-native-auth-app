import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useUserContext} from '#/contexts/UserContext';

export default function LoginScreen() {
  const {login} = useUserContext();
  const [form, setForm] = useState({email: '', password: ''});

  function handleEmailChange(text) {
    setForm(currentForm => ({
      ...currentForm,
      email: text,
    }));
  }

  function handlePasswordChange(text) {
    setForm(currentForm => ({
      ...currentForm,
      password: text,
    }));
  }

  function handleLoginPress() {
    if (form.email !== '' && form.password !== '') {
      login(form);
    }
  }

  return (
    <View>
      <View>
        <Text>Email</Text>
        <TextInput value={form.email} onChangeText={handleEmailChange} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput value={form.password} onChangeText={handlePasswordChange} />
      </View>
      <View>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
