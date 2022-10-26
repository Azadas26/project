var http=require("http")
var fs=require("fs")

  http.createServer(function(req,res)
  {
    if(req.url==="/")
    {
        fs.readFile("login.html",function(err,data)
        {
           res.writeHead(200,{"Content-type":"text/html"})
           res.write(data)
           res.end()
        })
    }
    else if(req.url==="/sinup.html")
    {
       fs.readFile("sinup.html",function(err,data)
       {
         res.writeHead(201,{"Content-Type":"text/html"})
         res.write(data)
         res.end()
       })
    }
    else
    {
        res.write("ERRROR")
        res.end()
    }
  }).listen(7000)