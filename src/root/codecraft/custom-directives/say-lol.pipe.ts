import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'sayLol'
})
export class SayLolPipe implements PipeTransform{

    transform(value:string):string{
        return value + "!! LoL :D";
    }
}