// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// All of the settings for the evelopment environment
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBhGvp9W-9ElM7laKT0yYlHCVTdhuL8J2I",
    authDomain: "oshop-a1bc4.firebaseapp.com",
    databaseURL: "https://oshop-a1bc4.firebaseio.com",
    projectId: "oshop-a1bc4",
    storageBucket: "oshop-a1bc4.appspot.com",
    messagingSenderId: "1086638838191"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
