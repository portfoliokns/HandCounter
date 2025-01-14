import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function Counter() {
  const [count, setCount] = useState(0);

  const reset = () => {
    if (count === 0) {
      return;
    }

    Alert.alert(
      "リセットしますか？",
      "カウントを0にリセットします",
      [
        {
          text: "キャンセル",
          style: "cancel",
        },
        {
          text: "リセット",
          onPress: () => setCount(0),
        },
      ],
      { cancelable: true }
    );
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={reset}>
          <Text style={[styles.buttonText, { fontSize: RFValue(30) }]}>
            リセット
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusButton} onPress={decrement}>
          <Text style={[styles.buttonText, { fontSize: RFValue(30) }]}>
            マイナス
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity style={styles.countButton} onPress={increment}>
        <Text style={[styles.buttonText, { fontSize: RFValue(50) }]}>
          カウント
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    top: height * 0.01,
    height: height * 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  resetButton: {
    width: width * 0.46,
    backgroundColor: "#FF6347",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  minusButton: {
    width: width * 0.46,
    marginLeft: width * 0.02,
    backgroundColor: "#FF8C00",
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    position: "absolute",
    top: height * 0.3,
    fontSize: 150,
  },
  countButton: {
    position: "absolute",
    top: height * 0.69,
    height: height * 0.26,
    width: width * 0.96,
    backgroundColor: "#4660B4",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
