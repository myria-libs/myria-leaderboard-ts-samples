# Myria Leaderboard Ts Samples
Myria leaderboard typescripts sample includes details example for guide of leaderboard sdk usage.

## Overview

Typescript application that shows how to interact with the `@myria/leaderboard-ts-sdk` library. The code samples provided in this project will help create new Myria leaderboard, manage leaderboard data

## Prerequisites

TBD

## Setup

### 1. Clone the repository

```
git clone git@github.com:myria-libs/myria-leaderboard-ts-samples.git
```

### 2. Enter myria-ts-samples directory

```
cd myria-leaderboard-ts-samples
```

### 3. Install dependencies
```
yarn
```

### 4. Provide environment variables

Rename the`.env.example` file into `.env` and provide the required configuration values:

```
# common
STARK_KEY=                <Stark Public Key which is generated for Myria Wallet>
DEVELOPER_API_KEY=        <Developer API Key>

## Running the app

### 1. Common

#### 1.1 Create the leaderboard

Create the leaderboard using Developer API Key

Requirements: 
1. Provide `PRIVATE_KEY` environment variable

Run with npm scripts: 

```bash
npm run create-leaderboard
```

or yarn: 
```bash
yarn create-leaderboard
```