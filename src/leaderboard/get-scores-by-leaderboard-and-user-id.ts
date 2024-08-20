
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, IQueryScoreByLeaderboardAndUserIdParams } from '@myria/leaderboard-ts-sdk';

(async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };

    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
    const leaderboardId = 62;
    const queryScores: IQueryScoreByLeaderboardAndUserIdParams = {
        leaderboardId,
        userId: "11"
    };

    console.log("Get score by the leaderboard ID and user ID...");
    const queryScoreResp = await leaderboardManager.getScoresByLeaderboardIdAndUserId(queryScores);

    console.log(`Get score in leaderboard ${leaderboardId} and userID response:`, queryScoreResp);
    console.log(JSON.stringify(queryScoreResp.data, null, 2));
})();
