import { StyleSheet, Text, View } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";

export default function Page() {
  return (
    <View style={styles.container}>
      <QuestionListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  
});
