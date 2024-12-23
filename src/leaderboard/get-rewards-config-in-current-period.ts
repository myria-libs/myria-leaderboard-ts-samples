
import { DistributionType, GetLeaderboardDetailsInfo, InitLeaderboardParams, LeaderboardManager, RewardDistribution, RewardDistributionConfigParams, RewardInCurrentPeriod } from '@myria/leaderboard-ts-sdk';
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
  
    console.log("Creating reward config for the leaderboard...");
    const leaderboardRewardConfigResp: RewardInCurrentPeriod = await leaderboardManager.getRewardsInCurrrentPeriod(leaderboardParams)
  
    console.log("Creating reward config of leaderboard response:");
    console.log('leaderboardRewardConfigResp', leaderboardRewardConfigResp);
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  