export interface VenuesResponse {
    id: string;
    name: string;
    location: Location;
    categories: Categories;
    venuePage: VenuePage;
    referralId: string;
    hasPerk: boolean;

}

export interface Location {
    address: string;
    crossStreet: string;
    lat: number;
    lng: number;
    labeledLatLngs: [];
    distance: number;
    postalCode: string;
    cc: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: [];
}

export interface Categories {
    id: string;
    name: string;
    pluralName: string;
    shortName: string;
    icon: Icon;
    primary: boolean;
}

export interface Icon {
    prefix: string;
    suffix: string;
}


export interface VenuePage {
    id: string;
}

export interface Section {
    name: string;
}

export interface Venue {
    id: string;
    name: string;
    location: Location;
    categories: Categories;
    referralId: string;
    hasPerk: boolean;
}
