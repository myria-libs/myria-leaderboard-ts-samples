
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, IPostScoreParams, IPostScoreResp } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
    const leaderboardId = 62;
    const postNewScoreParams: IPostScoreParams = {
        leaderboardId,
        items: [
          {
            score: 1,
            displayName: 'userDisplayname',
            userId: '10',
            username: 'Ste7en',
          },
          {
            score: 1000,
            displayName: 'test-highest-score',
            userId: '11',
            username: 'Ste7en-2',
          },
        ],
      };
  
    console.log("Post score to the leaderboard...");
    const postScoreResp = await leaderboardManager.postScore(postNewScoreParams)
  
    console.log("Post leaderboard response:", postScoreResp);
    console.log(JSON.stringify(postScoreResp.data, null, 2));
  })();
  