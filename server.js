var http = require('http')
var fs = require('fs')

fs.writeFile('test.html','Hello World',function(err){
    if(err) throw err;
    console.log('UPDATE!!')
}) // เขียนทับ

http.createServer(function (req, res) {
    fs.readFile('test.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}).listen(3000)

// fs.writeFile('test.html','hello world',function(err){
//     if(err) throw err;
//     console.log('Save !')
// })

// fs.appendFile('test.html','PUBG',function(err){
//     if(err) throw err;
//     console.log('UPDATE!!')
// }) // เพิ่ม เนื้อหา 

// fs.writeFile('test.html','PUBG',function(err){
//     if(err) throw err;
//     console.log('UPDATE!!')
// }) // เขียนทับ