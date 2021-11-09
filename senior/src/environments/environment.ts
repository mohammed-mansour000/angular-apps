// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl : "https://api-for-senior.herokuapp.com/",
  
  firebaseConfig : {
    apiKey: "AIzaSyATTlWPvwMhXhrbtdzS3m8fODWxfIrGA6U",
    authDomain: "senior-21c82.firebaseapp.com",
    projectId: "senior-21c82",
    storageBucket: "senior-21c82.appspot.com",
    messagingSenderId: "307470081889",
    appId: "1:307470081889:web:8cb3eb8eb540a6b0e1ef20",
    measurementId: "G-7LD23Y44BP"
  }
  //Project Console: https://console.firebase.google.com/project/senior-21c82/overview
  //Hosting URL: https://senior-21c82.web.app
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
