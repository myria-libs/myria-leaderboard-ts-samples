
import { EnvTypes } from "myria-core-sdk/dist/types";
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, IQueryLeaderboardsParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const queryLeaderboardParams: IQueryLeaderboardsParams = {
        limit: 10,
        page: 1
    };
  
    console.log("Fetching the leaderboard...");
    const fetchedLeaderboardResp = await leaderboardManager.getLeaderboards(queryLeaderboardParams);
  
    console.log("Fetched leaderboard response:", fetchedLeaderboardResp);
    console.log(JSON.stringify(fetchedLeaderboardResp, null, 2));
  })();
  