const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(process.cwd(), 'dist')
const types = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
}

http
  .createServer((request, response) => {
    const url = decodeURIComponent(request.url.split('?')[0])
    let file = path.join(root, url === '/' ? 'index.html' : url)

    if (!file.startsWith(root)) {
      response.writeHead(403)
      response.end('Forbidden')
      return
    }

    fs.stat(file, (statError, stat) => {
      if (statError || !stat.isFile()) {
        file = path.join(root, 'index.html')
      }

      fs.readFile(file, (readError, data) => {
        if (readError) {
          response.writeHead(404)
          response.end('Not found')
          return
        }

        response.writeHead(200, {
          'Content-Type': types[path.extname(file)] || 'application/octet-stream',
        })
        response.end(data)
      })
    })
  })
  .listen(4180, '127.0.0.1', () => {
    console.log('static 4180')
  })
