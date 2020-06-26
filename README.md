## Book Gym Sessions

If you are lazy, you can use this.

Create a `config.js` file in the root containing the following:

```js
{
  email: '', // Your email
  password: '', // Your password
  time: '12:00 PM', // The time you want
  session: 'Weights Only', // The session you want
  club: 'GoodlifeBundall' // Gym Name from the URL
}
```

### Scheduling a cron

You can use `crontab` for this

```
1 0 * * *       cd ~path to script~ && ~path to nodejs~/node ./node_modules/.bin/cypress run --headless
```