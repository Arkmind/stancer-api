import { ErrorManager } from "@/error/ErrorManager";
import { ClientOptions } from "@/types/client";

export class HttpClient {
  private fetch: Function = fetch;
  private defaultHeaders: any;
  private baseUrl: string = "https://api.stancer.com/";
  private errorManager: ErrorManager = new ErrorManager();

  constructor(options: ClientOptions) {
    this.fetch = options.fetch || this.fetch;
  }

  public setDefaultHeaders(headers: any): void {
    this.defaultHeaders = headers;
  }

  public async get<Response>(url: string, data?: any, headers?: any): Promise<Response> {
    const requestURL = `${new URL(url, this.baseUrl)}${data ? "?" : ""}${
      data ? new URLSearchParams(data).toString() : ""
    }`;

    const response = await this.fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async post<Response>(url: string, data: any, headers?: any): Promise<Response> {
    const response = await this.fetch(new URL(url, this.baseUrl).href, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async put<Response>(url: string, data: any, headers?: any): Promise<Response> {
    const response = await this.fetch(new URL(url, this.baseUrl).href, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async delete<Response>(url: string, headers?: any): Promise<Response> {
    const response = await this.fetch(new URL(url, this.baseUrl).href, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async patch<Response>(url: string, data: any, headers?: any): Promise<Response> {
    const response = await this.fetch(new URL(url, this.baseUrl).href, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public getBasicAuthKey(username: string, password: string = "") {
    return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
  }
}
