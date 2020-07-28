import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CepMask {
    
    constructor() {
    }

    public doMask(value: string): string{
        const valueWithoutNumber = this.removeAllNoneNumber(value);
        if (valueWithoutNumber.length > 5){
           return valueWithoutNumber.substr(0, 5) + '-' + valueWithoutNumber.substr(5, 3);
        }
        return valueWithoutNumber.substr(0, 9);
    }

    private removeAllNoneNumber(value: string): string{
        return value.replace(/\D/g, '');
    }

}
