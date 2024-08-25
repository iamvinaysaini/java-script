const Happn ={
ID  : "mr_Vinaysaini",
fullname:{
    firstname: "vinay",
    lastname: "saini"

},
Loc :"noida"
}
const tinderUser={}
tinderUser.ID="skponpurpose"
tinderUser.Loc="Dehradun"
// console.log(tinderUser)
// console.log(Happn?.fullname.lastname)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//three types of object add methods
const obj3={...obj1, ...obj2}
const obj4= Object.assign({},obj1,obj2)
// console.log(obj3)
// console.log(obj4)
//const wese = console.log({obj1,obj2})

//object inside of an Array
const user1=[
    {
        email:"mr_vinaysaini",
        ID:1
    },
    {
        email:"mr_vinaysaini",
        ID:2
    },
    {
        email:"mr_vinaysaini",
        ID:3
    },
    {
        email:"mr_vinaysaini",
        ID:4
    }
]
// console.log(user1[0].ID)
// console.log(user1[1].ID)
// console.log(user1[2].ID)
// console.log(user1[3].ID)
// console.log(Object.keys(Happn))
// console.log(Happn)
// // console.log(tinderUser)
// // console.log(Object.values(tinderUser))
// const happnfull=console.log(Object.entries(Happn))
// console.log(typeof Happn)
// console.log(tinderUser.hasOwnProperty('firstname'))
// console.log(Happn.hasOwnProperty('fullname'))

//destructring
const destr={
    course:"JS by SKP",
    Price:999,
    InstructerCourse:"SKP"
}
//console.log(destr)

//three ways to call properties of an object
const {InstructerCourse}= destr
// console.log(destr['InstructerCourse'])
// console.log(destr.InstructerCourse)
// console.log(InstructerCourse)
//This is called destructring an object.
const {InstructerCourse:Instructor}= destr
console.log(Instructor)




