
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, IPostScoreParams, IPostScoreResponse, APIResponseType, LeaderboardEnv } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: LeaderboardEnv.staging, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
    const leaderboardId = 111;
    const postNewScoreParams: IPostScoreParams = {
        leaderboardId,
        items: [
          // {
          //   score: 2,
          //   displayName: 'userDisplayname-test-1',
          //   userId: '11-test',
          //   username: "11-test-update"
          // },
          {
            score: 0,
            userId: '11',
          },
          {
            score: 12,
            userId: '12',
          },
          {
            score: 13,
            userId: '13',
          },
          {
            score: 14,
            displayName: 'test-highest-score',
            userId: '14',
            username: 'TestUser14',
          },
        ],
      };
  
    console.log("Post score to the leaderboard...");

    try {
      const postScoreResp: APIResponseType<IPostScoreResponse> = await leaderboardManager.postPlayerScore(postNewScoreParams)
  
      console.log("Post leaderboard response:", postScoreResp.data);
      console.log(JSON.stringify(postScoreResp.data.failed, null, 2));
    } catch (error: any) {
      console.log('Error =>', error);
    }
    
  })();
