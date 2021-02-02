import React from "react";
import { Icon, Input, Layout } from "@ui-kitten/components";
import debounce from "lodash.debounce";
import { StyleSheet, View } from "react-native";

export const SearchBar = ({ fetchNewsSearchResults }) => {
  const [value, setValue] = React.useState("");

  return (
    <Layout style={styles.container}>
      <Icon
        style={styles.icon}
        name="menu-outline"
        fill="#8F9BB3"
        onPress={() => {
          console.log("menu icon pressed");
        }}
      />
      <Input
        style={{ flex: 1 }}
        placeholder="Search"
        value={value}
        onChangeText={(searchTerm) => {
          setValue(searchTerm);
          const debouncedSearch = debounce(fetchNewsSearchResults, 1000);
          debouncedSearch(searchTerm);
        }}
      />
      <Icon
        style={styles.icon}
        name="options-outline"
        fill="#8F9BB3"
        onPress={() => {
          console.log("options icon pressed");
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 6,
  },
  icon: { width: 32, height: 32, marginHorizontal: 4 },
});
