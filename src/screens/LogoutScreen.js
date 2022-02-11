import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useUserContext} from '#/contexts/UserContext';

export default function LogoutScreen() {
  const {logout} = useUserContext();

  return (
    <View>
      <TouchableOpacity onPress={logout}>
        <Text>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
