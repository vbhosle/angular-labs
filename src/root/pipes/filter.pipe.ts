import { Pipe, PipeTransform } from "@angular/core";
/*
 filters string array using startsWith string
*/
@Pipe({
    name: 'listStartsWith'
})
export class FilterPipe implements PipeTransform{

    transform(value:string[], startsWith:string = ''){
        return value.slice().filter(
            (item:string) => item.toUpperCase().startsWith(startsWith.toUpperCase())
        );
    }
}