import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Counter from "@/components/Counter";
import History from "@/components/History";

export default function HomePage() {
  const Tab = createBottomTabNavigator();
  const [history, setHistory] = useState<string[]>([]);

  return (
    <Tab.Navigator
      initialRouteName="カウンター" // 初期表示タブ
      screenOptions={{
        headerShown: false, // ヘッダー非表示
        tabBarStyle: {
          height: 60, // タブの高さを調整
          padding: 0, // padding を0に設定
        },
      }}
    >
      <Tab.Screen name="カウンター" component={Counter} />
      <Tab.Screen name="履歴" component={History} />
    </Tab.Navigator>
  );
}
