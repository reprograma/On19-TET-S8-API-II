const express = require('express')
const app = express()
const port = 3000
const ListaProdutos = require("./model/produtos.json")
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/produtos", (req, res) => {
    const filtrarNome = req.query.nome
    const filtrarDescricao = req.query.descricao

    const ProdutoEscolhido = ListaProdutos.filter((item, index) => {
if(filtrarNome){
    return item.nome.toLocaleLowerCase() === filtrarNome.toLocaleLowerCase()
    }
if(filtrarDescricao){ 
    return item.descricao.toLocaleLowerCase()=== filtrarDescricao.toLocaleLowerCase() //o valor ainda nao esta funcionado.
}
    return item
})
    res.json(ProdutoEscolhido)
  })

app.get("/produtos", (req, res) => {
    res.json(ListaProdutos)
  })

  app.get("/produtos/:id", (req, res) => {
   const id = req.params.id
   const ProdutoEscolhido = ListaProdutos.filter((item, index) => item.id == id)
   
    res.json(ProdutoEscolhido)
  })


app.post('/',(req, res) => {
const body = req.body

console.log(body)

res.send("Usuario encontrado")
})


app.post("/produtos/AdicionarProduto",(req, res) => {
    const body = req.body
    ListaProdutos.push(body)
    
    res.json(ListaProdutos)
    })



app.listen(port, () => {
  console.log(`Estou escutando esta porta ${port}`)
})
