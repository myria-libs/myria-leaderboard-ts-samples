
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
    const leaderboardId = 55;
  
    console.log("Deleting the leaderboard...");
    const deleteLeaderboardResp = await leaderboardManager.deleteLeaderboardById(leaderboardId);
  
    console.log("Deleted leaderboard response:", deleteLeaderboardResp);
    console.log(JSON.stringify(deleteLeaderboardResp, null, 2));
  })();
  