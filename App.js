import Main from "./screens/MainComponent";

export default function App() {
  return <Main />;
}

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Fuck, why is this not working!!!!</Text>
//       <Text>Fuck</Text>
//       <Text>Fuck</Text>
//       <Text>Fuck</Text>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "yellow",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const LotsOfStyles = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.red}>just red</Text>
//       <Text style={styles.bigBlue}>just bigBlue</Text>
//       <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//       <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 50,
//   },
//   bigBlue: {
//     color: "blue",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   red: {
//     color: "red",
//   },
// });

// export default LotsOfStyles;

// import React, { Component } from "react";
// import { View, Image, StyleSheet, Text } from "react-native";

// const styles = StyleSheet.create({
//   stretch: {
//     width: 250,
//     height: 200,
//     resizeMode: "stretch",
//   },
// });

// class DisplayAnImageWithStyle extends Component {
//   render() {
//     return (
//       <View>
//         <Image
//           style={styles.stretch}
//           source={require("./assets/images/bootstrap-logo.png")}
//         />
//         <Text>Fuck, why is this not working!!!!</Text>
//       </View>
//     );
//   }
// }

// export default DisplayAnImageWithStyle;
