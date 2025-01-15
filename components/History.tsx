import React from "react";
import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";

type CounterProps = {
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function History({ history, setHistory }: CounterProps) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {history
          .slice()
          .reverse()
          .map((item, index) => (
            <Text style={styles.text} key={index}>
              ・{item}
            </Text>
          ))}
      </View>
    </ScrollView>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFEF",
    flex: 1,
    padding: 3,
    paddingBottom: 20,
    alignItems: "center",
    width: width,
  },
  text: {
    paddingTop: 10,
    fontSize: 20,
  },
});
