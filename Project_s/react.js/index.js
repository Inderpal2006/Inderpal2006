const http = require('http');
http.createServer((Request , Response)=>{
    Response.writeHeader(200,{'comtent-type': 'applicaion\json'});
    Response.write(JSON.stringify({name: 'Inderpal Taak' , }));
    Response.end;
}).listen(6000);