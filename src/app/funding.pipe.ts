import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'funding',
  pure: false
})
export class FundingPipe implements PipeTransform {

  transform(input: FirebaseListObservable<any[]>, args: string) {
    var output: FirebaseListObservable<any[]>;

  //   if (args === "close") {
  //     input.forEach(function(project) {
  //       project.forEach(function(innerInput) {
  //         if (innerInput.funding / innerInput.cashGoal >= 0.75) {
  //           output.push(innerInput);
  //         }
  //       });
  //     });
  //     return output;
  //   } else if ( args === "notClose") {
  //     input.forEach(function(project) {
  //       project.forEach(function(innerInput) {
  //         if (innerInput.funding / innerInput.cashGoal <= 0.25) {
  //           output.push(innerInput);
  //         }
  //       });
  //     });
  //     return output;
  //   } else {
  //     return input;
  //   }
  // }

  if (args === "close") {
    input.forEach(function(project) {
      for (let innerInput of project) {
        if (innerInput.funding / innerInput.cashGoal >= 0.75) {
          output.push(innerInput);
        }
      }
    });
    return output;
  } else if ( args === "notClose") {
    input.forEach(function(project) {
      for (let innerInput of project) {
        if (innerInput.funding / innerInput.cashGoal <= 0.25) {
          output.push(innerInput);
        }
      }
    });
    return output;
  } else {
    return input;
  }
}
}
