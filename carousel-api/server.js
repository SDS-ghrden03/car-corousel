const newRelic = require('newrelic');
import appPG from './appPG.js';
import appMongo from './appMongo.js';


appPG.set('port', process.env.PORT || 3001);
// app.use(express.static(__dirname + "../carousel-ui2/dist"));

appPG.listen(appPG.get('port'), () => {
  console.log(`Server listening on port ${appPG.get('port')}.`);
});