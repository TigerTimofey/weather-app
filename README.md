# Weather App

## `About project`

When you visit our website, you will find the weather forecast for various cities in Estonia, including Tallinn, Tartu, Narva and Pärnu. Our website provides you with up-to-date weather information, ensuring that you are well-informed about the current weather conditions in these beautiful Estonian cities. In addition, you see the current weather at the moment, as well as a Google map, which shows the selected city.

Upon arriving at our website, you will encounter a pre-filled search query displaying the current weather data for the selected cities. This feature is designed to provide you with immediate access to the latest weather updates.

## `Functionality`

If user wish to explore more specific weather details, you can click on the "Search" button. This will direct you to a new component where you can personalize your weather forecast based on the following options:

1. Latitude and Longitude: You have the option to enter specific latitude and longitude coordinates to get weather information for any location in Estonia. This feature is useful if you want to check the weather for a precise spot.
2. Mode of Result: Choose between JSON, XML, or HTML format to receive the weather forecast in your preferred data representation.
3. Units: Customize the units for temperature, wind speed, and other weather parameters. You can select between Celsius and Fahrenheit or other units that suit your preference.
4. Languages: We offer weather forecasts in multiple languages, so you can choose the one you are most comfortable with.

Also, there is a possibility to just click on the "Submit" button, and then the user gets the results in a different window with the chosen mode.

## `Versions and used packages`

@react-google-maps/api version "^2.18.1"\
@reduxjs/toolkit version "1.9.5"\
bootstrap version "5.2.3"\
moment version "2.29.4"\
node-sass version "7.0.3"\
react version "18.2.0"\
react-bootstrap version "2.7.2"\
react-dom version "18.2.0"\
react-redux version "8.0.5"\
react-router-dom version "6.10.0"\
react-scripts version "5.0.1"

## `How to get API`

##### `For weather API key:`

The weather API used in this project is provided by [Openweathermap](openweathermap.org). This API offers a free plan that allows for a certain number of requests, which is sufficient for development purposes. To obtain your API key, you need to visit the [pricing](https://openweathermap.org/price) section, scroll down, and choose the free option, which provides 60 calls/minute and 1,000,000 calls/month.

##### `For Google map API key:`

To create a google map, you need to register on the [Google Developers platform](https://developers.google.com/), enter your map's data, and obtain an API key. The API key is not free, but it is sufficient for development purposes, and it is possible to obtain it for free.

## `How to use API`

You need to create a file in the root directory with the name ".env" and add your key using the following syntax.\

##### `For weather API key:`

REACT_APP_API_KEY="your_key_number"

##### `For Google map API key:`

REACT_APP_GOOGLE_MAP_API_KEY="your_key_number"

Replace "your_key_number" with the API key you obtained from the registration process. Remember to save the file after adding the API key.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run deploy`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
