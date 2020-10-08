# React Native Typescript Boilerplate

![Travis](https://api.travis-ci.com/AmitM30/react-native-typescript-boilerplate.svg?branch=master) [![Code Climate](https://codeclimate.com/github/AmitM30/react-native-typescript-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/AmitM30/react-native-typescript-boilerplate) ![License](https://img.shields.io/github/license/AmitM30/react-native-typescript-boilerplate.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

#### An opinionated [React Native](https://facebook.github.io/react-native/docs/getting-started) Starter Kit with [React Native Navigation](https://github.com/wix/react-native-navigation) + [Redux](https://github.com/reactjs/redux) + [Airbnb TSLint](https://github.com/airbnb/javascript) to build iOS and Android apps using [TypeScript](https://github.com/Microsoft/TypeScript-React-Native-Starter)

___

The project has been setup based off [RN Getting Started](https://facebook.github.io/react-native/docs/getting-started) and instructions from [Microsoft's Github TypeScript React Native Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter) repo.

### Supports React Native 0.63.3, React Native Navigation v7 and Flipper

|  | RNN | RN | React | Comments |
|---|---|---|---|---|
|  07 Oct '20 | 7.1.0 | 0.63.3 | 16.13.1 | Support for Flipper
|  27 Apr '20 | 3.7.0 | 0.61.5 | 16.9.0 | Support for RN > 0.60, Android X
|  02 Nov '19 | 2.26.2 | 0.59.10 |  | Maintenance |
|  08 Mar '19 | 2.13.1 | 0.58.6 | 16.8.4 |

## Introduction

Jumpstart building robust apps using React Native and TypeScript with most commoly needed tools already setup. Just `yarn install` and get going from respective IDEs.

- Routing and Navigation
  - Tabbed navigation using [React Native Navigation v7](https://github.com/wix/react-native-navigation)
  - Side Menu support
- State Management using Flux Architecture
  - [Redux](https://redux.js.org/introduction/getting-started)
  - [Redux-Thunk](https://github.com/reduxjs/redux-thunk) middleware
- Widgets / Elements
  
  Build your own design system with these building blocks.
  - **elements**: `<BUTTON_DEFAULT>` or `<CText>`. They are custom elements that have default properties like font, size and so on.
  - **widgets**: Any component providing a complete functionality. E.g. carousels component, banner component, etc.
- Typography
  - Base Typography setup - Color, Font, LAYOUT, CTA, FONTS, TEXT, TEXT_INPUT
- Code Lint
  - [Airbnb's JS](https://github.com/airbnb/javascript) Linting

> _Disclaimer_: This is an **opinionated** approach to building apps with RN. The project structure is inspired by multiple production apps built by the contributors.

##### App Screens

| ![Splash](./src/view/assets/images/sample/1.png "Splash") | ![Home](./src/view/assets/images/sample/2.png "Home") |![Side Menu](./src/view/assets/images/sample/3.png "Side Menu") |
| :-------------------------------------------------------: | :---------------------------------------------------: | :---------------------------------------------------: |

##### Flipper Support

![Flipper](./src/view/assets/images/sample/4.png "Flipper")

### Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Cheat Sheet](#cheat-sheet)
  - [Single Screen vs Tabbed Based Navigation](#single-screen-vs-tabbed-based-navigation)
  - [Renaming the App](#renaming-the-app)
- [Contributing](#contributing)
- [TODO](#todo)

### Project Structure

```
/
├── android					Android Native code
├── ios						iOS Native Code
├── shared
│   ├── redux					Applications Logic
│   │	    ├── constants
│   │	    ├── actions
│   │	    ├── api
│   │	    ├── reducers
│   │	    ├── store
│   │	    └── thunk
│   └── utilities
├── src
│   ├── config					Global Configuration
│   ├── constants				Screens, Localization
│   ├── navigators				Router, Navigation
│   ├── view					UI compoments
│   │	    ├── elements			Custom elements
│   │	    ├── assets
│   │	    ├── screens
│   │	    ├── styles				Typography
│   │	    └── widgets				Custom components
│   └── utilities
├── __tests__					Unit Tests
│   ├── presentation
│   └── redux
├── .babelrc
├── .gitignore
├── .travis.yml					Travis CI
├── tsconfig.json				TypeScript Configuration
├── tslint.js					TSLint configuration - extending AirBnb
├── tsconfig.json
├── app.json
├── index.js					Application Entry point
├── package.json
└── README.md
```

`shared`
Everything related to application business logic. The redux store.

`src`
Presentation layer for the app - screens, styles, images, icons etc.

### Getting Started

Make sure node version installed is `>=10.x.x`. Then install using yarn (or npm):
```
yarn install
```

Start the Metro Bundler:
```
yarn start
```

###### iOS

One time. Move to `ios` folder and install pods:

```
cd ios && pod install
```

Launch application from XCode (`Command + R`) Or launch from Terminal:

```
yarn ios
# runs the following command. change device name here
# `npx react-native run-ios --simulator='iPhone 11'`
```

###### Android

Start an Android Simulator from:
```
Android Studio > Tools > AVD Manager > Run any device
```

Similarly, run from Android Studio itself Or from Terminal:
```
yarn android
# runs the following command
# react-native run-android --variant=Debug
```

### Cheat Sheet

#### Single Screen vs Tabbed Based Navigation

The application launches with a splash screen, and then moves to a tabbed based navigation. Splash screen is a good place to fetch data / build application launch logic like getting user token from API or Async Store, load persist state etc.

For Single screen application, replace this tabbed based navigation with a single screen - just `home`, or simply use the splash screen to setup the app, may be with a burger menu.

#### Renaming the App

You might also want to rename the app for your own use. Follow any of the links below.
- [How to Rename A React Native App](https://medium.com/the-react-native-log/how-to-rename-a-react-native-app-dafd92161c35)

Or

- NPM Package: [react-native-rename](https://www.npmjs.com/package/react-native-rename)

### Contributing

Please check out [Contributing](https://github.com/AmitM30/react-native-typescript-boilerplate/blob/master/CONTRIBUTING.md).

### Authors

- [**Anurag Chutani**](https://github.com/a7urag) - _Android Setup_
- [**Brian Varley**](https://github.com/BrianJVarley) - _Windows Setup_
- [**Nelson Omuto**](https://github.com/nelsonomuto) - _Update Podfile_

See also the list of [contributors](https://github.com/AmitM30/react-native-typescript-boilerplate/contributors).
