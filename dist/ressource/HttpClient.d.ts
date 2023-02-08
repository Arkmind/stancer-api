export declare class HttpClient {
    private defaultHeaders;
    private baseUrl;
    private errorManager;
    constructor();
    setDefaultHeaders(headers: any): Promise<any>;
    get<Response>(url: string, data?: any, headers?: any): Promise<Response>;
    post<Response>(url: string, data: any, headers?: any): Promise<Response>;
    put<Response>(url: string, data: any, headers?: any): Promise<Response>;
    delete<Response>(url: string, headers?: any): Promise<Response>;
    patch<Response>(url: string, data: any, headers?: any): Promise<Response>;
    getBasicAuthKey(username: string, password?: string): Promise<string>;
}
