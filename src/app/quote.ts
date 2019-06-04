export class Quote {
  public showDetails: boolean;
  constructor(
    public id: number,
    public author: string,
    public submiter: string,
    public quote: string,
    public completeDate: Date,
    public details: string,

  ) {
    this.showDetails = false;
  }

}
