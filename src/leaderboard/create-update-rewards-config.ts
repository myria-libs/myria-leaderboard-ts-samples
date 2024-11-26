
import { DistributionType, InitLeaderboardParams, LeaderboardManager, RewardDistribution, RewardDistributionConfigParams } from '@myria/leaderboard-ts-sdk';
import config from "../config";
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const rewardDistributionConfig: RewardDistribution = {
        distributionType: DistributionType.PERCENTAGE,
        period: 11,
        isApplyRewardAllPeriods: false,
        rewardPoolAmount: 1000,
        items: [
            {
                name: 'Distribution Period 3 Test 1', 
                rank: {
                    min: 1,
                    max: 10
                },
                detail: {
                    tokenAddress: '0x83a795E1E91560Aae4207fDae9199d384f11D9d2',
                    type: 'ERC20',
                    amount: "1000"
                }
            },
            {
                name: 'Distribution Period 3 Test 2', 
                rank: {
                    min: 11,
                    max: 20
                },
                detail: {
                    tokenAddress: '0x83a795E1E91560Aae4207fDae9199d384f11D9d2',
                    type: 'ERC20',
                    amount: "1000"
                }
            },
        ]
    }
    const leaderboardParams: RewardDistributionConfigParams = {
        leaderboardId: "116",
        rewardConfig: rewardDistributionConfig
    };
  
    console.log("Creating reward config for the leaderboard...");
    const leaderboardRewardConfigResp = await leaderboardManager.createOrUpdateRewardDistributionConfig(leaderboardParams);
  
    console.log("Creating reward config of leaderboard response:");
    console.log('leaderboardRewardConfigResp', leaderboardRewardConfigResp);
    console.log(JSON.stringify(leaderboardRewardConfigResp, null, 2));
  })();
  