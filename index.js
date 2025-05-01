const app = require("express")()

app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/sup', (req,res)=>{
    res.send('Hello family sup')
})

app.listen(8080, ()=> console.log("Listening"))