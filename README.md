# React Native Typescript Boilerplate

![Travis](https://api.travis-ci.com/AmitM30/react-native-typescript-boilerplate.svg?branch=master) [![Code Climate](https://codeclimate.com/github/AmitM30/react-native-typescript-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/AmitM30/react-native-typescript-boilerplate) ![License](https://img.shields.io/github/license/AmitM30/react-native-typescript-boilerplate.svg) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

### An opinionated [React Native](https://facebook.github.io/react-native/docs/getting-started) Starter Kit with [React Native Navigation](https://github.com/wix/react-native-navigation) + [Redux](https://github.com/reactjs/redux) + [Airbnb TSLint](https://github.com/airbnb/javascript) to build iOS and Android apps using [TypeScript](https://github.com/Microsoft/TypeScript-React-Native-Starter)

The project has been setup based off [RN Getting Started](https://facebook.github.io/react-native/docs/getting-started) and instructions from [Microsoft's Github TypeScript React Native Starter](https://github.com/Microsoft/TypeScript-React-Native-Starter) repo.

### Supports React Native 0.63.3, React Native Navigation v7 and Flipper

This repo supports the latest version of React Native compatible with React Native Navigation.

| UPDATE  | RNN | RN | React | Comments |
|---|---|---|---|---|
|  7th October '20 | 7.1.0 | 0.63.3 | 16.13.1 | Major Upgrade, Support for Flipper
|  27th April '20 | 3.7.0 | 0.61.5 | 16.9.0 | Support for RN > 0.60
|  2nd Nov '19 | 2.26.2 | 0.59.10 |  | Maintenance |
|  30th April '19 | 2.18.3 | 0.59.5 | 16.8.6 | Maintenance |
|  8th March '19 | 2.13.1 | 0.58.6 | 16.8.4 |

### Who is this for?

Jumpstart building robust apps using React Native, with TypeScript. The base setup has been taken care of, just `yarn install` and get going from respective IDEs.

You might also want to [rename](https://medium.com/the-react-native-log/how-to-rename-a-react-native-app-dafd92161c35) the app for your own use.

> _Disclaimer_: This is an **opinionated** approach to building apps with RN. The project structure is inspired by multiple production apps built by the contributors.

#### App Screens

| ![Splash](./src/view/assets/images/sample/1.png "Splash") | ![Home](./src/view/assets/images/sample/2.png "Home") |![Side Menu](./src/view/assets/images/sample/3.png "Side Menu") |
| :-------------------------------------------------------: | :---------------------------------------------------: | :---------------------------------------------------: |

#### Flipper Support

![Flipper](./src/view/assets/images/sample/4.png "Flipper")

### Table of Contents

- [Project Structure](#project-structure)
- [Running](#running)
- [Lint](#lint)
- [Unit Tests](#unit-tests)
- [Cheat Sheet](#cheat-sheet)
  - [Single Screen vs Tabbed Based Navigation](#single-screen-vs-tabbed-based-navigation)
  - [Styles](#styles)
  - [Widgets / Elements](#widgets---elements)
- [Contributing](#contributing)
- [TODO](#todo)

#### Project Structure

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
Everything related to application business logic (store) resides under this directory.

`src`
Only presentation layer for the app, styles, images, icons are meant to be under this.

#### Running

Make sure node version installed is `>=10.x.x`

```
yarn install
```

#### Launch

###### iOS

```
cd ios && pod install
```

Launch application from XCode

###### Android

For android, run the Metro Bundler from the terminal

```
npm run start
```

and then launch from IDE.

#### Lint

To run lint on the application:

```
yarn lint
```

Fixes most tslint issues automatically:

```
yarn lint:fix
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

##### Single Screen vs Tabbed Based Navigation

The application launches with a splash screen, and then moves to a tabbed based navigation. Splash screen is a good place to fetch data / build application launch logic like getting user token from API or Async Store, load persist state etc.

For Single screen application, replace this tabbed based navigation with a single screen - just `home`, or simply use the splash screen to setup the app, may be with a burger menu.

##### Styles

The `styles` folder contains `global` style and `typography` for the application. Styles for each screen has been placed with the screen, as they are used together with the screen, unlike web.

##### Widgets / Elements

The custom components have been broken into 2 major categories, namely - **widgets**, **elements**

A Good use case would be:

- **widgets**: Any component providing a complete functionality. Like carousels component, banner component, etc.
- **elements**: Smallest building blocks of application. A custom element, may be `<ButtonPrimary>` or `<CText>`, that has default font properties like font, size and so on.

#### Contributing

Please check out [Contributing](https://github.com/AmitM30/react-native-typescript-boilerplate/blob/master/CONTRIBUTING.md).

#### Authors

- [**Anurag Chutani**](https://github.com/a7urag) - _Android Setup_
- [**Brian Varley**](https://github.com/BrianJVarley) - _Windows Setup_
- [**Nelson Omuto**](https://github.com/nelsonomuto) - _Update Podfile_

See also the list of [contributors](https://github.com/AmitM30/react-native-typescript-boilerplate/contributors).
