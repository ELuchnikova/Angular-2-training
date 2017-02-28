import {} from 'jasmine';
import { fakeAsync, tick } from '@angular/core/testing';
import { LocationService } from'./geolocation';

import { IDot } from './../interfaces';

describe('test geolocation service', () => {

    let service: LocationService;

    beforeAll(() => {
        spyOn(navigator.geolocation, 'getCurrentPosition').and.callFake(function() {
            var position = { coords: { latitude: 32.8569, longitude: -96.9628 } };
            arguments[0](position);
        });
    });

    it('check service constructor', () => {
        service = new LocationService();
        expect(service).toBeDefined();
    });

    it('check getCurrentLocation method', fakeAsync(() => {
        service = new LocationService();

        let resultPromise: Promise<IDot> = service.getCurrentLocation();
        console.log('promice', resultPromise);

        let result: IDot;

        resultPromise
            .then((data) => {
                result = data;
            });

        tick();

        expect(result.lat).toBe(32.8569);
        expect(result.lng).toBe(-96.9628);
    }));
});