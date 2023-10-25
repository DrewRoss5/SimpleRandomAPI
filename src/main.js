const express = require('express');
const ran = require('ranjs');

const app = express();
const port = 8080;

// constants for query indexes 
const lBoundIndex = 0; // index for the lower bound
const uBoundIndex = 1; // index for the upper bound
const countIndex = 2; // count of random numbers to be generated
const seedIndex = 3; // index for the seed 
// a default lower bound, upper bound, count, and random seed
var defaultArgs = [1, 100, 1, Date.now()*10000];

// returns a random number given an API request and an RNG function
function generateRandomNumber(req, func){
    let args = [req.query.lower, req.query.upper, req.query.count, req.query.seed]
    // parse queries 
    // for each parameter (lower bound, upper bound, and seed), check if it's specified, and set it to the default if not
    for (let i = 0; i < 4; i++){
        if (args[i] == undefined){
            args[i] = defaultArgs[i];
        }
    }
    // set the seed and generate the random number
    ran.core.seed(args[seedIndex]);
    // update the default seed
    defaultArgs[seedIndex] = Date.now()*10000;
    console.log(`Random Number Generated between ${args[0]} and ${args[1]}, with seed ${args[3]}`)
    // convert output to an array if only one number is generated
    if (args[countIndex] < 2) {
        return [func(args[lBoundIndex], args[uBoundIndex], args[countIndex])]
    }
    else{
        return func(args[lBoundIndex], args[uBoundIndex], args[countIndex])
    }
}

app.get('/int', (req, res) => {res.send(generateRandomNumber(req, ran.core.int))})
app.get('/float', (req, res) => {res.send(generateRandomNumber(req, ran.core.float))})

app.listen(port, () => {
    console.log(`Random API listening on port ${port}`)
})