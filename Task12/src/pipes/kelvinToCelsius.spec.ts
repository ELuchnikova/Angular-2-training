import {} from 'jasmine';
import { KelvinToCelsiusPipe } from './kelvinToCelsius';

describe('test kelvinToCelsius pipe', () => {

    let pipe: KelvinToCelsiusPipe = new KelvinToCelsiusPipe();

    it('check transform method', () => {
        expect(pipe.transform(273.15)).toBe(0);
    });

    it('check transform method', () => {
        expect(pipe.transform(200)).toBeCloseTo(-73.15);
    });

    it('check transform method with string input', () => {
        expect(pipe.transform('a')).toBeNaN();
    });

});