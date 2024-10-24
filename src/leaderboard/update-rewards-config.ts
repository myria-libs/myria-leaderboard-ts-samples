
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, RewardDistributionConfigParams, RewardDistribution, DistributionType } from '@myria/leaderboard-ts-sdk';
  
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
        rewardPoolAmount: 1000,
        items: [
            {
                id: "121",
                name: 'Week 1', 
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
        developerApiKey: developerApiKey,
        leaderboardId: "176",
        rewardConfig: rewardDistributionConfig
    };
  
    console.log("Update reward config for the leaderboard...");
    console.log('rewardDistributionConfig => ', JSON.stringify(rewardDistributionConfig));
    const leaderboardRewardConfigResp = await leaderboardManager.updateRewardDistributionConfig(leaderboardParams);
  
    console.log("Update reward config of leaderboard response:");
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  