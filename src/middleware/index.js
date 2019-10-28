module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters
  const app = this // eslint-disable-line no-unused-vars
  const apiKey = app.get('challongeApiKey');

  app.use('/tournaments', (req, res) => {
    const challonge = require('challonge')
    const client = challonge.createClient({
      apiKey:  apiKey
    });

    client.tournaments.index({
      callback: (err, data) => {
        res.json({
          status: 'success',
          message: data
        })
      }
    });
  });
}
