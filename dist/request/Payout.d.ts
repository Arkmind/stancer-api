import { Client } from "@/ressource/Client";
import { PayoutList, Payouts, PayoutTypes } from "@/types/payout";
export declare class Payout {
    private client;
    constructor(client: Client);
    /**
     * Get the payout list
     * @param data PayoutList
     * @returns Promise<Payouts>
     * @throws Error
     */
    list(data: PayoutList): Promise<Payouts>;
    /**
     * Get a payout detail
     * @param id string The ID of the payout to retrieve (payout_id) (prefixed by "pout_") (e.g pout_UB99idEIFcbK517ZrKBIrt4y)
     * @param type string The payout type (e.g "payments, refunds, disputes")
     * @returns Promise<Payouts>
     * @throws Error
     */
    get(id: string, type: PayoutTypes, data?: PayoutList): Promise<Payouts>;
}
