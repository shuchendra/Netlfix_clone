# Netflix Clone 
## Description:
* This project is a clone of the popular streaming platform Netflix. It aims to replicate the main features and user interface of Netflix, allowing users to browse movies, TV shows, and other content, as well as sign up, sign in, and manage their accounts.

## Features:
* Sign up for a new account
* Sign in to an existing account
* Play video content
* Responsive design for various screen sizes

## License:
This project is licensed under the MIT License. See the LICENSE file for more details.

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Environmental Variables
To run this project, you will need to add the following environment variables to your .env file

REACT_APP_API_KEY - Your TMDB API key for fetching movie details

## API Reference

The Netflix clone utilizes the TMDB (The Movie Database) API to fetch movie details, images, and trailers. Below is a brief overview of the API endpoints used in the project.

### Base URL

All API requests are made to the following base URL:
https://api.themoviedb.org/3/

### Authentication

Requests to TMDB require an API key. Include your API key in all requests:
?api_key=your_api_key

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

# App Preview

Below are some screenshots from the Netflix Clone, showcasing various features and the user interface

### Signup Screen

The Signup Screen is the entry point to the Netflix clone, where users can either sign in to their existing account or register for a new one. It is designed to be user-friendly and straightforward, ensuring a seamless onboarding experience.

![image](https://github.com/shuchendra/Netlfix_clone/assets/124861829/55ee9e06-0ca7-45cf-adec-c99afe7ca34b)


### Login Screen

The login screen provides users with a simple and secure login interface. Users can enter their credentials to access their personalized streaming dashboard.

![image](https://github.com/shuchendra/Netlfix_clone/assets/124861829/c4af4439-6685-4e19-a028-f9f5fd1baceb)



### Home Screen

The Home screen provides the main interface displaying trending movies and categories.

![image](https://github.com/shuchendra/Netlfix_clone/assets/124861829/aa5cad16-a7ea-49af-a855-4c006da0342d)


![image](https://github.com/shuchendra/Netlfix_clone/assets/124861829/57912036-816f-4cb1-b62d-3650ab1beccf)



### Profile Screen

The Profile Screen displays user-specific data. Users can view their current plan and upgrade or downgrade their subscription. It allows users to log out of the application using the SignOut button.

![image](https://github.com/shuchendra/Netlfix_clone/assets/124861829/c83aae45-7a5a-40af-b970-c2c6e90fdddc)


### Watch Trailer 

A trailer playing functionality , with the movie's screen time and also its genres. 

![image](https://github.com/shuchendra/Netlfix_clone/assets/124861829/6506b2d4-71d8-4625-81db-395b5a3bc0f5)



## Future Scope

The Netflix Clone is continuously evolving, and there are several enhancements planned for future releases that aim to enrich user experience and expand functionality:

* User Profiles: Introduction of personalized user profiles allowing multiple users to access the app with personalized settings and content.
* Advanced Recommendation System: Implement a machine learning-based recommendation system to suggest movies and shows based on user preferences and viewing history.
* Offline Viewing: Allow users to download movies and shows to watch offline.
* Multi-Language Support: Add support for multiple languages for the app interface as well as for the content subtitles.
* Parental Controls: Implement parental control settings to restrict content based on age ratings.

These features are aimed at making the Netflix Clone more robust, user-friendly, and accessible to a broader audience.

## Known Bugs

Transparency about issues is crucial for building a reliable software solution. Here are some known issues that are currently being addressed:

* Trailer Playback Issues: Some users have reported that movie trailers do not always load correctly. This issue is often related to API limitations or data mismatches.
* Responsive Design Glitches: Some responsive design inconsistencies on tablets and mobile devices affect usability.
* Slow Load Times: Increased load times have been observed for movie lists and detail views, particularly when fetching large datasets.


## License
Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements
* TMDB for providing the API to fetch movie information
* Icons and images are sourced from various libraries and stock photo websites

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


