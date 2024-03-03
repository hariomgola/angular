import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false, //this is true bu default
})
export class FilterPipe implements PipeTransform {
  transform(value: any, stockDisplayed: number, StockMappingKey: string): any {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const items of value) {
      if (items[StockMappingKey] > stockDisplayed) {
        resultArray.push(items);
      }
    }
    return resultArray;
  }
}
