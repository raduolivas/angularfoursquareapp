import { environment } from 'src/environments/environment';

export const AUTHORIZATION_TOKEN_URL = `${environment.token_url}`;

export const AUTHORIZATION_URI =
`https://foursquare.com/oauth2/authenticate?client_id=${environment.api.CLIENTID}` +
`&response_type=code&redirect_uri=https://angular-foursquare-app.herokuapp.com/`;
