import { FormGroup } from '@angular/forms';
export function validateColumnsVisibility(c: FormGroup): {[key: string]: Object} {
    let someShown = false;

    for (let column in c.value) {
        someShown = c.value[column] || someShown;
    }

    if (someShown) {
        return null;
    } else {
        return {'invalidColumnsVisibility': true};
    }
}
