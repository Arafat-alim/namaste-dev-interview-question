# Problem name: Authentication

## Difficulty Level

- Easy

## Companies:

## Description:

- Build a simple user authentication system using React Context API. The goal is to understand how to create context, provide context, and consume context within your components, as well as manage basic authentication state globally.

## Requirements:

1. UserContext:
   Create a UserContext using `React.createcontext()`.
   Store the following in the context:
   - isLogged1n: A boolean that is false by default, and it toggles between true and false using the login and logout functions.
   - login(): function to log in a user.
   - logout(): function to log out the user.
2. App: Wrap the app with UserProvider.
3. Navbar Component:
   - Displays the app title (App) in the navigation bar.
   - Uses UserContext to access isLoggedIn, login, and logout.
   - If the user is not logged in:
     Shows a "Login" button that triggers the login function when clicked.
   - If the user is logged in:
     Shows a "Welcome, User!" message. Displays a "Logout" button that triggers the logout
     function when clicked.
4. Dashboard Component:
   - Uses UserContext to access the isLoggedIn state.
   - If the user is not logged in:
     Displays a message: "Please login to access your dashboard".
   - If the user is logged in:
     Displays the message: "This is your dashboard".

## Reference UI:

![authentication](https://do6gp1uxl3luu.cloudfront.net/question-gif/authentication2.gif)
