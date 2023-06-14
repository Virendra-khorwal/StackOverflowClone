
import {View, Text, StyleSheet} from "react-native";
import { useSearchParams } from "expo-router";
import questions from "../data/questions";
import QuestionHeader from "../src/components/QuestionHeader";

const QuestionDetailsPage = () => {

    const {id} = useSearchParams();

    const question = questions.items.find(question => question.question_id == id);

    if (!question) {
        return (
            <View style={styles.container}>
            <Text>Question not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
        <QuestionHeader question={question} />
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
});

export default QuestionDetailsPage;