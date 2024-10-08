
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, IQueryScoreByPlayerParams } from '@myria/leaderboard-ts-sdk';

(async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };

    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
    const leaderboardId = 111;
    const queryScores: IQueryScoreByPlayerParams = {
        leaderboardId,
        userId: "11-test"
    };

    console.log("Get score by the leaderboard ID and user ID...");
    const queryScoreResp = await leaderboardManager.getScoresByPlayerId(queryScores);

    console.log(`Get score in leaderboard ${leaderboardId} and userID response:`, queryScoreResp);
    console.log(JSON.stringify(queryScoreResp.data, null, 2));
})();
