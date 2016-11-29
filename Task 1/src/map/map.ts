/// <reference path="../../node_modules/@types/googlemaps/index.d.ts" />
import {MAP_CONTAINER} from './../containers';
import {IDot} from './../interfaces';

export class Map {

    private static instance: Map;
    private static currentLocation: IDot;
    private map: google.maps.Map ;

    constructor() {
        this.map = new google.maps.Map(MAP_CONTAINER, {
            center: Map.currentLocation,
            zoom: 12
        });
    }

    public static createMap(location: IDot): void {
        Map.currentLocation = location;

        if (!Map.instance) {
            Map.instance = new Map();
        } else {
            Map.instance.map.setCenter(location);
        }
    }
}