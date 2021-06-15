import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTweetAction } from "../actions/tweetsActions";

export default function TweetList() {
  const tweets = useSelector((state) => state.tweets.tweetslist);
  return tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />);
}

function Tweet({ tweet }) {
  const dispatch = useDispatch();
  const deleteTweet = (id) => dispatch(deleteTweetAction(id));

  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title>{tweet.name}</Card.Title>
        <Card.Text>{tweet.tweet}</Card.Text>
        <Button onClick={() => deleteTweet(tweet.id)} variant="danger">
          Eliminar Tweet
        </Button>
      </Card.Body>
    </Card>
  );
}
