export class Invoice {
  clientsName: String = '';

  constructor(obj?: any) {
    this.clientsName = obj ? obj.clientsName : '';
  }

  public toJson() {
    return {
      clientsName: this.clientsName,
    };
  }
}
