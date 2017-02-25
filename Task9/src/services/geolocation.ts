import { Injectable } from '@angular/core';
import { IDot } from './../interfaces';

@Injectable()
export class LocationService {
    private currentLocation: IDot;
    private geolocationPromise: Promise<IDot>;

    constructor() {

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

    public getCurrentLocation(): Promise<IDot> {
        return this.geolocationPromise;
    }
}