import { IDot } from './../../interfaces';

export class Location {
    private static instance: Location;
    private currentLocation: IDot;
    private geolocationPromise: Promise<IDot>;

    private constructor() {

        this.geolocationPromise = new Promise((resolve: (data: IDot) => void, reject: (error: PositionError) => void) => {

            navigator.geolocation.getCurrentPosition((position) => {
                this.currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                resolve(this.currentLocation);

            }, (error) => {
                console.log('location error');
                this.currentLocation = {
                    lat: 52,
                    lng: 35
                };

                resolve(this.currentLocation);
            });
        });
    }

    private static getInstance(): Location {
        if (!Location.instance) {
            Location.instance = new Location();
        }
        return Location.instance;
    }

    public static getCurrentLocation(): Promise<IDot> {
        return this.getInstance().geolocationPromise;
    }
}