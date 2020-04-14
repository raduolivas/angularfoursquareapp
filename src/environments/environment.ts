// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    URL: 'https://api.foursquare.com/v2/venues/',
    API_V: '20190425',
    NEXT_VENUES: 'nextvenues',
    VENUE_ID: '3fd66200f964a5209beb1ee3',
    CLIENTID: 'MNU5HYAJFMD1PJFKMCYMOYPW02Q1TBWREAPBA2UT0TDWVSO4',
    CLIENTSECRET: 'P11JUIACVYYI3FOYS4I5ZGT1EM3PMO2QFHJJM3ALM3T3PBFY',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
