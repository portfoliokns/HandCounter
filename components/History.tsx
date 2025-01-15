import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

type CounterProps = {
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function History({ history, setHistory }: CounterProps) {
  return (
    <View>
      <Text>{history}</Text>
    </View>
  );
}
