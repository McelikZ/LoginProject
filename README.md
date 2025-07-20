# LoginProject

Warning:

This project is built with Expo.
Google and Facebook login integrations are not included in this project.
Please check the other project for these integrations.

# About the Project

This is a basic login application developed with React Native and Expo. It provides essential components and navigation infrastructure for user authentication.

# Dependencies and Setup

This project uses the following main libraries and packages as specified in package.json:

Redux Toolkit & React Redux: For efficient global state management.

- npm install @reduxjs/toolkit react-redux
  
React Navigation: For handling navigation between screens.
Core navigation and native dependencies:

- npm install @react-navigation/native react-native-screens react-native-safe-area-context

- npm install @react-navigation/native-stack

Firebase & React Native Firebase: For backend services and authentication.

- npm install firebase @react-native-firebase/app @react-native-firebase/auth

AsyncStorage: For persistent local storage in React Native apps.

- npm install @react-native-async-storage/async-storage

Expo packages:

Included with Expo SDK:

expo

expo-status-bar

expo-web-browser

# Important Note: Firebase Setup Required

To use this package properly, you need to provide your own firebaseConfig file and set up Firebase integrations.

The example configuration file is included in the project as a template.

The package itself does not contain any real Firebase configuration or credentials.

Please make sure to create your Firebase project and add your configuration before running the app

# Technologies and Concepts Used

React Navigation: For handling navigation between screens.

Redux: Used for global state management.

Props: For passing data between components.

Services: Dedicated files for API calls and business logic.

Firebase: Backend infrastructure for authentication and data management.

Components: Reusable UI components used throughout the app.

Themes: Definitions of colors and styles for consistent UI design.

# Project Structure

/src

  /components      # Reusable UI components
  
  /navigation      # Screen navigation setup
  
  /redux           # Redux store, reducers, and actions
  
  /services        # API and business logic services
  
  /screens         # Application screens
  
  /themes          # Color and style themes
  
  /utils           # Utility functions

# Example Design

  <img width="3792" height="2816" alt="Example Design" src="https://github.com/user-attachments/assets/09dfcf7a-4633-4888-8751-d3eafe61c733" />
  
# Design

<img width="1543" height="865" alt="RealDesign" src="https://github.com/user-attachments/assets/afe8af51-9906-4544-bf95-39c5219fa9e5" />






