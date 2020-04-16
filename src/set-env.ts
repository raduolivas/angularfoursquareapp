const fs = require('fs');
require('dotenv').config();

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.prod.ts';

// Load node modules
const colors = require('colors');
const target = process.env.PORT || 4200;
// `environment.ts` file structure
const envConfigFile = `
export const environment = {
    production: true,
    env_url: '${process.env.env_url}',
    token_url: 'https://foursquaretoken.herokuapp.com/token',
    auth: {
        DOMAIN: '${process.env.DOMAIN}',
        CLIENT_ID: '${process.env.CLIENT_ID}'
    },
    api: {
        URL: 'https://api.foursquare.com/v2/venues/',
        API_V: '20190425',
        NEXT_VENUES: 'nextvenues',
        VENUE_ID: '${process.env.VENUE_ID}',
        CLIENTID: '${process.env.CLIENTID}',
        CLIENTSECRET: '${process.env.CLIENTSECRET}'
    }
};`;

console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
fs.writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
});
