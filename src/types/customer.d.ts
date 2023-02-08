export interface Customer {
  /**
   * Customer ID (UUID) starting with "cust_" (e.g. "cust_9Cle7TXKkjhwqcWx4Kl5cQYk", will always be 29 characters long)
   */
  id: string;
  email: string;
  mobile: string;
  name: string;
  /**
   * Unix timestamp (seconds since 1970-01-01T00:00:00Z) when the customer was created
   */
  created: number;
  live_mode: boolean;
}

export interface CustomerCreate {
  email?: string;
  mobile?: string;
  name?: string;
  live_mode?: boolean;
}

export interface CustomerUpdate {
  email?: string;
  mobile?: string;
  name?: string;
}
