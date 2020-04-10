require('dotenv').config()
const newRelic = require('newrelic');
const appPG = require('./appPG.js');

console.log('port: ', process.env.PORT)
appPG.set('port', process.env.PORT || 3001);
// app.use(express.static(__dirname + "../carousel-ui2/dist"));

appPG.listen(appPG.get('port'), () => {
  console.log(`Server listening on port ${appPG.get('port')}.`);
});