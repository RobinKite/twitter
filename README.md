# Project X (final-project FS 4/FE_17)

This project is hosted on [Vercel](https://twitter-two-roan.vercel.app/).<br/>

Introducing our Twitter-inspired project, the result of a year-long learning experience culminating in an intensive three-month development phase. This endeavor was a collective effort, bringing together a diverse and talented team. Unlike our prior coursework, this final project focused on replicating the distinctive features of the Twitter platform.

Over the extended development period, our team navigated the challenges, demonstrating a deep understanding of the technologies involved. We aimed to not only meet the project's objectives but also to push the boundaries of our skills acquired during the year. The outcome is a testament to our dedication to continuous learning and collaboration in the realm of social media development. Welcome to our Twitter-inspired journey!

## Key Features Implemented:

### User Authentication:

- Implemented a secure login and registration system.

### Dynamic Home Feed:

- Developed infinite scrolling for a seamless browsing experience.

### Real-time Notifications:

- Notified users instantly of likes, comments, and interactions.

### Messaging Feature:

- Enabled private conversations with real-time chat functionality.

### Bookmarking System:

- Allowed users to save and access bookmarked posts.

### User Profiles and Post Pages:

- Created detailed user profiles and interactive post pages.

### Reposting Functionality:

- Enabled users to share content through reposts.

### Interactive Comments and Likes:

- Fostered engagement through comments and likes.

### Visual Customization and Password Change:

- Offered a personalized experience with light/dark themes.
- Implemented a secure password change form.

### Efficient User Search:

- Incorporated a responsive user search feature.

### Responsive Design:

- Optimized UI for tablets and mobile devices.

## 📝 API Documentation

In addition we're excited to provide you with an overview of the existing API server methods. These methods serve as the backbone of our app, facilitating seamless communication between the front-end and back-end functionalities.

<details>
<summary>Click to expand</summary>

### API Endpoints

#### User Authentication:

- **POST `/auth/register`**: Register a new user with the provided credentials, specifying username, password, firstName, and lastName in the request body.
- **POST `/auth/refresh-token`**: Refresh the authentication token.
- **POST `/auth/login`**: Authenticate a user and obtain the authentication token.

#### Image Upload:

- **POST `/upload/bg_image`**: Upload a background image.
- **POST `/upload/avatar`**: Upload an avatar image.

#### Likes:

- **POST `/likes/like`**: Like a post.
- **DELETE `/likes/unlike`**: Remove a like from a post.

#### Subscriptions:

- **POST `/subscriptions`**: Subscribe to a user.
- **DELETE `/subscriptions`**: Unsubscribe from a user.

#### Users:

- **PUT `/users/update`**: Update user information.
- **POST `/users/change-password`**: Change the user's password.
- **GET `/users/{id}`**: Get user information by user id.
- **GET `/users/search`**: Search for users.
- **GET `/users/recommended`**: Get recommended users.
- **GET `/users/profile`**: Get the current user's profile.
- **GET `/users/followers`**: Get followers of a user.
- **GET `/users/followed`**: Get users followed by the current user.

#### Posts:

- **PUT `/posts/update`**: Edit a post.
- **POST `/posts/create`**: Create a new post or repost an existing post.
- **GET `/posts`**: Get posts by a specific user.
- **GET `/posts/replies`**: Get comments (replies) to a post.
- **GET `/posts/replied`**: Get posts that have been recently replied to by a user.
- **GET `/posts/post`**: Get a specific post by id.
- **GET `/posts/popular`**: Get popular posts.
- **GET `/posts/liked`**: Get posts that have been recently liked by a user.
- **GET `/posts/home`**: Get posts by the current user.
- **GET `/posts/feed`**: Get posts from users that the current user is following.
- **DELETE `/posts/delete`**: Delete a post.

#### Chats:

- **GET `/chats`**: Get a list of chats.
- **PUT `/chats`**: Add a new user to a chat.
- **POST `/chats`**: Create a new chat.
- **DELETE `/chats`**: Delete a chat (only for the creator).
- **GET `/chats/{id}`**: Get messages from a specific chat.
- **POST `/chats/{id}`**: Create new messages in a chat.
- **DELETE `/chats/leave-chat`**: Leave a chat.
- **DELETE `/chats/delete-user`**: Delete a user from a chat (only for the creator).

#### Settings:

- **GET `/settings`**: Get user settings.
- **POST `/settings`**: Save changes to user settings.

#### OAuth2 Controller:

- **POST `/oauth2/exchange-code/google`**: Exchange code for OAuth2 with Google.

#### Bookmarks:

- **GET `/bookmarks`**: Get posts added to bookmarks.
- **POST `/bookmarks`**: Add a post to bookmarks by passing postId.
- **DELETE `/bookmarks`**: Delete a post from bookmarks by passing postId.

#### Notifications:

- **GET `/notifications`**: Get notifications.
- **GET `/notifications/count`**: Get the count of notifications.

</details>

## 💻 Technologies

The following technologies were used in this project:

### Core Tools:

- React
- React Router Dom
- Redux Toolkit
- Axios

### Form and Validation:

- Formik/Yup
- prop-types

### UI Components:

- Emoji Picker React
- React Icons
- Material UI
- React Infinite Scroll

### Development Tools:

- Vite
- Eslint
- Prettier
- Husky

### Deployment and CI/CD:

- Heroku Maven Plugin
- GitLab CI/CD

### Documentation and APIs:

- Swagger/OpenAPI
- WebSockets

### Image Processing and Cloud:

- Cloudinary

### Security Libraries:

- JSON Web Token (JWT)
- Argon2 Password Hashing
- OAuth2

### Databases:

- PostgreSQL
- H2
- Liquibase

## 🧑‍💼 Project Management

- Trello: Utilized for task organization, collaboration, and project tracking.
- Google Meet: Used for virtual meetings and team collaboration.
- Agile Methodology: Implemented Scrum framework for efficient project management.

## 🐥 Contributors

- [Vadym](https://github.com/CodeVaDOs) - Project manager
- [Alex Kite](https://github.com/RobinKite) 🦅 - Frontend Team Lead
- [Bohdan](https://github.com/brightly-shining) 😽 - Frontend Dev
- [Tetiana](https://github.com/Tadimm) 🪐 - Frontend Dev
- [Anastasiia](https://github.com/Anastasia-A-2020) 🍀 - Frontend Dev
- [Ruslan](https://github.com/Ruslan07071990) 😉 - Frontend Dev
- [Alina](https://github.com/aldorad0) - Frontend Dev
- [Maksim](https://github.com/maksymchyzhevskyi) - Frontend Dev
- [Ivanka](https://gitlab.com/ivanka_hnybediuki) 🤯 - Backend Dev (GitLab link)

The project owes its success to the committed collaboration of every team member. Today, we're thrilled to showcase our achievements and eagerly anticipate expanding the app's capabilities.

## 📃 Task Distribution

<details>
<summary>Frontend Team</summary>

#### Alex Kite

- Frontend Team Lead.
- Implemented websockets for the project, facilitating notifications and chat functionality.
- Implemented deployment, full refactoring, and support for existing code.
- Handled organizational aspects and participated in almost every component.
- Assisted in addressing issues, solving problems, and fixing non-functional code.

#### Bohdan

- Configured the project and its structure.
- Conducted refactoring and created services: a client for server interaction and storage.
- Developed a confirmation modal window and functionality and visual aspects of chats.
- Transformed icons.

#### Tetiana

- Implemented date selection in forms, profile button, login and logout functionality.
- Worked on responsiveness and styles for the registration page.
- Created modal windows for login and registration forms, theme change, and notifications (via HTTP).
- Worked on reposts functionality.

#### Anastasiia

- Collaborated with Maxim on user search and recommendation window, subscription.
- Worked with Tania on notifications, reposts, and registration via Google mail.
- Contributed to layout and styles for the theme change modal window and action buttons in posts.
- Implemented theme change.
- Independently worked on bookmarks, navigation to the post author's page, post display on the user page, and styles for posts.

#### Ruslan

- Implemented home, post, and other user pages.
- Developed the ability to add posts, delete, like, comment, and delete comments.
- Created a modal window for creating a post, for displaying subscribers and those subscribed to.
- Worked on profile editing, user page, and implemented InfinityScroll.

#### Alina

- Focused on the application's responsiveness.
- Created the header and all its auxiliary parts.
- Worked on dark and light themes.

#### Maksym

- Implemented the ability to search and recommend users.
- Developed the password change form.

</details>
<details>
<summary>Backend Team</summary>

#### Ivanka

- Played a key role in the backend development, using Java and Spring Boot.
- Contributed to efficient CRUD operations with creating, reading, updating, and deleting objects through RESTful API.
- Handled database configuration and optimization using PostgreSQL and H2.
- Utilized Liquibase for managing database versions and ensuring migrations.
- Integrated Swagger and Springdoc for API documentation generation.
- Ensured high-level security through Spring Security and OAuth2.
- Developed WebSocket for bidirectional communication between the server and the client.
- Utilized Cloudinary for efficient image processing.
- Configured Maven for automated build, testing, and deployment on the Heroku platform.
- Successfully implemented GitLab CI/CD for automating code build, testing, and deployment.

</details>

## 📸 Screenshots

<details><summary>Login page</summary>
![Login page](https://imgur.com/qs8GcLN.png)
</details>

<details><summary>Registration form</summary>
![Registration form](https://imgur.com/HTKMbzT.png)
</details>

<details><summary>Login form</summary>
![Login form](https://imgur.com/vY2XtWf.png)
</details>

<details><summary>Home page feed</summary>
![Home page feed](https://imgur.com/0gFXao7.png)
</details>

<details><summary>Notifications</summary>
![Notifications](https://imgur.com/0L3VqBL.png)
</details>

<details><summary>Messages</summary>
![Chats](https://imgur.com/qr15r00.png) <br>
![Settings](https://imgur.com/NlWxiHI.png) <br>
![Create new chat modal](https://imgur.com/F2nS1TE.png) <br>
</details>

<details><summary>Bookmarks</summary>
![Bookmarks](https://imgur.com/diCMUrz.png)
</details>

<details><summary>User page</summary>
![User page](https://imgur.com/aB2wfrJ.png)
</details>

<details><summary>Post page</summary>
![Post page](https://imgur.com/5L8iyHd.png)
</details>

<details><summary>Dark theme</summary>
![Dark theme](https://imgur.com/yNycdMP.png)
</details>

<details><summary>Search</summary>
![Search](https://imgur.com/k2lOsKr.png)
</details>

<details><summary>Tablet version</summary>
![Tablet](https://imgur.com/dxypEYE.png)
</details>

<details><summary>Mobile version</summary>
![Mobile](https://imgur.com/NkxM1Aq.png)
</details>
