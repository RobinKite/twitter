export const compareByDate = (a, b) => {
  const dateA = new Date(a.createdAt);
  const dateB = new Date(b.createdAt);

  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
};

export function capitalize(text) {
  if (text.length <= 1) return text.toUpperCase();
  return text[0].toUpperCase() + text.substr(1).toLowerCase();
}

export const sortByCreatedAt = (posts) => {
  return posts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

export const setPostsTemplate = (state, action, postsType) => {
  if (!action.payload.content || !action.payload.content.length) {
    state.hasMore = false;
  } else {
    state.hasMore = true;
    const uniquePosts = action.payload.content.filter((post) =>
      state[postsType]?.every(
        (existingPost) => JSON.stringify(existingPost) !== JSON.stringify(post),
      ),
    );
    // if (action.payload.number >= action.payload.totalPages) {
    //   state.hasMore = false;
    // } else {
    //   state.hasMore = true;
    // }
    state[postsType] = [...state[postsType], ...uniquePosts];
    state.page = action.payload.number;
  }
};
