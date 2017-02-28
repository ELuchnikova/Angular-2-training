import { FormControl } from '@angular/forms';
export function validateCityAmount(c: FormControl): {[key: string]: Object} {
    if (c.value > 10) {
        return {
            'invalidCityAmount': {
                'maxAmount': 10,
                'currentAmount': c.value
            }
        };
    } else if (c.value < 3) {
        return {
            'invalidCityAmount': {
                'minAmount': 3,
                'currentAmount': c.value
            }
        };
    }

    return null;
}
