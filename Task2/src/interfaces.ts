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

export interface IWeatherItem {
    clouds: {
        all: number
    },
    coords:  {
        lat: number,
        lon: number
    },
    dt: number,
    id: number,
    main: IWeatherMainPart,
    name: string,
    sys: {
        country: string
    },
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