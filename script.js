// let empty = [];


// let ml = document.getElementsByClassName('movielist')
// let addbtn = document.getElementsByClassName('add')
// let rmbtn = document.getElementsByClassName('rm')

// let srh = document.getElementsByClassName('search')
// let srhbtn = document.getElementsByClassName('sbtn')

// let show = document.getElementsByClassName('showingm')
// let total = document.getElementsByClassName('totalm');

// let hid = document.getElementsByClassName('.hid');
// let last = document.getElementsByClassName('.inner');

// let counter = 0

// function movie(){
//     counter +=1;
//     return `${Date.now().toString(36)}-${counter}`

// }
// const convert = (c)=>{
//     c.trim().toLowerCase();

// }

// function again (mesege ,isError= false){
//     hid.textContent = mesege;
//     hid.ClassList.toggle('error' ,isError);
//     if(mesege){
//         hid.ClassList.add('fade-in');
//         setTimeout(() => hid.ClassList.remove('fade-in'),100)
//     }
// }

 


// const getel = (term) => {
//     term ? empty.filter(ob => convert(ob.prop).include(convert(term))):[...empty]
// }




// const nw = ()=>{
//     const ge = document.querySelector('#h1').innerText='new faiqa'
//     document.querySelector('#h1').style.color = 'green'
    
// }

// const set =setTimeout(nw,2000)

// const af = ()=>{
//     document.querySelector('#btn'),addEventListener('click',function(){
//        clearTimeout(set)
//         console.log('stopped name');
//         document.querySelector('#h1').style.color='red'
        
//     })
// }
// af()



// function randomcolor(){
//     const hex ='0123456789ABCDEF'
//     let hash = '#';
//     for(let i=0;i<6;i++){
//         hash += hex[Math.floor(Math.random()*16)]
//     }
//     return hash
// }


// // function color(){
// //     document.body.style.backgroundColor = randomcolor()
// // }

// // document.querySelector('#change').addEventListener('click',color)
  

// const faiqa = function (){
//     const hex = '0123456789ABCDEF'
//     let hash = '#'
//     for(let i=0;i<6;i++){
//         hash += hex[Math.floor(Math.random()*16)]
//     }
//     return hash;
// }
// console.log(faiqa());


// const change = ()=>{

//     ud = setInterval(cc,1000)
//     function cc (){

//      document.body.style.backgroundColor = faiqa()
//     }
   
// }
// function not(){

//     clearInterval(ud)
//     ud = null;
// }
// document.querySelector('#change').addEventListener('click',change)


// document.querySelector('#not').addEventListener('click',not)


// document.querySelector.length

let ary =[]

const movinp=document.querySelector('#movie-inp')
const movadd=document.querySelector('#add')
const remove = document.querySelector('#remove')
const clear= document.querySelector('#clear-inp')
const reset =document.querySelector('#reset')

const total = document.querySelector('#total')
const show = document.querySelector('#showing')
const hiden = document.querySelector('.hid')

//. counter

let counter =0;
const addata =()=>{
    counter +=1;
    return `${Date.now().toString(36)}-${counter}`
}

let convert =(pram)=>{
    pram.trim().toLowerCase();
}


function msg(mesge,isError=false){
    hiden.textContent=msg
    hiden.classList.toggle('error',isError)
    if(mesge){
        hiden.classList.add('fade-in')
        setTimeout(()=>{
            hiden.classList.remove('fade-in')
        },1000)
    }
}


const filtermovies = (val)=>{
    val? movies.filter(n => rslt(n.title)).include(rslt(val)):[...movies]
}