## Schwapp

[![Dependency Status](https://david-dm.org/manuelroth/schwapp.svg)](https://david-dm.org/manuelroth/schwapp)
[![devDependency Status](https://david-dm.org/manuelroth/schwapp/dev-status.svg)](https://david-dm.org/manuelroth/schwapp#info=devDependencies)

The Schwapp App displays the water temperature of well known rivers of Switzerland. Data source is the [Federal Office for Environment](http://www.hydrodaten.admin.ch/de/tabelle-der-wassertemperaturen.html).

### Requirements

- [Node](https://nodejs.org) 4.x or better
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development (optional)
- [Android SDK](https://developer.android.com/sdk/) for Android development (optional)
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or better for Android device testing (optional)

### Installation

Clone this repository and install the dependencies:

```sh
git clone https://github.com/manuelroth/schwapp.git 
cd schwapp
npm install
```

### Running

Once dependencies are installed, run the schwapp app with:

```sh
npm start
```

This will start the React Packager.

#### iOS

Open `ios/App.xcodeproj` in Xcode, build and run the project.

#### Android

Open Android Studio and run a Simulator.

```sh
react-native run-android
```

### Bundling

Building the app for distribution.

1. Open `AwesomeApp/ios/AwesomeApp/AppDelegate.m
2. Uncomment `jsCodeLocation = [[NSBundle mainBundle] ...
3. The JS bundle will be built for dev or prod depending on your app's scheme (Debug = development build with warnings, Release = minified prod build with perf optimizations). To change the scheme navigate to `Product > Scheme > Edit Scheme... in xcode and change `Build Configuration` between `Debug` and `Release`.
