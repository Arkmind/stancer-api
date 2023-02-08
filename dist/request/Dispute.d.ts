import { Client } from "@/ressource/Client";
import { Dispute as DisputeInterface, DisputeList, DisputeListResponse } from "@/types/dispute";
export declare class Dispute {
    private client;
    constructor(client: Client);
    /**
     * Get a dispute
     * @param id string The ID of the payment to retrieve (dispute_id) (prefixed by "dspt_") (e.g dspt_UB99idEIFcbK517ZrKBIrt4y)
     * @returns Promise<Dispute>
     * @throws Error
     */
    get(id: string): Promise<DisputeInterface>;
    /**
     * Get a list of disputes
     * @param data DisputeList
     * @returns Promise<DisputeListResponse>
     * @throws Error
     */
    list(data: DisputeList): Promise<DisputeListResponse>;
}
