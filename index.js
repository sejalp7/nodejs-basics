// // Promise.race
// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'second')
//   })
  
//   Promise.race([first, second]).then(result => {
//     console.log(result) // second
//   })

// Asyn/Await
const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 0)
    })
  }
  
  const doSomething = async () => {
    console.log(await doSomethingAsync())
  }
  
  console.log('Before')
  doSomething()
  console.log('After')