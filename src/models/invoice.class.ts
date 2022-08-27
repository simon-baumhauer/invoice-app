export class Invoice {
  streeAdressFrom: String = '';
  cityFrom: string = '';
  postCodeFrom: number = 0;
  countryFrom: string = '';
  clientsName: String = '';
  clientsEmail: string = '';
  streeAdressto: String = '';
  cityTo: string = '';
  postCodeTo: number = 0;
  countryTo: string = '';
  invoiceDate!: Date;
  paymentTerms: string = '';
  projectDescription: string = '';
  itemName: string = '';
  quantity: number = 0;
  price: number = 0;
  totalPrice: number = 0;

  constructor(obj?: any) {
    this.clientsName = obj ? obj.clientsName : '';
    this.streeAdressFrom = obj ? obj.streeAdressFrom : '';
    this.cityFrom = obj ? obj.cityFrom : '';
    this.postCodeFrom = obj ? obj.postCodeFrom : '';
    this.countryFrom = obj ? obj.countryFrom : '';
    this.clientsName = obj ? obj.clientsName : '';
    this.clientsEmail = obj ? obj.clientsEmail : '';
    this.streeAdressto = obj ? obj.streeAdressto : '';
    this.cityTo = obj ? obj.cityTo : '';
    this.postCodeTo = obj ? obj.postCodeTo : '';
    this.countryTo = obj ? obj.countryTo : '';
    this.invoiceDate = obj ? obj.invoiceDate : '';
    this.paymentTerms = obj ? obj.paymentTerms : '';
    this.projectDescription = obj ? obj.projectDescription : '';
    this.itemName = obj ? obj.itemName : '';
    this.quantity = obj ? obj.quantity : '';
    this.price = obj ? obj.price : '';
    this.totalPrice = obj ? obj.totalPrice : '';
  }

  public toJson() {
    return {
      streeAdressFrom: this.streeAdressFrom,
      cityFrom: this.cityFrom,
      postCodeFrom: this.postCodeFrom,
      countryFrom: this.countryFrom,
      clientsName: this.clientsName,
      clientsEmail: this.clientsEmail,
      streeAdressto: this.streeAdressto,
      cityTo: this.cityTo,
      postCodeTo: this.postCodeTo,
      countryTo: this.countryTo,
      invoiceDate: this.invoiceDate,
      paymentTerms: this.paymentTerms,
      projectDescription: this.projectDescription,
      itemName: this.itemName,
      quantity: this.quantity,
      price: this.price,
      totalPrice: (this.totalPrice = this.quantity + this.price),
    };
  }
}
