const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./scheme/scheme');
const schema2 = require('./scheme/scheme2');

const app = express();

app.listen(5000, ()=> {
    console.log("Estou escutando na porta 5k");
});

app.use("/index",(req, res) => {
    res.send("Olá mundo, bem vindo a nossa API!!");

});

app.use(
    "/graphql",
    graphqlHTTP({
    schema: schema,
    graphiql: true,
})); 

app.use(
    "/graphql2",
    graphqlHTTP({
    schema: schema2,
    graphiql: true,
})); 