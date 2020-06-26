## Book Gym Sessions

This works for Goodlife gyms in Australia to book the covid-gym session.

This will book the 7th day in advance at the time you want. Useful for when you are competing with lots of other people for a time. You can schedule this to run at 12:01 AM and find the time on the 7th day that you want.

## Setup

### Requirements

1. `node`
2. `yarn | npm`

### Setup

```
git clone git@github.com:willhackett/laziness-in-action.git
yarn (or npm install)
```

#### Setup Config File

Create a `config.js` file in the root containing the following:

```js
module.exports = {
  email: '', // Your email
  password: '', // Your password
  time: '12:00 PM', // The time you want
  session: 'Weights Only', // The session you want
  club: 'GoodlifeBundall' // Gym Name from the URL
}
```

#### Scheduling a cron

You can use `crontab` for this.

Use `crontab -e` and replace PATH_TO_SCRIPT and PATH_TO_NODE_BIN respectively.


```
1 0 * * *       cd PATH_TO_SCRIPT && PATH_TO_NODE_BIN_DIR/node ./node_modules/.bin/cypress run --headless
```

