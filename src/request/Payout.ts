import { Client } from "@/ressource/Client";
import { PayoutList, Payouts, PayoutTypes } from "@/types/payout";

export class Payout {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Get the payout list
   * @param data PayoutList
   * @returns Promise<Payouts>
   * @throws Error
   */
  public async list(data: PayoutList): Promise<Payouts> {
    try {
      const response = await this.client.get<Payouts>("/v1/payouts", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a payout detail
   * @param id string The ID of the payout to retrieve (payout_id) (prefixed by "pout_") (e.g pout_UB99idEIFcbK517ZrKBIrt4y)
   * @param type string The payout type (e.g "payments, refunds, disputes")
   * @returns Promise<Payouts>
   * @throws Error
   */
  public async get(id: string, type: PayoutTypes, data?: PayoutList): Promise<Payouts> {
    try {
      const response = await this.client.get<Payouts>(`/v1/payout/${id}/${type}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
