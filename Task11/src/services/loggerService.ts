import { Injectable } from '@angular/core';

console.log('prod');

// @Injectable()
// export class DevLoggerService {
//
//     public log(message: string): void {
//         console.log(`%c ${message}`, 'color: rebeccapurple');
//     }
// }


@Injectable()
export class LoggerService {

    public log(message: string): void {
        console.log(`%c ${message}`, 'color: pink');
    }
}