import { StyleSheet, Text, View } from "react-native";
import questions from "../../data/questions";

const question = questions.items[1 ];

const QuestionListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.stats}>
        {question.score} votes • {question.answer_count} answers •{" "}
        {question.view_count} views
      </Text>
      <Text style={styles.title}>{question.title}</Text>
      <Text style={styles.body} numberOfLines={2}>
        {question.body_markdown}
      </Text>
      <View style={styles.tags}>
        {question.tags.map((tag, index) => (
          <Text style={styles.tag} key={index}>
            {tag}
          </Text>
        ))}
        <Text style={styles.time}>
          {" "}
          asked {new Date(question.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgray',
    },
    stats: {
        fontSize: 12,
    },
    title: {
        color: '#0063bf',
        marginVertical: 5,

    },
    body: {
        fontSize: 11,
        color: 'dimgray',
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 5,
        alignItems: 'center',
    },
    tag: {
        backgroundColor: '#e1ecf4',
        color: '#39739d',
        padding: 5,
        borderRadius: 3,
        overflow: 'hidden',
        fontSize: 12,
    }, 
    time: {
        marginLeft: 'auto',
        fontSize: 12,
        color: 'dimgray',
    }
})

export default QuestionListItem;
