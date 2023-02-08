import { Client } from "@/ressource/Client";
import { RefundCreate, Refund as RefundInterface } from "@/types/refund";

export class Refund {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Create a refund
   * @param data RefundCreate
   * @returns Promise<Refund>
   * @throws Error
   */
  public async create(data: RefundCreate): Promise<RefundInterface> {
    try {
      const response = await this.client.post<RefundInterface>("/v1/refund", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a refund
   * @param id string The ID of the payment to retrieve (refund_id) (prefixed by "refd_") (e.g refd_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Refund>
   * @throws Error
   */
  public async get(id: string): Promise<RefundInterface> {
    try {
      const response = await this.client.get<RefundInterface>(`/v1/refund/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
