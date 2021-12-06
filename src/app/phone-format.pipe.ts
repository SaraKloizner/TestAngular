import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(number: string) {
    number = "0" + number;
    const firt_num = number.slice(0, 3);
    const last_num = number.slice(3, 9)
    return (firt_num + "-" + last_num);
  }

}
