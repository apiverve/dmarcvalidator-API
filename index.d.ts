declare module '@apiverve/dmarcvalidator' {
  export interface dmarcvalidatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface dmarcvalidatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class dmarcvalidatorWrapper {
    constructor(options: dmarcvalidatorOptions);

    execute(callback: (error: any, data: dmarcvalidatorResponse | null) => void): Promise<dmarcvalidatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: dmarcvalidatorResponse | null) => void): Promise<dmarcvalidatorResponse>;
    execute(query?: Record<string, any>): Promise<dmarcvalidatorResponse>;
  }
}
