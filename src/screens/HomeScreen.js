import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import {
  ImageBackground,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NewsApi from "../api/news";
import { Button, Card, List, ListItem } from "@ui-kitten/components";

function HomeScreen(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const result = await NewsApi.getNews();
      setData(result.data.articles);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onItemPress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  const renderItemHeader = (item) => (
    <ImageBackground
      style={styles.itemHeader}
      source={{ uri: item.urlToImage }}
    />
  );

  const renderItemFooter = (item) => (
    <View style={styles.itemFooter}>
      {/* <Avatar source={info.item.author.photo} /> */}
      <View style={styles.itemAuthoringContainer}>
        <Text category="s2">{item.author}</Text>
        <Text appearance="hint" category="c1">
          {item.publishedAt}
        </Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(item)}
      footer={() => renderItemFooter(item)}
      onPress={() => onItemPress(item.url)}
    >
      <Text category="h5">{item.title}</Text>
      <Text style={styles.itemContent} appearance="hint" category="s1">
        {item.description}
      </Text>
    </Card>
  );

  return (
    <SafeAreaView style={styles.screen}>
      {data && (
        <List style={styles.container} data={data} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  item: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
  },
  itemHeader: {
    height: 220,
  },
  itemContent: {
    marginVertical: 8,
  },
  itemFooter: {
    flexDirection: "row",
    marginHorizontal: -8,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  itemAuthoringContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
export default HomeScreen;
