const app = require('./server')

async function main() {
    await app.listen(app.get('port'));
    console.log('Listening on port',app.get('port'))
  }
  
  main();