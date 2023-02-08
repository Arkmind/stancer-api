import { Client } from "@/ressource/Client";
import { SEPA, SEPACreate, SEPAUpdate } from "@/types/sepa";
export declare class Sepa {
    private client;
    constructor(client: Client);
    /**
     * Create a sepa
     * @param data SEPACreate
     * @returns Promise<SEPA>
     * @throws Error
     */
    create(data: SEPACreate): Promise<SEPA>;
    /**
     * Get a sepa
     * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
     * @returns Promise<SEPA>
     * @throws Error
     */
    get(id: string): Promise<SEPA>;
    /**
     * Update a sepa
     * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
     * @param data SEPAUpdate
     * @returns Promise<SEPA>
     * @throws Error
     */
    update(id: string, data: SEPAUpdate): Promise<SEPA>;
    /**
     * Delete a sepa
     * @param id string The ID of the payment to retrieve (sepa_id) (prefixed by "sepa_") (e.g sepa_SKMLflt8NBATuiUzgvTYqsw5)
     * @returns Promise<SEPA>
     * @throws Error
     */
    delete(id: string): Promise<SEPA>;
}
