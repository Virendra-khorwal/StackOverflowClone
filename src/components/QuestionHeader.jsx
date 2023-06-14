
import { StyleSheet, Text, View } from "react-native";
import { decode } from "html-entities";
import Markdown from "react-native-markdown-display";

const QuestionHeader = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{decode(question.title)}</Text>
      <Text style={styles.stats}>
        {question.score} votes • {question.answer_count} answers •{" "}
        {question.view_count} views
      </Text>

      <View style={styles.separator} />
      
      <Markdown>{decode(question.body_markdown)}</Markdown>
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
    borderBottomColor: "lightgray", 
    flex: 1,
  },
  stats: {
    fontSize: 12,
  },
  title: {
    color: "#3b4045",
    marginVertical: 5,
    fontSize: 20,
    fontWeight: '500',
    
  },
  body: {
    // fontSize: 11,
    // color: "dimgray",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginTop: 5,
    alignItems: "center",
  },
  tag: {
    backgroundColor: "#e1ecf4",
    color: "#39739d",
    padding: 5,
    borderRadius: 3,
    overflow: "hidden",
    fontSize: 12,
  },
  time: {
    marginLeft: "auto",
    fontSize: 12,
    color: "dimgray",
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
    marginVertical: 10,
  }
});

export default QuestionHeader;
