import {} from 'jasmine';
import listReducer from './list.reducer';
import { ListState } from './../states/list.state';
import * as ListActions from './../actions/list.actions';
import { ICityWeather } from './../interfaces';

describe('test list reducer', () => {

    let state: ListState = [
            {
                "id": 623869,
                "name": "Ozerishche",
                "coord": {"lon": 27.700001, "lat": 53.933334},
                "main": {"temp": 269.64, "pressure": 1011, "humidity": 92, "temp_min": 269.15, "temp_max": 270.15},
                "dt": 1481720400,
                "wind": {"speed": 1, "deg": 0},
                "sys": {"country": ""},
                "clouds": {"all": 90},
                "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}],
                "favorite": false
            },
            {
                "id": 629962,
                "name": "Slepnya",
                "coord": {"lon": 27.65, "lat": 53.933334},
                "main": {"temp": 269.63, "pressure": 1011, "humidity": 92, "temp_min": 269.15, "temp_max": 270.15},
                "dt": 1481720400,
                "wind": {"speed": 1, "deg": 0},
                "sys": {"country": ""},
                "clouds": {"all": 90},
                "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}],
                "favorite": false
            },
            {
                "id": 620553,
                "name": "Uruch’ye",
                "coord": {"lon": 27.683332, "lat": 53.950001},
                "main": {"temp": 269.64, "pressure": 1011, "humidity": 92, "temp_min": 269.15, "temp_max": 270.15},
                "dt": 1481720400,
                "wind": {"speed": 1, "deg": 0},
                "sys": {"country": ""},
                "clouds": {"all": 90},
                "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}],
                "favorite": false
            }];

    it('check add action', () => {
        let action = new ListActions.AddAction({
            "cod": 200,
            "id": 625144,
            "name": "Minsk",
            "coord": {"lon": 27.566668, "lat": 53.900002},
            "main": {"temp": 269.62, "pressure": 1011, "humidity": 92, "temp_min": 269.15, "temp_max": 270.15},
            "dt": 1481720400,
            "wind": {"speed": 1, "deg": 0},
            "sys": {"country": ""},
            "clouds": {"all": 90},
            "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}]
        });
        expect(listReducer(state, action).length).toBe(4);
        expect(listReducer(state, action)[0].id).toBe(625144);

    });

    it('check reset action', () => {
        let action = new ListActions.ResetAction([{
                "id": 625143,
                "name": "Horad Minsk",
                "coord": {"lon": 27.566668, "lat": 53.900002},
                "main": {"temp": 269.62, "pressure": 1011, "humidity": 92, "temp_min": 269.15, "temp_max": 270.15},
                "dt": 1481720400,
                "wind": {"speed": 1, "deg": 0},
                "sys": {"country": ""},
                "clouds": {"all": 90},
                "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}]
            },
            {
                "id": 8247183,
                "name": "Borovlyany",
                "coord": {"lon": 27.6754, "lat": 54.002201},
                "main": {"temp": 269.64, "pressure": 1011, "humidity": 92, "temp_min": 269.15, "temp_max": 270.15},
                "dt": 1481720400,
                "wind": {"speed": 1, "deg": 0},
                "sys": {"country": ""},
                "clouds": {"all": 90},
                "weather": [{"id": 701, "main": "Mist", "description": "mist", "icon": "50d"}]
            }
        ]);
        expect(listReducer(state, action).length).toBe(2);
        expect(listReducer(state, action)[0].favorite).toBeFalsy();
    });

    it('check delete action', () => {
        let action = new ListActions.DeleteAction(623869);
        expect(listReducer(state, action).length).toBe(2);
        expect(listReducer(state, action)[0].id).not.toBe(623869);
        expect(listReducer(state, action)[1].id).not.toBe(623869);
    });

});