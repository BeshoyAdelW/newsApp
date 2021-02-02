import React from "react";
import {
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";

export default function Header({ title, navigation }) {
  const BackAction = () => (
    <TopNavigationAction
      icon={(props) => <Icon {...props} name="arrow-back" />}
      onPress={() => {
        navigation.goBack();
      }}
    />
  );

  return (
    <TopNavigation
      title={title}
      alignment="center"
      accessoryLeft={BackAction}
    />
  );
}
