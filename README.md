# senior-fe-nqf-challenging-accepted

*Challenging accepted ! As I hate all the interview tests and not applying any interview at NQF*

Read the [requirement here](https://gist.github.com/hoanglamhuynh/49d1c68442442273ab94b0b6073002ed), as it is going tobe outdated


## prerequisites
- Register GoogleMap API key.
*You must register the billing information with Google, as Google Map is not free. You can use the trial period which allows the api access within 1 year*
- Register Google Firebase account.

## installing
Create the `config.js` in `src` folder. This file contents the configuration for firebase and google map api
```
touch src/config.js
```

Edit the file as below
```
// you can copy from firebase console
export const firebaseConfig = {
    apiKey: "<your api key>",
    authDomain: "<domain>",
    databaseURL: "<database url>",
    projectId: "<your project id>",
    storageBucket: "<bucket>",
    messagingSenderId: "<id>"
};

export const google_map_api = '<your google api key>';
```
Update the dependencies && run dev
```
npm i
npm start
```

Browse the web at `localhost:8080`