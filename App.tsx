
import React from "react"; 
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

const MyTheme = {
  // ...DefaultTheme,
  // colors: {
  //   ...DefaultTheme.colors,
  //   primary: 'rgb(255, 45, 85)',
  // },
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


 const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
export default App