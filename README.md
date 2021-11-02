# Spotify autocomplete search

A React app to search for artist, albums, and tracks powered by [Spotify's Web API](https://developer.spotify.com/documentation/web-api/).

## Getting started

### Install

Installation of this project requires Node.js and, preferably [NVM](https://github.com/nvm-sh).

1. To clone the project, run:

   `git clone https://github.com/SimmonsRitchie/spotify-autocomplete.git`

2. If you use [NVM](https://github.com/nvm-sh), CD into the project directory and run:

   `nvm use`

   If you don't use NVM, ensure you are using the appropriate version of Node as specified in .nvmrc in the root of this project.

3. Cd into the project directory and run:

   `npm i`

4. Sign up for developer access to [Spotify's Web API](https://developer.spotify.com/documentation/web-api/). Take note of your Client ID and Client Secret key.

5. Set up a .env file using the .env template provided in this repo.

```cp .env.example .env```

Add your Spotify Client ID and Client Secret to REACT_APP_CLIENT_ID and REACT_APP_CLIENT_SECRET.

### Local dev

To run in development mode, cd into the project folder and run:

`npm run dev`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

For the production build, run:

`npm run build`

This bundles the app for production to the `build` folder. It optimizes the build for the best performance. The build is minified and the filenames include the hashes.
