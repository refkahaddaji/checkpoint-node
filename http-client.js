var http=require('http')
var url=process.argv[2];

    http.get(url , (response)=> {
        response.setEncoding('utf8');
        response.on('data',console.log);
        response.on('data',console.error);
    })