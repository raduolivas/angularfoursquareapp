export const environment = {
  production: true,
  api: {
    URL: 'https://api.foursquare.com/v2/venues/',
    API_V: '20190425',
    NEXT_VENUES: 'nextvenues',
    VENUE_ID: process.env.VENUE_ID,
    CLIENTID: process.env.CLIENTID,
    CLIENTSECRET: process.env.CLIENTSECRET,
  }
};
