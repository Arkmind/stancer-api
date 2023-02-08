import { Client } from "@/ressource/Client";
import { Dispute as DisputeInterface, DisputeList, DisputeListResponse } from "@/types/dispute";

export class Dispute {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Get a dispute
   * @param id string The ID of the payment to retrieve (dispute_id) (prefixed by "dspt_") (e.g dspt_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Dispute>
   * @throws Error
   */
  public async get(id: string): Promise<DisputeInterface> {
    try {
      const response = await this.client.get<DisputeInterface>(`/v1/dispute/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a list of disputes
   * @param data DisputeList
   * @returns Promise<DisputeListResponse>
   * @throws Error
   */
  public async list(data: DisputeList): Promise<DisputeListResponse> {
    try {
      const response = await this.client.get<DisputeListResponse>("/v1/disputes", data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
