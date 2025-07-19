# Instagram Analytics — Frontend

This is the **React/Next.js** frontend for the Instagram Analytics dashboard.  
It provides UI pages for:
- Viewing your followers
- Viewing who you’re following
- Identifying non-followers
- Displaying your top likers

## Features

- **Next.js** with TypeScript
- Component‐based UI in `components/`
- Data fetching via `services/instagramService.ts`
- Simple client‐side routing and layout

## Setup

1. Clone this repo and install dependencies:
   ```bash
   git clone git@github.com:Instagram-Analysis/instagram-analytics-FE.git
   cd instagram-analytics-FE
   npm install
   ```

2. Create a `.env.local` in the project root with:
   ```dotenv
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — start Next.js in dev mode  
- `npm run build` — build for production  
- `npm start` — start the production build  

## Instagram API Integration

> **Note:** We originally integrated using the unofficial [`instagram-private-api`](https://github.com/dilame/instagram-private-api) NPM package, but handling Instagram’s 2FA and checkpoint challenges proved brittle and time‐consuming.  
>  
> **Going forward**, we’re migrating to the **official Instagram Graph API** via OAuth. This will:
> - Use Instagram/Facebook’s supported login flow (no raw password/2FA hassles)  
> - Obtain long‐lived access tokens  
> - Fetch followers, following, and media metrics through `graph.instagram.com` endpoints  

Until that migration is complete, you’ll need to run the matching backend (see its README) and log in via the private‐API flow to view data.

## License

MIT
