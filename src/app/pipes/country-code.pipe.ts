import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true
})
export class CountryCodePipe implements PipeTransform {

  transform(value: number, country?:String): String {
    let code = "+91-"

    if(country === "USA") return "+1-"+value
    return code + value
  }

}
