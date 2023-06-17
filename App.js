// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import SectionListItems from './component/SectionListItems';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Navigation/root";
import UsersContextProvider from "./context/UsersContext";

export default function App() {
  return (
    <>
      {/* <SectionListItems/> */}

     
    <UsersContextProvider>
    <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Root></Root>
     </NavigationContainer>
     </SafeAreaView>
     </UsersContextProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    textAlign:"center",
    marginTop:30,
    height: "100%",
    width: "100%",
    padding:10,
  },
});
