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
    default:
      return state;
  }
}
