import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import "expo-dev-client";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "src/theme";
import { a } from "src/some-folder/abc";

export default function AppWrapper() {
	return (
		<>
			<Text>Open up App.js to start working on your app!</Text>
			<App />
		</>
	);
}

const App = () => {
	return (
		<PaperProvider theme={theme}>
			<Button icon="camera" mode="contained">
				dsaf {a}
			</Button>
		</PaperProvider>
	);
};
