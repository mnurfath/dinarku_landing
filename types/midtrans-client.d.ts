declare module "midtrans-client" {
  interface SnapConfig {
    isProduction: boolean;
    serverKey: string;
    clientKey: string;
  }

  interface SnapParameter {
    transaction_details: {
      order_id: string;
      gross_amount: number;
    };
    item_details?: {
      id: string;
      name: string;
      price: number;
      quantity: number;
      category?: string;
    }[];
    customer_details?: {
      email?: string;
      first_name?: string;
      last_name?: string;
      phone?: string;
    };
    custom_field1?: string;
    custom_field2?: string;
    custom_field3?: string;
  }

  interface SnapTransaction {
    token: string;
    redirect_url: string;
  }

  class Snap {
    constructor(config: SnapConfig);
    createTransaction(parameter: SnapParameter): Promise<SnapTransaction>;
  }

  const _default: {
    Snap: typeof Snap;
    CoreApi: typeof Snap;
    Iris: unknown;
    MidtransError: unknown;
    SnapBiConfig: unknown;
    SnapBi: unknown;
  };

  export default _default;
}
