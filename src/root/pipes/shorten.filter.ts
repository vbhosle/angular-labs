import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value:string, doShorten:boolean, shortenLimit: number=10){
        if(!doShorten) return value;

        return value.substr(0, shortenLimit)+'....'
    }
}