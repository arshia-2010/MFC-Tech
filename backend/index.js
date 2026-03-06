const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(express.json())

app.use(cors())
// Test route
app.get('/status', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is working properly"
    })
})


// app.post('/post',(req,res)=>{
//     const {text} = req.body;
//     var urmum = text.email;
//     console.log(urmum);
//     res.status(200).json(`${text} is posted`);
// })

// POST route
app.post('/post', (req, res) => {
    const { text } = req.body

    if (!text) {
        return res.status(400).json({
            error: "Text field is required"
        })
    }

    const email = text.email
    console.log("Email received:", email)

    res.status(201).json({
        message: "Data received successfully",
        data: text
    })
})

app.listen(port,()=>
    console.log(`Server running on http://localhost:8080`)
)