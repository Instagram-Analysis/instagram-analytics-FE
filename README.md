# Instagram Analytics Frontend

This is the Next.js + TypeScript frontend for the Instagram Analytics app. It provides a UI to view:

- Who follows you
- Who you follow
- Who doesn’t follow you back
- Who likes your posts the most

## Prerequisites

- Node.js v14+
- npm (or yarn)
- A running backend API (see backend README)

## Setup

1. **Clone & install**

   ```bash
   git clone git@github.com:Instagram-Analysis/instagram-analytics-FE.git
   cd instagram-analytics-FE
   npm install
   ```

2. **Configure environment**  
   Create `.env.local` in the root:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```

3. **Run**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run start` – start production server

## Project Layout

\`\`\`
components/ Reusable UI parts  
hooks/ Data-fetching React hooks  
pages/ Next.js routes (\_app.tsx, index.tsx, followers.tsx, etc.)  
services/ API wrappers  
styles/ Global CSS  
types/ TypeScript interfaces  
\`\`\`
