const express = require('express')
const uuid = require('uuid')
const port = 4000
const app = express()
app.use(express.json())

const orders = []

const checkId = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if (index < 0) {
        return response.status(404).json({ message: "User not found" })
    }

    request.orderIndex = index
    request.orderId = id
    next()
}

const checkmetodoUrl = (request, response, next) => {
    console.log(request.method)
    console.log(request.url)

    next()
}

app.post('/order', checkmetodoUrl, (request, response) => {
    const { order, clientName, price, status } = request.body
    const newOrder = { id: uuid.v4(), order, clientName, price, status }

    orders.push(newOrder)
    
    return response.json({ newOrder })
}) // recebe o pedido do cliente

app.get('/order', checkmetodoUrl, (request, response) => {
    return response.json({ orders })
}) // lista todos os pedidos já feitos

app.put('/order/:id', checkId, checkmetodoUrl, (request, response) => {
    const index = request.orderIndex
    const id = request.orderId

    const { order, clientName, price, status } = request.body
    const orderUpdate = { id, order, clientName, price, status }

    orders[index] = orderUpdate

    return response.json({ orderUpdate })
}) // atualiza pedido

app.delete('/order/:id', checkId, checkmetodoUrl, (request, response) => {
    const index = request.orderIndex

    orders.splice(index, 1)
    return response.json({ message: "User removed" })
}) // deleta usuario

app.get('/order/:id', checkId, checkmetodoUrl, (request, response) => {
    const index = request.orderIndex

    return response.json(orders[index])
}) // lista pedido pelo id

app.patch('/order/:id', checkId, checkmetodoUrl, (request, response) => {
    const index = request.orderIndex
    const { status } = request.body

    orders[index].status = status

    return response.json(orders[index])
}) // atualiza status do pediodo

app.listen(port, () => {
    console.log(`Funcionando na porta: ${port}🚀`)
})

