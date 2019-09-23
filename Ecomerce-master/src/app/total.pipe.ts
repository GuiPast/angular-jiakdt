import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'total'
})
export class TotalPipe implements PipeTransform {
    transform(value: Array<object>, args?:string ): string {
            return value.reduce( (prev,current) => prev+current[args], 0);
    }
}
