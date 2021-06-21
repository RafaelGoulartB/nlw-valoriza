import express from 'express'

const app = express()

app.get('/test', (req, res) => {
  return res.send('Olá Mundo!')
})

app.listen(3333, () => console.log(`Server is running at http://localhost:3333`))