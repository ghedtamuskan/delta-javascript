//Part 11 
//Call stack (Visualising the Call Stack)  

function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
  console.log(ans);
}

three()

//JS is single threaded
//one code at a time 
let a = 25;
console.log(a)
let b = 10;
console.log(b)

console.log(a+b)

// // Set timeout (Asynchronous nature)  to deal with single threaded nature
// setTimeout (function(){
//     console.log(" hello musu")
// },2000);
// setTimeout (function(){
//     console.log(" hey muski")
// },2000);        // can execute both at a one time because browser is not single thread
//  //js passes it to browser and browser hold the given setTimeout and pass to call stack when done and js execute imediately..
// console.log("hello")


//callback hell Example
function  savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed >4 ){
        success()
        } else {
    failure();
}
}
//callback hell exists here following demo
  savetoDb("apna college" ,()=> {     //  1st callback

    console.log(" success: your data was saved" ) //2nd callback

    savetoDb("hello world",()=>{    //2nd success callback
        console.log("success2 : data2 saved")

        savetoDb ("muskan ghedta",()=>{              //nesting 3rd success callback
            console.log("success3:data3 saved")

        },()=>{ console.log("failure3: weak connection")})
    }, 
    ()=>{                                         //nesting
        console.log("failure2: weak connection")
    })  
},     //if data was saved then this will run otherwise ..following one
()=>{ console.log (" failure : weak connection. data not saved")  //3rd callback
})

// //Promises
// //how to prevent from callback hell using promises

// function  savetoDb(data){
//  return new Promise((resolve,reject)=>{             //resolve & reject
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed >4){
//        resolve("success:data was saved")            //success & failure 
//     }else{reject("failure : data was not saved");
//     }
//  })
// }
// // //then and catch methods in promises
//  savetoDb ("apna  college ")   
//   .then((result)=>{                      //passing argument(result) inside then
//     console.log( " data1 saved")
//     console.log("result of promise:", result);
//     return savetoDb("helloworld")        //improved version of promises
//    })
//    .then((result)=>{                        //Promise chaining 
//     console.log("data2 saved")
//     console.log("result of promise:",result)
//     return savetoDb ("muskanghedta")
// })
// .then ((result )=>{
//     console.log("data3 saved")
//     console.log("result of promise:",result)
// })
// .catch((error)=>{
//    console.log("deta rejected")
//    console.log("error of promise:",error) 

// })           //same code and work same which we write before where callback hell exists but more convinient

//promises another example
h1 = document.querySelector("h1");

function changeColor(color,delay ){
  return new Promise((resolve, reject)=> {   
    setTimeout(() => {
  h1.style.color = color
    resolve("color changed")
},delay);
});
}

// changeColor("red", 1000 )
// .then(()=>{
//     console.log("red color was completed ");
//     return changeColor("orange",1000)
// })
// .then(()=>{
//     console.log("orange color was completed") 
//     return changeColor("green",1000)               //promise chaining
// })
// .then(()=>{
//     console.log("green color was completed")
//     return changeColor("blue",1000)
// })
// .then(()=>{
//     console.log("blue color was completed")
//     return changeColor("yellow",1000)
// })

// minimize before code using await & async keyword
async function demoo (){
     await changeColor("red",1000)
      await changeColor("blue",1000)
     await changeColor("orange",1000)
     await changeColor("green",1000)
    changeColor("brown",1000)
}
console.log(demoo())

//PART 12 
//ASYNC FUNCTIONS
//Async keyword => Creates an async functions
//  async function greet (){
//     // throw "some random error"
//     return "hello world"         //returns a promise
// }
// greet()
// .then ((result)=>{
//     console.log("promise was resolved")
//     console.log("result was:",result)       //now using then and catch methods 
// })
// .catch((err)=>{
//     console.log("promise was rejected with err:",err)
// })

// let demo = async  ()=>{
//     return 5                 //Async function using arrow
// }

//Await keyword
// function getNum(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1
//         if (num<3){
//             reject("promise rejected ")
//         }
//       console.log(num)
//       resolve()
//     },1000)
// })
// }
  async function demo (){
    try{                      //using try  and catch to handle rejection
     await getNum()
    await getNum()
    await getNum()
    await getNum()
    getNum()
} catch(err){
console.log("error found")
console.log(err)
}
// console.log(demo())
  
  let x=56;
  console.log(x)
  console.log(x+2)

}
console.log(demo())

//API => APPLICATION PROGRAM INTERFACE 
 
//JSON => to access our data we have function like following
//JSON.parse
let jsonRes ='{"activity":"Learn woodworking","type":"diy","participants":1,"price":0.3,"link":"","key":"9216391","accessibility":0.3}'

let validRes = JSON.parse(jsonRes);
console.log(validRes.activity);

//JSON.stringify

let student ={
  name:"muskan ",
  marks :76
}
console.log (JSON.stringify(student))

//Our first API request

// let url = "https://catfact.ninja/fact";

// fetch (url)
// .then ((res)=>{
//  //  console.log(res.json)              data become redable
// // console.log(res.json().then((data)=>{   //to access data
// //     console.log(data)
// //   }))
// //2nd method for more compact

// return res.json()
// })
// .then((data)=>{
//   console.log("data1=",data.fact)
// return fetch(url);          //2nd request using chaining
// })
// .then((res)=>{
//   return res.json();
// })
// .then((data2)=>{
//   console.log("data2=",data2)
// })
// .catch((err)=>{
//   console.log("ERROR-",err)
// })


//Using fetch with async and await

// let urll = "https://www.boredapi.com/api/activity"
//  async function getActivity(){
//   try{
//   let response =  await fetch(urll)
//   let data = await response.json()
//   console.log(data.activity)
// }catch(e){
//   console.log("error-",e)
// }
// }
// console.log(getActivity())

//PART 13
//Using axios  //compact and better way to send http requests = cdn link copy and include in html 

// let btn = document.querySelector("button")
// btn.addEventListener("click",async()=>{   //when button is clicked async callback will run
//    let fact =  await Activity()
//   //  console.log(fact)
//    let p = document.querySelector("#result")
//    p.innerText= fact
// })

// let urrl =  "https://catfact.ninja/fact";
// let url2 =" https://dog.ceo/api/breeds/image/random"
// fetch (urrl)
// async function Activity(){
//   try{
//   let res =  await axios.get(urrl)       // api callback using axios
// return res.data.fact           //to return result data and fact
// }catch(e){
//   console.log("error-",e)
//   return "NO activity found"
// }
  

//Dog image using axios

// let btn = document.querySelector("button")
// let url2 =" https://dog.ceo/api/breeds/image/random"
// btn.addEventListener("click",async()=>{   //when button is clicked async callback will run
// let link = await getImage()
// // console.log(link)
// let img= document.querySelector("#result")
// img.setAttribute( "src", link)
// })

async function getImage(){
  try{
  let res =  await axios.get(url2)       // api callback
return res.data.message          //to return result data and fact
}catch(e){
  console.log("error-",e)
  return "NO image found"
}
}

// Sending headers using axios
const urll = "https://icanhazdadjoke.com/"

async function getJokes (){
  try{
    const config = {headers :{
      Accept : "application/json"    //sending headers using axios request
    }}
    let res = await axios.get(urll,config)
    console.log(res.data)
  }catch (err){
    console.log(err)
  }
}

//Updating query string using axios

let url = "http://universities.hipolabs.com/search?name="
let butn = document.querySelector("button")

butn.addEventListener("click",async()=>{
  let country = document.querySelector("input").value
  console.log(country)
   let colArr = await getColleges(country)  //college array
   console.log(colArr)
   show(colArr)       //new array
})

function  show(colArr){        //new function to show  direct college name 
  let list = document.querySelector("#list")  //access list
  list.innerText=""
  for (col of colArr){
    console.log(col.name)

    let li= document.createElement ("li")   //creating list item
    li.innerText = col.name;
    list.appendChild(li)  
  }
}

async function getColleges(country){
  try{
     let res = await axios.get(url+country)  //Api call and adding query string
    return  res.data
  }catch (e){
    console.log ("error",e)
    return[]                 //if error comes than return empty array
  }
}











