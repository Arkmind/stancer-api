export interface Device {
  /**
   * Required IP address of the payer IPv4 or IPv6
   */
  ip: string;
  /**
   * Required TCP port number of the payer Int, max = 65535
   */
  port: number;
  /**
   * Optional HTTP User Agent header String, max = 256
   */
  user_agent?: string;
  /**
   * Optional HTTP Accept header String, max = 2048
   */
  http_accept?: string;
  /**
   * Optional HTTP Accept-Language header String, max = 32
   */
  languages?: string;
  /**
   * Conditional If ip provided, return the city of the payer String
   */
  city: string;
  /**
   * Conditional If ip provided, return the country of the payer String
   */
  country: string;
}
