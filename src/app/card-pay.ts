export class CardPay {

  constructor(
    public cardNumber: number,
    public cardType: string,
    public dateExp: Date,
    public crypto: number
  ) {
  }

}
