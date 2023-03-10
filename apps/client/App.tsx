import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import "expo-dev-client";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./src/theme/index";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
// import { theme } from "src/theme";
// import Routes from "./navigation";
// import { NavigationContainer } from "@react-navigation/native";
// import { StatusBar } from "components/StatusBar";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import { PersistGate } from "redux-persist/integration/react";
// import persistStore from "redux-persist/es/persistStore";
// import { QueryClient, QueryClientProvider } from "react-query";
// import HeadingSensorContextProvider from "context/HeadingSensorContext";

// import { enableLatestRenderer } from "react-native-maps";
//// enableLatestRenderer(); Causes crashes if re-rendering custom markers on state changes inside <Map/>

// const persistor = persistStore(store);
// const queryClient = new QueryClient();

// if (__DEV__) {
// 	import("react-query-native-devtools").then(({ addPlugin }) => {
// 		addPlugin({ queryClient });
// 	});
// }

export default function AppWrapper() {
	return (
		// <HeadingSensorContextProvider>
		// <QueryClientProvider client={queryClient}>
		// 	<Provider store={store}>
		// 		<PersistGate loading={null} persistor={persistor}>
		<>
			<Text>Open up App.js to start working on your app!</Text>
			<App />
		</>
		// 		</PersistGate>
		// 	</Provider>
		// </QueryClientProvider>
		// </HeadingSensorContextProvider>
	);
}

const App = () => {
	return (
		<PaperProvider theme={theme}>
			<Button icon="camera" mode="contained">
				dsaf
			</Button>

			{/**
		//* All providers like Redux's store provider should always be
		//* wrapped outside PaperProvider.
		//*ref https://callstack.github.io/react-native-paper/getting-started.html
		//
		// <SafeAreaProvider>
		// 	<SafeAreaView style={{ flex: 1 }}>
		// 		<StatusBar />
		// 		<NavigationContainer>
		<Text>Open up App.js to start working on your app!</Text>

		// 			<Routes />
		// 		</NavigationContainer>
		// 	</SafeAreaView>
		// </SafeAreaProvider>
		*/}
		</PaperProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
