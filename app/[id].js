import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSearchParams } from "expo-router";
import QuestionHeader from "../src/components/QuestionHeader";
import { useQuery } from "urql";
import { getQuestionQuery } from "../src/graphql/queries";
import { ActivityIndicator } from "react-native";

import questions from "../data/questions";
import answers from "../data/answers";
import AnswerListItem from "../src/components/AnswerListItem";

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();
  const [response] = useQuery({
    query: getQuestionQuery,
    variables: { id },
  })

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

  const question = response.data.question.items[0];

  if (!question) {
    return (
      <View style={styles.container}>
        <Text>Question not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={question.answers.items}
        renderItem={({ item }) => <AnswerListItem answer={item} />}
        ListHeaderComponent={() => <QuestionHeader question={question} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});

export default QuestionDetailsPage;
