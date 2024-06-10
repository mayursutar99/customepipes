import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentencereducer'
})
export class SentencereducerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length>20){
      value=value.slice(0,19);
      value+=".....";
    }
    return value;
  }

}
