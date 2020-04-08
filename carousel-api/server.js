const newRelic = require('newrelic');
import app from './app';


app.set('port', process.env.PORT || 3001);
// app.use(express.static(__dirname + "../carousel-ui2/dist"));

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}.`);
});