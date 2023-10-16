// newsActions.js
export const fetchNews = () => {
  return {
    type: "FETCH_NEWS",
  };
};

export const fetchNewsData = (data) => {
  console.log(data);
  return {
    type: "SET_NEWS",
    payload: { data },
  };
};
export const newsData = (data) => {
  console.log(data);
  return {
    type: "NEWS_DATA",
    payload: { data },
  };
};

const initialState = {
  news: [],
  newsData: {},
};

// newsReducer.js
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWS":
      console.log(action);
      return (state.news = action.payload.data);
    case "NEWS_DATA":
      console.log(action);
      return (state.newsData = action.payload.data);

    default:
      return state;
  }
};

export default newsReducer;
