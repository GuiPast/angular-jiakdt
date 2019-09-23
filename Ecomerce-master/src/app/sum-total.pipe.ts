import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sumTotal'
})
export class SumTotalPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value * args;
    }
}
