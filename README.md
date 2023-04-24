# BUM: An NFT Auction Platform

This project is a task from [Boom.dev](https://boom.dev/?redirect=1) from the React Developer track.

BUM is an NFT Auction Platform. The goal of the platform is to make selling NFT's accessible to a wider audience. In the platform, users have profiles that show their collection of NFT's which they've purchased. Users can also place bids in Ethereum on the NFT's. You can also discover popular and trending auctions on the Home and on the Explore page.

## Technologies Used

- TypeScript
- Next.js
- Material UI
- Tailwind CSS

## Installation

1. Clone the repository
2. Install the dependencies by running `yarn install`
3. Start the development server by running `yarn dev`

Make sure you have Node version 16.13.0 or later and yarn installed on your machine.

## Pages

The project is split into several pages, each of which serves a specific purpose:

### Home

The main goal of the Home page is to showcase the most important NFT's available on the platform. It contains a "Featured" section that shows all featured NFT's by the platform administrators. It also has trending sections which show the most visited and bet on NFT's and "Top Collectors" section which shows the users with the most items in their collection. Also present is an info section on how the platform works and a "Live Auctions" section which shows the auctions which are currently open.

### Product

The product page shows detailed information about the NFT like - its creator, its description, and all the bids that have been made. The product section has basically two states - "ended" and "live". When the auction for the NFT is open the state is "live" and a time left on the auction is shown. Users can also like the NFT and place bids on it via their respective buttons.

### Profile

The profile page shows basic information about the user like his or her username, description, avatar, cover image, and collection. The collection is displayed by a list of cards and can be sorted, filtered by a price range, and searched by name.

### Activity

The activity page shows all the actions performed by the users. Actions include likes, bids, and purchases. The activity list can be filtered by type, sorted and searched by name. All user activity is public and is shown in the activity list.

### Explore

On the explore page you can browse all available NFT's in the platform. NFT's can be filtered by name, whether they are active or not, sorted by price, title, and likes. The explore page shows NFT which currently has active auctions as well as the ones which have ended auctions.
