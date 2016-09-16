# Gold Compare

A tool for to help buying on the WoW auction house.

Enter the on sale lines from the auction house and select the line you would like the undercut. This assumes all previous lines are to be bought and sold at the undercut value.

## Running

To build, [npm](https://nodejs.org/en/) webpack (`npm i -g webpack`) and electron (`npm i -g electron`) are required.

Run `npm install` to grab the dependencies.

Run `npm run start` to pack the app and run the application.

## FAQ

_Why use webpack for an electron app?_

This app uses vuejs components (.vue files) and requires webpack to pre-process.
