import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawerContent } from './CustomDrawerContent';
import { useNavigate } from '../../hooks/useNavigate';
import ClientStack from '../routes/ClientStack';
import CustomHeader from '../../components/header';

function SettingsScreen() {
  const { navigate } = useNavigate()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configurações</Text>
      <Button
        onPress={() => navigate('NotificationsScreen')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen() {
  const { goBack, navigate } = useNavigate()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notificações</Text>
      <Button onPress={() => navigate('SettingsScreen')} title="Go Settings" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: (props) => <CustomHeader {...props} />
      }}
    >
      <Drawer.Screen name="ClientStack" component={ClientStack} />
      {/* <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} /> */}

    </Drawer.Navigator>
  );
}
