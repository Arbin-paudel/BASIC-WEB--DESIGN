// // let tit = document.querySelectorAll('.title')
// // tit.forEach(til=>{
// //     til.textContent='done'
// //     til.style.backgroundColor = 'red'
// // })

// // let el = document.querySelectorAll('.box');
// // el.forEach(box=>{
// //     box.classList.troggle('big');
// // })
// // console.log(el)

// // let btn=document.getElementById('button-1');
// //  btn.addEventListener ('click',function(click){
// // let el = document.querySelectorAll('.box');
// // el.forEach(box=>{
// //     box.classList.toggle('big')
// // });})


// // let btn = document.getElementById('button-1');
// // btn.addEventListener('click' , function(click){
// // let el = document.querySelectorAll('.box');
// // el.forEach(box=>{
// //     box.style.color = 'red'
// //     box.textContent = 'hello world'
// // })
// // })
// // let btn2 = document.getElementById('button-2');
// // btn2.addEventListener('click',function(click){
// // let el1=document.querySelectorAll('.box');
// // el1.forEach(big=>{
// //     big.classList.toggle('big');
// // })
// // })

// // let btn = document.getElementById('button-1');
// // btn.addEventListener('click',function(click){
// //     let boxes = document.querySelectorAll('.box');
// //     boxes.forEach(box=>{
// //         box.textContent = 'HEY'
// //         box.style.color = 'red'
// //     })
// // })
// // let btn1 = document.getElementById('button-2');
// // btn1.addEventListener('click',function(click){
// //     let changeClass = document.querySelectorAll('.box');
// //     changeClass.forEach(big=>{
// //         big.classList.toggle('big');
// //     })
// // })
// // let btn2 = document.getElementById('button-3');
// // btn2.addEventListener('click',function(click){
// //     let box = document.createElement('div');
// //     box.classList.add('box');
// //     box.textContent = 'newbox'
// //     document.getElementById('container').appendChild(box)
        
// //     })

// let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     let r= Math.floor(Math.random() * 256);
//     let g= Math.floor(Math.random() * 256);
//     let  b= Math.floor(Math.random() * 256);

//     document.body.style.background = `rgb(${r}, ${g}, ${b})`;
// });

// let input = document.getElementById('inputBox');
// let output = document.getElementById('output');
// input.addEventListener('input',function(){
//     output.textContent = input.value;
// });

// let input = document.getElementById('inputBox');
// let output = document.getElementById('output');
// input.addEventListener('input',function(){
//     if(input.value === ''){
//         output.textContent='type something';
//     } else{
//         output.textContent = input.value ; 
//     }
// }); 
/* let btn1 = document.getElementById('bn-1');
let btn2 = document.getElementById('bn-2');
let btn3 = document.getElementById('bn-3');
let btn4 = document.getElementById('bn-4');
let btn5 = document.getElementById('bn-5');
let input = document.getElementById('inputBox');
let output = document.getElementById('output'); 
btn1.addEventListener('click',function(){
    if(input.value===''){
        output.textContent = 'TYPE SOMETHING';
    }else{
    output.textContent = input.value;}
})
btn2.addEventListener('click',function (){
  let Utext = input.value;
  let upper = Utext.toUpperCase();
  output.textContent = upper;
  
    });
btn3.addEventListener('click',function(){
    let Ltext = input.value;
    let lower = Ltext.toLowerCase();
    output.textContent = lower;
})
btn4.addEventListener('click',function(){
    let clear = input.value;
    if(clear === input.value){
        output.textContent = '';
    }
})
btn5.addEventListener('click',function(){
    let lengths = input.value;
    output.textContent = lengths.length;
});
*/

// let input = document.getElementById('inputBox');
// let output = document.getElementById('output');
// let btn = document.getElementById('bn-1');
// btn.addEventListener('click',function(){
//     let value = input.value;
//     output.textContent = value.toUpperCase();
// });

// const form = document.getElementById('secureForm');
// const usernameBox = document.getElementById('username');
// const passwordBox = document.getElementById('password');
// const DisplayMsg = document.getElementById('msg');
// passwordBox.addEventListener('input',function(e){
//    let storeValue = e.target.value;
//    if(storeValue.length === 0){
//     DisplayMsg.textContent = '';
//    } else if (storeValue.length<6){
//     DisplayMsg.textContent = 'TO SHORT TEXT (weak)'
//     DisplayMsg.style.color = 'red'
//    }else if (storeValue.match (/[0-9]/)&& storeValue.match(/[A-Z]/)){
//     DisplayMsg.textContent='strong password'
//     DisplayMsg.style.color = 'green'
//    } else{
//     DisplayMsg.textContent ='TRY using capital and number together'
//     DisplayMsg.style.color = 'pink'

//    }
// })
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     let valueOfUsername = usernameBox.value;
//     let valueOfpassword = passwordBox.value;
//     if( valueOfpassword.length>6 && valueOfpassword.match(/[0-9]/)&& valueOfpassword.match(/[A-Z]/)){
//         alert(`Sucessfully regestered MR ${valueOfUsername } `);
//     }else{
//         DisplayMsg.textContent = 'CANT SUMBIT , YOUR PASSWORD IS TOO WEAK'
//         DisplayMsg.style.color = 'red'
//     }
    
// })
let UsernameContainer= document.getElementById('username');
let signUp = document.getElementById('signupForm');
let emailContainer = document.getElementById('email');
let passwordContainer = document.getElementById('password');
let BtnShowPass = document.getElementById('togglePass');
let passwordConform = document.getElementById('confirmPassword');
let ShowMsg = document.getElementById('message');
passwordContainer.addEventListener('input',function(e){
    let storeValue = e.target.value;
    if (storeValue.length === 0){
        ShowMsg.textContent='';
    }
    else if(storeValue.length<6){
        ShowMsg.textContent = 'THE PASSWORD IS TO SHORT';
        ShowMsg.style.color = 'red';
    }else if (storeValue.match(/[0-9]/)&& storeValue.match(/[A-Z]/)){
        ShowMsg.textContent = 'Strong Password';
        ShowMsg.style.color = 'green';
    }else{
        ShowMsg.textContent = 'Use number and cpaital letter combo'
        ShowMsg.style.color='blue';
    }
});
passwordConform.addEventListener('input',function(conform){
    let MatchPass = conform.target.value;
    let storeValue = passwordContainer.value;   
    if(MatchPass===storeValue){
        ShowMsg.textContent = ' Password Match ';
        ShowMsg.style.color = 'green'
    }else{
        ShowMsg.textContent = 'Password Mismatch'
        ShowMsg.style.color = 'red';
    }
});  
BtnShowPass.addEventListener('click',function(click){
    if(passwordContainer.type === 'password'){
        passwordContainer.type = 'text'
        BtnShowPass.textContent='hide'
    }else{
        passwordContainer.type = 'password'
        BtnShowPass.textContent='show'
    }
    if(passwordConform.type === 'password'){
        passwordConform.type = 'text'
        BtnShowPass.textContent='hide'
    }else{
        passwordConform.type = 'password'
        BtnShowPass.textContent='show'
    }
})  
emailContainer.addEventListener('input',function(email){
    let EmailCon = email.target.value;
    if(EmailCon.length===0){
        ShowMsg.textContent = ''
    }
    else if(EmailCon.match(/[@]/)){
        ShowMsg.textContent = 'Valid'
    }else{
        ShowMsg.textContent = 'Invalid Email Address'
        ShowMsg.style.color = 'red';
    }
})
UsernameContainer.addEventListener('input',function(username){
    let ContainUsername = username.target.value
    if(ContainUsername.length===0){
        ShowMsg.textContent =''
    }else if(ContainUsername.length<3){
        ShowMsg.textContent = 'Username Should be 3 letter or more'
        ShowMsg.style.color = 'red'
    } else{
        ShowMsg.textContent = ''
    }

});
signUp.addEventListener('submit', function(e){
    e.preventDefault();

    let email = emailContainer.value;
    let pass1 = passwordContainer.value;
    let pass2 = passwordConform.value;

    if(email === ""){
        ShowMsg.textContent = "Email cannot be empty";
        return;
    }

    if(!email.includes("@")){
        ShowMsg.textContent = "Invalid email";
        return;
    }

    if(pass1.length < 6){
        ShowMsg.textContent = "Password too short";
        return;
    }

    if(pass1 !== pass2){
        ShowMsg.textContent = "Passwords do not match";
        return;
    }

    ShowMsg.textContent = "Successfully submitted!";
});





