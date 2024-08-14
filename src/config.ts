import { EnvTypes } from "myria-core-sdk";

export default {
  env: EnvTypes.STAGING,
  stark_key: process.env.STARK_KEY || "",
  developer_api_key: process.env.DEVELOPER_API_KEY || ""
}