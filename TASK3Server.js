const express = require('express')
const app = express()
const port = process.env.PORT || 2420
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.listen(port, () => console.log(`Node app listening on port ${port}!`))

const customers = [
    { id: "DFI61", name: "Vishal", city: "Delhi", age: 27, gender: "Male", payment: "Credit Card" },
    { id: "JUW88", name: "Amit", city: "Noida", age: 49, gender: "Male", payment: "Debit Card" },
    { id: "KPW09", name: "Pradeep", city: "Gurgaon", age: 21, gender: "Male", payment: "Wallet" }
]

app.get('/customers', function (req, res) {
    res.send(customers)
})

app.get('/customers/:id', function (req, res) {
    const customer1 = customers.find(c1 => c1.id === req.params.id)
    if (!customer1)
        res.send(400).send('Customer not found with id ' + req.params.id)

    res.send(customer1)
})

app.post('/customers', function (req, res) {
    const body = req.body
    if (!body) {
        res.status(400).send('Data Required')
        return
    }
    customers.push(body)
    res.send('New Customer Added Successfully')
})