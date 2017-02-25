import { Injectable } from '@angular/core';

console.log('dev');

@Injectable()
export class DevLoggerService {

    public log(message: string): void {
        console.log(`%c ${message}`, 'color: rebeccapurple');
    }
}