
import { DistributionType, GetLeaderboardDetailsInfo, InitLeaderboardParams, LeaderboardManager, RewardDistribution, RewardDistributionConfigParams } from '@myria/leaderboard-ts-sdk';
import config from "../config";
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const leaderboardParams: GetLeaderboardDetailsInfo = {
        leaderboardIdOrName: "138",
    };
  
    console.log("Get reward config for the leaderboard...");
    const leaderboardRewardConfigResp = await leaderboardManager.getRewardDistributionInfo(leaderboardParams);
  
    console.log("Get reward config of leaderboard response:");
    console.log('leaderboardRewardConfigResp', leaderboardRewardConfigResp.data);
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  