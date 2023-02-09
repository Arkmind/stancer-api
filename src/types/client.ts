export interface Keys {
  pprod?: string | null;
  ptest?: string | null;
  sprod?: string | null;
  stest?: string | null;
}

export interface ClientOptions {
  fetch?: Function;
}

export type NodeEnvironment = "prod" | "test";
