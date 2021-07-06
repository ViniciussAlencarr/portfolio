const express = require('express')
const handleBars = require('express-handlebars')

const app = express()
app.engine('handlebars', handleBars({ defaultLayout: `main`}))
app.set('view engine', 'handlebars')

app.use('/img01', express.static('Imagens/1º_pacote_de_imagens/'))
app.use('/img02', express.static('Imagens/2º_pacote_de_imagens/'))
app.use('/style', express.static('views/'))

app.get('/', (req, res) => {
    res.render('homeScreen')
})

app.listen(3000, () => {
    console.log('Server is running...')
})