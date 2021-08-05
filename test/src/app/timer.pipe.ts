import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'timer'

})
export class TimerPipe implements PipeTransform {

  transform(value:number){
    let time = new Date()
    time.setTime(value*1000)
    return `${time.toTimeString().substr(0,8)}`
  }

}
