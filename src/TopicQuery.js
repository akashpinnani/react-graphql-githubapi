export const TopicQuery = (currentTopic) => {
  return {
  query: `query{
  topic(name: "${currentTopic}") {
    name
    relatedTopics(first: 10) {
      name
      stargazerCount
      relatedTopics {
        name
        stargazerCount
      }
    }
}
}
`}
}
