export const addTweetAction = (tweet) => {
  return {
    type: "ADD_TWEET",
    payload: tweet,
  };
};

export const deleteTweetAction = (id) => {
  return {
    type: "DELETE_TWEET",
    payload: id,
  };
};
