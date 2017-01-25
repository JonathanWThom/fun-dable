export class Project {
  public funding: number = 0;
  constructor(public name: string, public managers: string[], public description: string, public cashGoal: number, public actionGoal: string, public perks: string[], public type: string) {

  }
}
