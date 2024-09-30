
import config from "../config";
import { LeaderboardManager, IQueryScoreParams, LeaderboardEnv, InitLeaderboardParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: 'STAGING', // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
    const leaderboardId = 111;
    const queryScores: IQueryScoreParams = {
        leaderboardId,
    };
  
    console.log("Get score by the leaderboard ID...");
    const queryScoreResp = await leaderboardManager.queryScoresByLeaderboardId(queryScores)
    // queryScoreResp.data.meta.
  
    console.log(`Get score in leaderboard ${leaderboardId} response:`, queryScoreResp);
    console.log(JSON.stringify(queryScoreResp.data.items, null, 2));
  })();
  