
import { DistributionType, InitLeaderboardParams, LeaderboardManager, RewardDistribution, RewardDistributionConfigParams } from '@myria/leaderboard-ts-sdk';
import config from "../config";
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const rewardDistributionConfig: RewardDistribution = {
        distributionType: DistributionType.PERCENTAGE,
        period: 1,
        isApplyAllPeriods: false,
        rewardPoolAmount: 1300,
        items: [
            {
                name: 'Distribution Week 1 - Period 1 only', 
                rank: {
                    min: 1,
                    max: 10
                },
                detail: {
                    tokenAddress: '0x83a795E1E91560Aae4207fDae9199d384f11D9d2',
                    type: 'ERC20',
                    amount: "100"
                }
            }
        ]
    }
    const leaderboardParams: RewardDistributionConfigParams = {
        leaderboardId: "138",
        rewardConfig: rewardDistributionConfig
    };
  
    console.log("Creating reward config for the leaderboard...");
    const leaderboardRewardConfigResp = await leaderboardManager.createOrUpdateRewardDistributionConfig(leaderboardParams);
  
    console.log("Creating reward config of leaderboard response:");
    console.log('leaderboardRewardConfigResp', leaderboardRewardConfigResp.data);
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  