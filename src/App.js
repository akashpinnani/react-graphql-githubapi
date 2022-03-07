import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Topic from "./topic";
import Loader from "./loader";
import {TopicQuery} from "./TopicQuery";

const REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN = "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";

function App() {
  const [reactTopics, setReactTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("react");
  const [loader, setLoader] = useState(false);


  const baseUrl = "https://api.github.com/graphql";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `bearer ${REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
  };



  const getReactTopic = () => {
    setLoader(true);
    fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(TopicQuery(currentTopic)),
    })
      .then((response) => response.json())
      .then((value) => {
        const relatedTopics = value.data.topic.relatedTopics;
        setReactTopics(relatedTopics);
        setLoader(false);
      });
  }

  const updateTopic = (topic) => {
    setCurrentTopic(topic);
  }

  useEffect(() => {
    if(REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN) {
      getReactTopic();
    }
  }, [currentTopic]);

  return (
    <div className="App">
      {REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN ? <>
        <h1 className="topic-header"> {currentTopic} Topic</h1>
        {loader ? <Loader></Loader> : reactTopics.map((topic) =>
          <Topic key={topic.id} {...topic} updateTopic={updateTopic}></Topic>
        )}
      </>
        : <div className="warning-msg">Please add your github token to access github API</div>
      }
    </div>
  );
}

export default App;
