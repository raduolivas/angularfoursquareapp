import { environment } from 'src/environments/environment';

export const SEARCH_NAME_MIN_LENGTH = 3;
export const SEARCH_NAME_MAX_LENGTH = 75;
export const SEARCH_GEOLOCATION_MESSAGE = 'I have your Geolocation!';
export const SEARCH_GEOLOCATION_ACTION = 'OK';
export const SEARCH_GEOLOCATION_NO_RESULTS = 'No vacancies found try enlarge the radius';
export const SEARCH_GEOLOCATION_DEBOUNCE = 2000;

export const SEARCH_GEOLOCATION_ERROR = 'Please inform your location !';
export const SEARCH_GEOLOCATION_ERROR_ACTION = 'OK';

export const SEARCH_API_URL = `${environment.api.URL}`;
export const SEARCH_CLIENT_ID = `${environment.api.CLIENTID}`;
export const SEARCH_CLIENT_SECRET = `${environment.api.CLIENTSECRET}`;
export const SEARCH_API_V = `${environment.api.API_V}`;
export const SEARCH_API_VENUES = `${SEARCH_API_URL}search`;

export const SEARCH_SECTIONS = [
    { name: 'Food' },
    { name: 'Drinks' },
    { name: 'Coffee' },
    { name: 'Shops' },
    { name: 'Arts' },
    { name: 'Outdoors' },
    { name: 'Sights' },
    { name: 'Trending' }
];

export const VENUES_MOCK = [
    {
        id: '4d9c696748b6224bdc680c9f',
        name: 'Sugar Hill',
        location: {
            address: 'Klarendalseweg 192',
            crossStreet: 'Verlengde Hoflaan',
            lat: 51.990037030249155,
            lng: 5.924774573067232,
            labeledLatLngs: [
                {
                    label: 'display',
                    lat: 51.990037030249155,
                    lng: 5.924774573067232
                }
            ],
            distance: 45,
            postalCode: '6822 GJ',
            cc: 'NL',
            city: 'Arnhem',
            state: 'Gelderland',
            country: 'Nederland1',
            formattedAddress: [
                'Klarendalseweg 192 (Verlengde Hoflaan)',
                '6822 GJ Arnhem',
                'Nederland'
            ]
        },
        categories: [
            {
                id: '4bf58dd8d48988d16c941735',
                name: 'Burger Joint',
                pluralName: 'Burger Joints',
                shortName: 'Burgers',
                icon: {
                    prefix: 'https://ss3.4sqi.net/img/categories_v2/food/burger_',
                    suffix: '.png'
                },
                primary: true
            }
        ],
        referralId: 'v-1586777966',
        hasPerk: false
    },
    {
        id: '4d9c696748b6224bdc680c9f',
        name: 'Sugar Hill',
        location: {
            address: 'Klarendalseweg 192',
            crossStreet: 'Verlengde Hoflaan',
            lat: 51.990037030249155,
            lng: 5.924774573067232,
            labeledLatLngs: [
                {
                    label: 'display',
                    lat: 51.990037030249155,
                    lng: 5.924774573067232
                }
            ],
            distance: 45,
            postalCode: '6822 GJ',
            cc: 'NL',
            city: 'Arnhem',
            state: 'Gelderland',
            country: 'Nederland1',
            formattedAddress: [
                'Klarendalseweg 192 (Verlengde Hoflaan)',
                '6822 GJ Arnhem',
                'Nederland'
            ]
        },
        categories: [
            {
                id: '4bf58dd8d48988d16c941735',
                name: 'Burger Joint',
                pluralName: 'Burger Joints',
                shortName: 'Burgers',
                icon: {
                    prefix: 'https://ss3.4sqi.net/img/categories_v2/food/burger_',
                    suffix: '.png'
                },
                primary: true
            }
        ],
        referralId: 'v-1586777966',
        hasPerk: false
    }
];
