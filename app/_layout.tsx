import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

const MINIAPP_URL = "https://d034fav6l21jmm2gekqg-free.us.btunnel.co.in";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: MINIAPP_URL }}
        style={styles.webview}
        originWhitelist={["*"]}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  webview: {
    flex: 1,
  },
});
