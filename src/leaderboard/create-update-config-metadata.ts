
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams,SetConfigMetadataParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const metadataParams: SetConfigMetadataParams = {
        leaderboardId: 138,
        configMetadata: {
            test: 'config_metadata',
            key1: 'strong',
            value1: 'power'
        }
    };
  
    console.log("Creating config metadata for the leaderboard...");
    const leaderboardRewardConfigResp = await leaderboardManager.setConfigMetadata(metadataParams);
  
    console.log("Creating config metadata for leaderboard response:");
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  