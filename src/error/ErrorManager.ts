export class ErrorManager {
  public error: any;

  constructor() {}

  public async handleError(response: globalThis.Response) {
    const error = await response.json();
    const status = response.status;

    this.error = error;

    throw new Error(`${status} - ${error.error.message}`);
  }
}
