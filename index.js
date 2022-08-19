import "react-native-gesture-handler";

import { registerRootComponent } from "expo";

import "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

if (__DEV__) {
  firestore()
    .terminate()
    .then(() => {
      firestore()
        .clearPersistence()
        .then(() => {
          firestore().useEmulator("localhost", 8000);
        })
        .catch(() => console.error("Clear persistence error"));
    })
    .catch(() => console.error("Terminate error"));
}

firestore();

import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
