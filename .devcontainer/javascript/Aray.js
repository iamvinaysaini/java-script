const sy= Symbol("key1")
const JsUser={
    name:"Ironman",
    power:"money",
    [sy]: 1,
    age: 20,
    competitor:"hulkbuster",
}
// console.log(JsUser.age)
// console.log(JsUser["age"])
//JsUser.age=40
//Object.freeze(JsUser)
//JsUser.age=50
//console.log(JsUser["age"])
// console.log(JsUser)
// console.log(typeof JsUser[sy])
JsUser.greeting = function(){
    console.log("Hello JS")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS, ${this.competitor}`)
}
JsUser.greeting()
JsUser.greetingTwo()

// function tarika(ID){
//     console.log("Hello JS "+ID+" is this")
// }
// //tarika(14521)
//  console.log(tarika(14521))