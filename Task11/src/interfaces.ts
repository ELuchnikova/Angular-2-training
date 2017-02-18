export interface IWindow extends Window {
    initMap: () => void;
}

export interface IDot {
    lat: number,
    lng: number
}

export interface IWeatherResponse {
    cod: string,
    count: number,
    list: Array<IWeatherItem>,
    message: string
}

export interface IWeatherMainPart {
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
}

export interface IWeatherDescription {
    description: string,
    icon: string,
    id: number,
    main: string
}

export interface IWeatherItemSys {
    country: string
    sunrise?: number,
    sunset?: number
}

export interface IWeatherItem {
    clouds: {
        all: number
    },
    coord:  {
        lat: number,
        lon: number
    },
    dt: number,
    id: number,
    main: IWeatherMainPart,
    name: string,
    sys: IWeatherItemSys,
    weather: Array<IWeatherDescription>,
    rain?: {
        "3h": number
    },
    snow?: {
        "3h": number
    },
    wind: {
        deg: number,
        speed: number
    }
}

export interface IWeatherFavoriteItem extends IWeatherItem {
    favorite: boolean
}

export interface ICityWeather extends IWeatherItem {
    cod: number
}

export interface ITableCustomization {
    backgroundColor: 'normal' | 'lightBlue',
    cityAmount: number,
    tempScale: 'celsius' | 'kelvin',
    columnsVisibility: {
        cityName: boolean,
        temperature: boolean,
        weather: boolean,
        humidity: boolean,
        pressure: boolean,
        wind: boolean,
        clouds: boolean,
        favorite: boolean,
        deleteCity: boolean
    }
}

export interface ICustomSelectItem {
    value: string,
    viewValue: string
}

export interface ICustomSelectItems extends Array<ICustomSelectItem> {}