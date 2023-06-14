import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSearchParams } from "expo-router";
import QuestionHeader from "../src/components/QuestionHeader";

import questions from "../data/questions";
import answers from "../data/answers";
import AnswerListItem from "../src/components/AnswerListItem";

const QuestionDetailsPage = () => {
  const { id } = useSearchParams();

  const question = questions.items.find(
    (question) => question.question_id == id
  );

  if (!question) {
    return (
      <View style={styles.container}>
        <Text>Question not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={answers.items}
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
  },
});

export default QuestionDetailsPage;
