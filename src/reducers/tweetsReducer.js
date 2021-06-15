const initialProps = {
  tweetslist: [],
};

export default function (state = initialProps, action) {
  switch (action.type) {
    case "ADD_TWEET":
      return {
        ...state,
        tweetslist: [...state.tweetslist, action.payload],
      };
    case "DELETE_TWEET":
      return {
        ...state,
        tweetslist: state.tweetslist.filter(
          (tweet) => tweet.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
