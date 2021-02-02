import * as React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const BottomTabBar = ({ navigation, state }) => {
  return (
    <React.Fragment>
      <BottomNavigation
        style={{ marginVertical: 4 }}
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}
      >
        <BottomNavigationTab
          title="Home"
          icon={(props) => {
            return (
              <Ionicons
                color={props.style.tintColor}
                name="newspaper-outline"
                size={24}
                style={{ marginVertical: 2 }}
              />
            );
          }}
        />
        <BottomNavigationTab
          title="Profile"
          icon={(props) => <Icon {...props} name="person-outline" size={24} />}
        />
        <BottomNavigationTab
          title="Settings"
          icon={(props) => (
            <Icon {...props} name="settings-outline" size={24} />
          )}
        />
      </BottomNavigation>
    </React.Fragment>
  );
};

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Profile" component={ProfileScreen} />
        <Screen name="Settings" component={SettingsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
