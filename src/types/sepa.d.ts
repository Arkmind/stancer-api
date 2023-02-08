export interface SEPA {
  /**
   * Given by the API SEPA's id String, fixed size = 29
   */
  id: string;
  /**
   * Optional The BIC number associated with the IBAN String, min = 8, max = 11
   */
  bic?: string;
  /**
   * Required The bank account number String, min = 16, max = 34
   */
  iban: string;
  /**
   * Given by the API Last 4 bank account number String, fixed size = 4 characters
   */
  last4: number;
  /**
   * Required IBAN holder's name String, min = 4, max = 64
   */
  name: string;
  /**
   * Required The mandate referring to the payment String, min = 3, max = 35
   */
  mandate: string;
  /**
   * Required Timestamp of the mandate signature date, required if mandate was provided Int
   */
  mandate_date: number;
  /**
   * Given by the API The Unix timestamp representing creation date of the object in local time Int
   */
  created: number;
}

export interface SEPACreate {
  iban: string;
  name: string;
  bic?: string;
  mandate: string;
  mandate_date: number;
}

export interface SEPAUpdate {
  /**
   * Optional, only if mandate_date was not already provided
   */
  name?: string;
  /**
   * Optional, only if mandate_date was not already provided
   */
  mandate?: string;
  /**
   * Optional, only if not already provided
   */
  mandate_date?: number;
}
