import React from 'react';
import {Text, View} from 'react-native';
import {useUserContext} from '#/contexts/UserContext';

export default function UserScreen() {
  const {user} = useUserContext();
  return (
    <View>
      <Text>Email: {user.email}</Text>
    </View>
  );
}
