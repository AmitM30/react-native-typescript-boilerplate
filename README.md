# React Native Typescript Boilerplate

An opinionated boilerplate to build enterprise iOS / Android React Native apps.

##### Built using Microsft TypeScript & React Native

The project has been setup based off instructions from Microsoft's Github TypeScript React Native Starter repo:
https://github.com/Microsoft/TypeScript-React-Native-Starter

- [React Native](https://facebook.github.io/react-native/) - 0.58.1
- [React Native Navigation](https://github.com/wix/react-native-navigation) - 2.x.x
- [Redux](https://github.com/reduxjs/redux)
- [Thunk](https://github.com/reduxjs/redux-thunk)

The project also uses [eslint](https://github.com/airbnb/javascript). Tests cases have been written using [jest](https://github.com/facebook/jest)

### Table of Contents

- [Project Structure](#project-structure)
- [Running](#running)
- [Deployment](#deployment)
  - [Codepush](#codepush)
- [Lint](#lint)
- [Running Unit Tests](#running-unit-tests)
- [Rename the app](#rename-the-app)
- [TODO](#todo)
- [Cheat Sheet](#cheat-sheet)

#### Project Structure

```
/
├── android					Android Native code
├── ios						iOS Native Code
├── shared
│   ├── redux					Business Logic
│   │	    ├── constants
│   │	    ├── actions
│   │	    ├── api
│   │	    ├── reducers
│   │	    ├── store
│   │	    └── thunk
│   └── utilities
├── src
│   ├── config					App Configuration
│   │	    └── defaults
│   ├── constants				Screens, Localization
│   ├── navigators				Router, Navigation
│   ├── view				UI compoments - Screens, Widgets
│   │	    ├── elements				Custom elements
│   │	    ├── icons
│   │	    ├── screens
│   │	    ├── styles				Typography
│   │	    └── widgets				Custom components
│   └── utilities
├── tests					Unit Tests
│   ├── presentation
│   └── redux
├── .babelrc
├── .eslintrc					Lint configuration - extending AirBnb
├── .flowconfig					Flow configuration
├── .gitignore
├── app.json
├── index.js					Application Entry point
├── package.json
└── README.md
```

#### Running

Make sure node version installed is `>=8.11.x <=9`

```
yarn install
```

##### iOS

move to `ios` directory

```
$ cd ios
```

install pods

```
$ pod install
```

##### Launch

Launch application from iOS and Android IDEs

#### Deployment

##### CodePush

What is React Native without CodePush. The application uses Microsoft [AppCenter](https://github.com/Microsoft/appcenter-cli) cli.

Generate Bundle:

`Development:`

```
react-native bundle --platform ios --entry-file index.js --bundle-output ./ios/main.jsbundle --assets-dest ./ --dev false
```

`Production:`

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

Push:

```
appcenter codepush release -a <ownerName>/<appName> -t <targetBinaryVersion> -d <deploymentName>
```

Example:

```
appcenter codepush release-react -a AmitM30/rnts-ios -d Staging --description "Code Push !"
appcenter codepush release-react -a AmitM30/rnts-android -d Staging --description "Code Push !"
```

###### Command Options

`<ownerName>/<appName>`

```
$ appcenter apps list
AmitM30/rnts-android
AmitM30/rnts-ios
```

`<deploymentName>`
iOS Keys:

```
$ appcenter codepush deployment list -a AmitM30/rnts-ios
┌────────────┬───────────────────────────────────────┐
│ Name       │ Key                                   │
├────────────┼───────────────────────────────────────┤
│ Staging    │ xxxxxx │
├────────────┼───────────────────────────────────────┤
│ Production │ xxxxxx │
└────────────┴───────────────────────────────────────┘
```

Android Keys:

```
$ appcenter codepush deployment list -a AmitM30/rnts-android
┌────────────┬──────────────────────────────────────────────────────────────────┐
│ Name       │ Key                                                              │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Staging    │ xxxxx-xxxx-xxxx │
├────────────┼──────────────────────────────────────────────────────────────────┤
│ Production │ xxxxx-xxxx-xxxx │
└────────────┴──────────────────────────────────────────────────────────────────┘
```

###### Release History

Command:

```
appcenter codepush deployment history -a AmitM30/rnts-ios Staging
```

Or:

```
code-push deployment history AmitM30/rnts-ios Staging
```

###### Rollout Percentage

Command:

```
appcenter codepush patch -a AmitM30/rnts-android Staging -t v2 -r 80
```

#### Lint

To run lint on the application:

```
npm run lint
```

To fix lint issues automatically

```
npm run lint:fix
```

#### Unit Test

Unit tests are under `__test__` directory at root.

To run unit test on the application:

```
npm run test
```

To find unit test coverage for the application:

```
npm run test:coverage
```

#### Cheat Sheet

##### Items to come here

Test Item
