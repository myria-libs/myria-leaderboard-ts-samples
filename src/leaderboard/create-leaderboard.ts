
import config from "../config";
import { LeaderboardManager, InitLeaderboardParams, LeaderboardData, CreateLeaderboardParams } from '@myria/leaderboard-ts-sdk';
  
  (async (): Promise<void> => {
    const environment = config.env;

    const developerApiKey = config.developer_api_key;
    const initLeaderboardParams: InitLeaderboardParams = {
        env: environment, // Use your desired environment type (STAGING / PREPROD / PROD)
        apiKey: developerApiKey, // Your Developer API Key
    };
      
    const leaderboardManager = new LeaderboardManager(initLeaderboardParams);
  
    const leaderboardParams: CreateLeaderboardParams = {
        name: 'Leaderboard Overwrite Lesser v2',          // The name of your leaderboard
        description: 'A test leaderboard', // A brief description of your leaderboard
        gameName: 'Test Game',             // The name of your game
        livePeriodInDays: 10,              // The duration for each leaderboard period
        totalPeriods: 5,                   // The total number of periods for the leaderboard
        updateScoreStrategy: 'OVERWRITE_LESSER', // Strategy for updating scores
        enableMetadata: false,             // Optional: Enable metadata if needed
      };
  
    console.log("Creating the leaderboard...");
    const leaderboardResponse: LeaderboardData = await leaderboardManager.createLeaderboard(leaderboardParams);
  
    console.log("Created leaderboard response:");
    console.log(JSON.stringify(leaderboardResponse, null, 2));
  })();
  