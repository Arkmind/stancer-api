export interface Keys {
  pprod?: string | null;
  ptest?: string | null;
  sprod?: string | null;
  stest?: string | null;
}

export type NodeEnvironment = "prod" | "test";
