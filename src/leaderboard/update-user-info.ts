
import { GetLeaderboardDetailsInfo, InitLeaderboardParams, IUpdateUserInfoParams, LeaderboardManager } from '@myria/leaderboard-ts-sdk';
import config from "../config";
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);

    const updateUserInfo: IUpdateUserInfoParams = {
        userId: '0xc6b32a7b80e6da776e88ac41b9ba45b8ec1a02da',
        username: 'Khang-Test-2',
        displayName: 'Test-2',
        avatar: 'Test-url'
    }

  
    console.log("Update user info for the leaderboard...");
    const userRespData = await leaderboardManager.updateUserInfo(updateUserInfo);
  
    console.log("Update user info of leaderboard response:");
    console.log('updateUserInfoForLb', userRespData);
    console.log(JSON.stringify(userRespData, null, 2));
  })();
  
