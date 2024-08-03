const http = require("http");
const fs = require("fs");
const port = 3007;

const server = http.createServer((req , res) => {
    console.log(req.url);


    fs.appendFile('demo.txt' , 'Done..' , () => {
        console.log('File Created Sucessfully..');
    })
    
    if(req.url == '/'){
        
        fs.readFile('index.html' , 'utf-8' , (err, data) => {
            res.statusCode = 200;
            res.setHeader("content-type" , "text/html");
            res.end(data);
        })
        
    }
    else if(req.url == '/about'){
        fs.readFile('about.html' , 'utf-8' , (err, data) => {
            res.statusCode = 200;
            res.setHeader("content-type" , "text/html");
            res.end(data);
        })
    }
    else if(req.url == '/contact'){
        fs.readFile('contact.html' , 'utf-8' , (err, data) => {
            res.statusCode = 200;
            res.setHeader("content-type" , "text/html");
            res.end(data);
        })
    }
    else if(req.url == '/service'){
        fs.readFile('service.html' , 'utf-8' , (err, data) => {
            res.statusCode = 200;
            res.setHeader("content-type" , "text/html");
            res.end(data);
        })
    }
    else{
        
        fs.readFile('error.html' , 'utf-8' , (err, data) => {
            res.statusCode = 400;
            res.setHeader("content-type" , "text/html");
            res.end(data);
        })
    }
})


server.listen(port , () => {
    console.log(`server is running on http://localhost:${port}`);
})