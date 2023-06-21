import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import QuestionListItem from "../src/components/QuestionListItem";
import { useQuery } from "urql";
import {questionQuery} from "../src/graphql/queries";

export default function Page() {
  const [response] = useQuery({ query: questionQuery });

  if (response.fetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (response.error) {
    return (
      <View style={styles.container}>
        <Text>Error!</Text>
        <Text>{response.error.message}</Text>
      </View>
    );
  }

  
  return (
    <View style={styles.container}>
      {/* <QuestionListItem question={questions.items[0]} /> */}
      <FlatList 
       data={response.data.questions.items}
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
