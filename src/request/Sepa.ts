import Client from "@/ressource/Client";
import { SEPA, SEPACreate, SEPAUpdate } from "@/types/sepa";

export class Sepa {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Create a sepa
   * @param data SEPACreate
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async create(data: SEPACreate): Promise<SEPA> {
    try {
      const response = await this.client.post<SEPA>("/v1/sepa", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a sepa
   * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async get(id: string): Promise<SEPA> {
    try {
      const response = await this.client.get<SEPA>(`/v1/sepa/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update a sepa
   * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
   * @param data SEPAUpdate
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async update(id: string, data: SEPAUpdate): Promise<SEPA> {
    try {
      const response = await this.client.put<SEPA>(`/v1/sepa/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete a sepa
   * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<SEPA>
   * @throws Error
   */
  public async delete(id: string): Promise<SEPA> {
    try {
      const response = await this.client.delete<SEPA>(`/v1/sepa/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
