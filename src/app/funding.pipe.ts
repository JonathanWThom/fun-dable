import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'funding',
  pure: false
})
export class FundingPipe implements PipeTransform {

  transform(input: any[], args: string) {
    var output: any[]= [];

    if (args === "close") {
      input.forEach(function(project) {
        if ((project.funding / project.cashGoal) >= 0.75) {
          output.push(project);
        }
      });
      return output;
    } else if (args === "notClose") {
      input.forEach(function(project) {
        if ((project.funding / project.cashGoal) <= 0.25) {
          output.push(project);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
