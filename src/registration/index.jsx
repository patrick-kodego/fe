import {RegisterAPI} from '../Utils/fetch';
function Register() {

    let isUserLoggedIn = false;
    try{
        isUserLoggedIn = JSON.parse(localStorage.getItem('user'))
        if(isUserLoggedIn && isUserLoggedIn.id){
            window.location.href = 'http://localhost:3000/'
        }
    }catch(error){
    }
    
    const register = ()=>{
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const fullName = document.getElementById('fullName').value
        const email = document.getElementById('email').value
        RegisterAPI(username, password, fullName, email)
        .then((result)=>{
            return result.json()
        })
        .then((result)=>{
            console.log('result: ', result)
            console.log('localStorage: ', localStorage)
            if(result.success){
                //go to dashboard / home
                // localStorage.setItem('user', JSON.stringify(result.userData)) // put back if you want to automatically login
                window.location.href = 'http://localhost:3000/login' // change to http://localhost:3000/ if you want to automatically login
            }else{
                // alert user that credentials is invalid
            }
        })
        .catch(error=>{
            console.log('error: ', error)
        })
    }
    return (
        !isUserLoggedIn ?
        <>
           <div>
              <h1>Please Register now</h1>
              <input style={{color: 'red'}} type="text" id="username" placeholder="username" />
              <br />
              <input style={{color: 'red'}} type="password" id="password" placeholder="password" />
              <br />
              <input style={{color: 'red'}} type="text" id="fullName" placeholder="full name" />
              <br />
              <input style={{color: 'red'}} type="email" id="email" placeholder="email" />
              <br />
              <button onClick={register}>Register</button>
           </div>
        </>
        :
        <></>
    );
}

export default Register;