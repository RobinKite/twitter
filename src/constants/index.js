export class PostType {
  static TWEET = "TWEET";
  static REPLY = "REPLY";
}

export class Endpoint {
  static LOGIN = "/auth/login";
  static REGISTER = "/auth/register";
  static LIKE = "/likes/like";
  static UNLIKE = "/likes/unlike";
  static CREATE_POST = "/posts/create";
  static GET_POST = "/posts/post";
  static GET_POSTS = "/posts";
  static DELETE_POST = "/posts/delete";
  static GET_POST_REPLIES = "/posts/replies";
  static GET_MY_POSTS = "/posts/home";
  static GET_ALL_POSTS = "posts/feed";
  static GET_POPULAR_POSTS = "/posts/popular";
  static SUBSCRIPTIONS = "/subscriptions";
  static USERS_SEARCH = "/users/search";
  static USERS_RECOMMENDED = "/users/recommended";
  static LIKED_POSTS = "/posts/liked";
  static BOOKMARKS = "/bookmarks";
  static CHATS = "/chats";
  static USERS_FOLLOWERS = "/users/followers";
  static GOOGLE_REGISTRATION = "/oauth2/exchange-code/google";
  static USER_FOLLOWED = "/users/followed";
  static USER_FOLLOWERS = "/users/followers";
  static USER_PROFILE = "/users/profile";
  static USERS_UPDATE = "/users/update";
  static UPLOAD_AVATAR = "/upload/avatar";
  static UPLOAD_BG_IMAGE = "/upload/bg_image";
}
