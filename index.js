// // Import export exercise
// import { greet } from './ninjas.js'
// // import { ninjas } from './ninjas.js'
// import abc from './ninjas.js'



// // // Destructuring exercise
// // const person = {
// //   firstName: 'yoshi',
// //   age: 30,
// //   favColor: 'green'
// // }

// // // const firstName = person.firstName
// // // const favColor = person.favColor

// // // We can do it like
// // const { firstName, favColor, age  } = person
// // console.log(firstName, favColor, age)


// // const nums = [7, 9, 3, 5, 2]
// // const [a, b, c] = nums
// // console.log(a, b, c)




// // const getCalculations = (a, b) => {

// //   // return {
// //   //   sum: a + b,
// //   //   diff: Math.abs(a - b),
// //   //   product: a * b,
// //   // }
// //   // const { sum, product, diff} = getCalculations(7,9)

// //   return [
// //     a + b,
// //     Math.abs(a - b),
// //     a * b
// //   ]
// // }

// // const [ sum, diff, product ] = getCalculations(7, 9)
// // console.log(sum, product, diff)


// // const doSomething = ({ name }) => {
// //   console.log(name)
// // }
// // doSomething({ name: 'shaun', age: 35 })


// console.log(abc)
// greet()



// FILTER AND MAP

// const ninjas = [
//   { name: 'shaun', belt: 'black' },
//   { name: 'mario', belt: 'orange' },
//   { name: 'yoshi', belt: 'black' },
//   { name: 'luigi', belt: 'green' }
// ]

// // filter method
//   const blackBelts = ninjas.filter((ninja) => {
//     return ninja.belt == 'black'
//   })
//   console.log(blackBelts)


// // map method
// const names = ninjas.map((ninja) => {
//   return ninja.name
// })

// console.log(names)


// // SPREAD SYNTAX
// const ninjas = ['shaun', 'mario', 'peach']
// const blog =  { title: 'new blog', author: 'bowser'}

// // console.log(...ninjas)

// const idBlog = {...blog}
// // const idBlog = {...blog, id: 1}
// console.log(idBlog)

// TEMPLATE STRINGS
const name = 'shaun'
const job = 'developer'


const string = `Hi I am ${name}, and my job is ${job}`
console.log(string)
