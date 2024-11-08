
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
        period: 2,
        isApplyRewardAllPeriods: true,
        rewardPoolAmount: 1300,
        items: [
            {
                name: 'Distribution Period 1 Test', 
                rank: {
                    min: 1,
                    max: 10
                },
                detail: {
                    tokenAddress: '0x83a795E1E91560Aae4207fDae9199d384f11D9d2',
                    type: 'ERC20',
                    amount: "100"
                }
            },
            {
                name: 'Distribution Period 1 Test', 
                rank: {
                    min: 11,
                    max: 20
                },
                detail: {
                    tokenAddress: '0x83a795E1E91560Aae4207fDae9199d384f11D9d2',
                    type: 'ERC20',
                    amount: "100"
                }
            },
            {
                name: 'Distribution Period 1 Test', 
                rank: {
                    min: 21,
                    max: 30
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
  