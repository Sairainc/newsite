declare module 'google-auth-library' {
  export class JWT {
    constructor(options: {
      email?: string;
      key?: string;
      keyFile?: string;
      scopes?: string | string[];
      subject?: string;
      keyId?: string;
    });
  }
} 