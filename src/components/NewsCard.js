import React from "react";
import { Card, Text } from "@ui-kitten/components";
import { StyleSheet, View, Image, Linking } from "react-native";

export default function NewsCard({ item }) {
  const onItemPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const renderItemHeader = (item) => (
    <Image style={styles.itemHeader} source={{ uri: item.urlToImage }} />
  );

  const renderItemFooter = (item) => (
    <View style={styles.itemFooter}>
      {/* <Avatar source={item.author.photo} /> */}
      <View style={styles.itemAuthoringContainer}>
        <Text category="s2">{item.author}</Text>
        <Text appearance="hint" category="c1">
          {renderDate(item.publishedAt)}
        </Text>
      </View>
    </View>
  );

  const renderDate = (dateFromApi) => {
    let date = new Date(dateFromApi);
    return date.toDateString();
  };

  return (
    <Card
      style={styles.item}
      header={() => renderItemHeader(item)}
      footer={() => renderItemFooter(item)}
      onPress={() => onItemPress(item.url)}
    >
      <Text style={styles.title} category="h6">
        {item.title}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  itemHeader: {
    height: 220,
    borderRadius: 16,
  },
  item: {
    margin: 8,
    borderRadius: 16,
    // padding: 4,
  },
  title: {
    fontWeight: "bold",
    // color: "#555",
  },
  itemFooter: {
    flexDirection: "row",
  },
  itemAuthoringContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
  },
});
