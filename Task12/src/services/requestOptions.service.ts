import { Injectable } from '@angular/core';
import {BaseRequestOptions, RequestOptionsArgs, RequestOptions, URLSearchParams} from '@angular/http';

import { WEATHER_API_KEY } from './../api';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
    merge(options?: RequestOptionsArgs): RequestOptions {
        console.log('options', options);
        if (options.search) {
            options.search = <URLSearchParams>options.search;
        } else {
            options.search = new URLSearchParams();
        }

        options.search.set('APPID', WEATHER_API_KEY);
        return super.merge(options);
    }
}