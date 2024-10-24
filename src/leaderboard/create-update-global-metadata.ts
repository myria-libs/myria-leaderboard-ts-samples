
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, SetGameMetadataParams, SetGlobalMetadataParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const metadataParams: SetGlobalMetadataParams = {
        developerApiKey: developerApiKey,
        leaderboardId: 138,
        gameMetadata: {
            test: 'game_metadata',
            key: 'strong',
            value: 'power'
        },
        configMetadata: {
            test: 'config_metadata',
            buffSetting: {
                multiplyRate: 2,
                buffSettingName: 'Setup'
            }
        }
    };
  
    console.log("Creating global metadata for the leaderboard...");
    const leaderboardRewardConfigResp = await leaderboardManager.setGlobalMetadata(metadataParams);
  
    console.log("Creating global metadata for leaderboard response:");
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  