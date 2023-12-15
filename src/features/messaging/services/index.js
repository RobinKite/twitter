import store from "@/redux/store";

export class Parser {
  static parseConversation(conversation) {
    return conversation.users.length === 2
      ? this.#parsePrivateConversation(conversation)
      : this.#parseGroupConversation(conversation);
  }

  static #parsePrivateConversation(conversation) {
    const { id, users, messageDate, messageText } =
      this.#getConversationCommonFields(conversation);
    const [recipient] = users;
    return {
      id,
      avatarURL: recipient.avatarUrl,
      titleText: recipient.fullName,
      metaText: "@" + recipient.userTag + (messageDate ? ` · ${messageDate}` : ""),
      messageText: messageText,
    };
  }

  static #parseGroupConversation(conversation) {
    const { id, users, messageDate, messageText } =
      this.#getConversationCommonFields(conversation);
    const titleText = users.map((user) => user.fullName).join(", ");
    return { id, titleText, avatarURL: "", metaText: messageDate, messageText };
  }

  static #getConversationCommonFields(conversation) {
    const currentUser = store.getState().user.user;
    const users = conversation.users.filter((user) => user.id !== currentUser.id);
    let [messageText, messageDate] = ["", ""];

    if (conversation.lastMessage) {
      if (conversation.lastMessage.user.id === currentUser.id) messageText += "You: ";
      messageText += conversation.lastMessage.body;
      messageDate += conversation.lastMessage.createdAt;
    } else {
      messageText += "This conversation has no messages.";
    }
    return { id: conversation.id, users, messageText, messageDate };
  }
}
