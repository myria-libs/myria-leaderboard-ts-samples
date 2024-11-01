
import { EnvTypes } from "myria-core-sdk/dist/types";
import config from "../config";
import { RewardManager, GetRewardsParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    // const developerApiKey = config.developer_api_key;
    const rewardManager = new RewardManager(environment);

    const getRewardParams: GetRewardsParams = {
       userId: '0xd0D8A467Eb8526C2AF030C18C64A664A5e1aF34A',
       leaderboardId: 138
    }
      
    console.log("Get leaderboard rewards...");
    const rewardData = await rewardManager.getRewards(getRewardParams);

    console.log("Get reward data:", rewardData.accumulate);
    console.log(JSON.stringify(rewardData, null, 2));
  })();
  