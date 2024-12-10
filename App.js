import React from "react"; 
import { Button, View, StyleSheet } from "react-native"; 

export default function App() {

  return (
   <>
   <View 
    style={style.container}
      >
    <Button 
          color="blue"
          title="trial"  
      ></Button>
      <Button 
      color="gold"
       title="trial"
      ></Button>
      <Button 
      color="tomato"
       title="trial"
      ></Button>
      </View>
    </>
  );
} 

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 50,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
}
);