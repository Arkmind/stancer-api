export enum Funding {
  CREDIT = "credit",
  DEBIT = "debit",
  PREPAID = "prepaid",
  UNIVERSAL = "universal",
  CHARGE = "charge",
  DEFERRED = "deferred",
}

export enum Nature {
  PERSONAL = "personal",
  CORPORATE = "corporate",
}

export enum Network {
  NATIONAL = "national",
  MASTERCARD = "mastercard",
  VISA = "visa",
}

export interface CreditCard {
  /**
   * Given by the API Card's id String, fixed size = 29
   */
  id: string;
  /**
   * Required at creation The customer PAN number String, min = 16, max = 19
   */
  // number: string; --> used only on CreditCardCreate
  /**
   * Given by the API Last 4 PAN number String, fixed size = 4 characters
   */
  last4: string;
  /**
   * Given by the API Card brand String
   */
  brand: string;
  /**
   * Required at creation Expiration month Int, min = 1, max = 12
   */
  exp_month: number;
  /**
   * Required at creation Expiration year Int, min = current year, max = 2100
   */
  exp_year: number;
  /**
   * Optional but highly recommanded The card verification code String, fixed size = 3 characters
   */
  // cvc?: string; --> used only on CreditCardCreate
  /**
   * Optional Card holder name String, min = 4, max = 64
   */
  name: string;
  /**
   * Given by the API Type of funding Enum credit, debit, prepaid, universal, charge or deferred. May be null if the type could not be determined.
   */
  funding: Funding | null;
  /**
   * Given by the API Nature of the card Enum personal or corporate. May be null if the nature could not be determined.
   */
  nature: Nature | null;
  /**
   * Given by the API Network used to process payments (may differ from brand) Enum national, mastercard or visa. May be null if the network could not be determined.
   */
  network: Network | null;
  /**
   * Optional City zip code String, min = 2, max = 8
   */
  zip_code: string;
  /**
   * Optional If you want the card to be tokenized and reused Boolean, default True
   */
  tokenize: boolean;
  /**
   * Given by the API The Unix timestamp representing creation date of the object in local time Int
   */
  created: number;
  /**
  * Given by the API Network, Boolean inherited from a payment object if linked, default False
  */
  live_mode: boolean; //ok
}

export interface CreditCardCreate {
  number: number;
  exp_month: number;
  exp_year: number;
  cvc?: string;
  name?: string;
  tokenize?: boolean;
  zip_code?: string;
}

export interface CreditCardUpdate {
  exp_month?: number;
  exp_year?: number;
  name?: string;
  zip_code?: string;
}
