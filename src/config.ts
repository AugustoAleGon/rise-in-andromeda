import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Androchain",
    chainId: "galileo-4",
    createdDate: "2025-01-14T19:01:01.148Z",
    modifiedDate: "2025-01-14T19:01:01.148Z",
    id: "androchain",
    collections: [
        {
            "exchange": "andr19ht5w4pg4zqtzdu85w9e69zs2mrcceqk4wtxur49vpkcwlqpxupqzcrypc",
            "cw20": "andr1s7hd50j7y0hdcdxn8zgsfafq5un8kw9kzjn9gdfmz2hvzttww08q347j52",
            "name": "Androchain",
            "id": "embeddables-exchange-1",
            "type": ICollectionType.EXCHANGE
        },
    ],
};

export default CONFIG;
