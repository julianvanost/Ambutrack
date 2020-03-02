const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())




// const PORT = 3306

app.listen(process.env.PORT || 3000)
console.log(`Application is listening`);
