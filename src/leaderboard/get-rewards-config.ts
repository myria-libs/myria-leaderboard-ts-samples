
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, RewardDistributionConfigParams, RewardDistribution, DistributionType, GetLeaderboardDetailsInfo } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const leaderboardParams: GetLeaderboardDetailsInfo = {
        leaderboardIdOrName: "176",
        developerApiKey
    };
  
    console.log("Get leaderboard details with rewards config...");
    const leaderboardRewardConfigResp = await leaderboardManager.getLeaderboardDetailsInfo(leaderboardParams);
  
    console.log("Get leaderboard details:");
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  