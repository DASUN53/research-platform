## File Structure

collaborative-problem-solving-platform/ <br>
│<br>
├── public/ <br>
│   ├── favicon.ico <br>
│   ├── logo.png <br>
│   └── images/ <br>
│<br>
├── src/ <br>
│   │<br>
│   ├── assets/<br>
│   │   ├── icons/<br>
│   │   ├── illustrations/<br>
│   │   ├── avatars/<br>
│   │   └── styles/<br>
│   │<br>
│   ├── components/<br>
│   │   ├── common/<br>
│   │   │   ├── Button.jsx<br>
│   │   │   ├── Input.jsx<br>
│   │   │   ├── Modal.jsx<br>
│   │   │   ├── Loader.jsx<br>
│   │   │   └── Card.jsx<br>
│   │   │<br>
│   │   ├── layout/<br>
│   │   │   ├── Navbar.jsx<br>
│   │   │   ├── Sidebar.jsx<br>
│   │   │   ├── Footer.jsx<br>
│   │   │   └── MainLayout.jsx<br>
│   │   │<br>
│   │   ├── dashboard/<br>
│   │   │   ├── StatsCard.jsx<br>
│   │   │   ├── ActivityFeed.jsx<br>
│   │   │   ├── RecommendationCard.jsx<br>
│   │   │   └── NotificationPanel.jsx<br>
│   │   │<br>
│   │   ├── posts/<br>
│   │   │   ├── ProblemCard.jsx<br>
│   │   │   ├── ProblemForm.jsx<br>
│   │   │   ├── TagList.jsx<br>
│   │   │   ├── SolutionCard.jsx<br>
│   │   │   └── FileUpload.jsx<br>
│   │   │<br>
│   │   ├── discussion/<br>
│   │   │   ├── CommentSection.jsx<br>
│   │   │   ├── CommentCard.jsx<br>
│   │   │   ├── ReplyBox.jsx<br>
│   │   │   └── UpvoteButtons.jsx<br>
│   │   │<br>
│   │   ├── profile/<br>
│   │   │   ├── ProfileHeader.jsx<br>
│   │   │   ├── BadgeList.jsx<br>
│   │   │   ├── ReputationCard.jsx<br>
│   │   │   └── ActivityTimeline.jsx<br>
│   │   │<br>
│   │   └── notifications/<br>
│   │       ├── NotificationItem.jsx<br>
│   │       └── NotificationDropdown.jsx<br>
│   │<br>
│   ├── pages/<br>
│   │   ├── auth/<br>
│   │   │   ├── Login.jsx<br>
│   │   │   ├── Register.jsx<br>
│   │   │   └── ForgotPassword.jsx<br>
│   │   │<br>
│   │   ├── dashboard/<br>
│   │   │   └── Dashboard.jsx<br>
│   │   │<br>
│   │   ├── posts/<br>
│   │   │   ├── CreateProblem.jsx<br>
│   │   │   ├── ProblemDetails.jsx<br>
│   │   │   ├── ExploreProblems.jsx<br>
│   │   │   └── EditProblem.jsx<br>
│   │   │<br>
│   │   ├── archive/<br>
│   │   │   └── KnowledgeArchive.jsx<br>
│   │   │<br>
│   │   ├── leaderboard/<br>
│   │   │   └── Leaderboard.jsx<br>
│   │   │<br>
│   │   ├── profile/<br>
│   │   │   ├── UserProfile.jsx<br>
│   │   │   └── EditProfile.jsx<br>
│   │   │<br>
│   │   ├── notifications/<br>
│   │   │   └── Notifications.jsx<br>
│   │   │<br>
│   │   ├── settings/<br>
│   │   │   └── Settings.jsx<br>
│   │   │<br>
│   │   ├── LandingPage.jsx<br>
│   │   ├── About.jsx<br>
│   │   ├── NotFound.jsx<br>
│   │   └── Unauthorized.jsx<br>
│   │<br>
│   ├── routes/<br>
│   │   ├── AppRoutes.jsx<br>
│   │   ├── PrivateRoute.jsx<br>
│   │   └── AdminRoute.jsx<br>
│   │<br>
│   ├── context/<br>
│   │   ├── AuthContext.jsx<br>
│   │   ├── NotificationContext.jsx<br>
│   │   └── ThemeContext.jsx<br>
│   │<br>
│   ├── services/<br>
│   │   ├── api.js<br>
│   │   ├── authService.js<br>
│   │   ├── postService.js<br>
│   │   ├── userService.js<br>
│   │   ├── notificationService.js<br>
│   │   └── reputationService.js<br>
│   │<br>
│   ├── hooks/<br>
│   │   ├── useAuth.js<br>
│   │   ├── useFetch.js<br>
│   │   ├── useNotifications.js<br>
│   │   └── useDebounce.js<br>
│   │<br>
│   ├── utils/<br>
│   │   ├── constants.js<br>
│   │   ├── helpers.js<br>
│   │   ├── validators.js<br>
│   │   ├── formatDate.js<br>
│   │   └── storage.js<br>
│   │<br>
│   ├── data/<br>
│   │   ├── dummyUsers.js<br>
│   │   ├── dummyPosts.js<br>
│   │   └── badges.js<br>
│   │<br>
│   ├── styles/<br>
│   │   ├── global.css<br>
│   │   ├── variables.css<br>
│   │   └── animations.css<br>
│   │<br>
│   ├── App.jsx<br>
│   ├── main.jsx<br>
│   └── vite-env.d.ts<br>
│<br>
├── .env<br>
├── .gitignore<br>
├── eslint.config.js<br>
├── package.json<br>
├── README.md<br>
└── vite.config.js<br>