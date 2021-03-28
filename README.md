# Employee Manager

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses firebase to handle data users and authentication

## Pre-Fligh Checklist
__Set Up Firebase App__  
You must have a firebase app setup with authorization firestore and storage services

__Install Firebase Tools__\
Install the firebase command line tools package. Run ```npm install -g firebase-tools``` to install the firebase tools globally on your system.


__Firebase Emulators__  
You can test your app on local devices by using the firebase emulatorrun ```firebase emulators:start```. This is a good idea as you will be using bandwidth allocation each time you push to firebase hosting.\
By default emulators run only on loclhost but you can edit your firebase.json file and specify an ip address on your local network to test other devices:
```json
"emulators": {    
    "hosting": {
      "port": 5000,
      "host": "192.168.1.69"
    }
  }
```

 



## Development Build 
In the project directory, you can run: `npm start` to run this app in the development mode. To view the app open your browser to [http://localhost:3000](http://localhost:3000).





## Production Build  
To build the app for production run `npm run build`. You can run the app after  

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

 

 

 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
