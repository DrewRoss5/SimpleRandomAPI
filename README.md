# SimpleRandomAPI
A simple API for generating numbers, made to learn ExpressJS.
This project is not intended for serious use, but rather as a learning excersise
**NOTE:** Currently, the "lower" URL query, used to set a lower bound for random numbers is nonfunctional
# Usage
## GET Requests
### `/int`:
Returns an array of random integers.
#### Parameters:
##### `upper`:
The upper bound for the random integers
default = 100
##### `lower`:
The lower bound for the random integers
default = 1
##### `count`:
The number of random integers to be genrated
##### `seed`:
The seed for the random integers
default =  \[Unix Timestamp\] * 10000
#### Example
`curl http://localhost:8080/int?count=5`<br>
Output:  `[51,35,88,100,24]`

### `/float`:
Returns an array of random floating point numbers
#### Parameters:
See `/int`
#### Example:
`curl http://localhost:8080/float?count=5`<br>
Output: `[8.81151917646639,28.907093609683216,82.07833708892576,90.28753606998362,94.77088812668808]`
