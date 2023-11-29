export class Endpoint {
  static LOGIN = "/auth/login";
  static REGISTER = "/auth/register";
  static LIKE = "/likes/like";
  static UNLIKE = "/likes/unlike";
  static CREATE_POST = "/posts/create";
  static GET_POST = "/posts/post";
  static DELETE_POST = "/posts/delete";
  static GET_POST_REPLIES = "/posts/replies";
  static GET_MY_POSTS = "/posts/home";
  static SUBSCRIPTIONS = "/subscriptions";
  static USERS_SEARCH = "/users/search";
  static USERS_RECOMMENDED = "/users/recommended";
  static GOOGLE_REGISTRATION = "/oauth2/exchange-code/google";
}
