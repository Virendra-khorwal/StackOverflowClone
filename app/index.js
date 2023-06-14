import { StyleSheet, Text, View, FlatList } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import questions from "../data/questions";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* <QuestionListItem question={questions.items[0]} /> */}
      <FlatList 
       data={questions.items}
       renderItem={({item}) => <QuestionListItem question={item} />}
       showsVerticalScrollIndicator={false}
      />
      
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
