// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
const axios = require('axios')


function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [error,setError] = useState("");
  

 

  const handleSubmit = (event) =>{
    event.preventDefault();

    if ((name.trim().length !== 0) && (number.trim().length !== 0) && (email.trim().length !== 0) ) {

            axios.post('https://userdetails.free.beeceptor.com/useradd', {
            
              name: `${name}`,
              email: `${email}`,
              number: `${number}` 
              
          
          }).then(function (response) {
            
            console.log(response.data.status);
            let requiredResponse = response.data.status;
            alert(`${requiredResponse}`)

              setName("") ;
              setEmail("");
              setNumber("");        
          })

      
    } else {
      alert(`Please provide required value!!!`)
    }

      //  axios.post('https://userdetails.free.beeceptor.com/useradd', {
        
      //     name: `${name}`,
      //     email: `${email}`,
      //     number: `${number}` 
           
       
      // }).then(function (response) {
        
      //   console.log(response.data.status);
      //   let requiredResponse = response.data.status;
      //   alert(`${requiredResponse}`)

      //     setName("") ;
      //     setEmail("");
      //     setNumber("");        
      // })

      
    
    }

    const handleBlur = (e) =>{
      if (e.target.value === ""){
        setError("the field must not be empty")
      }else{
        setError("");
      }
    }

  

  return (
    <div className='form-box'>
      <form name='myForm' onSubmit={handleSubmit}>
          <div className = "field1">
          <label> <h1>User Info</h1></label>
          
            <label >Name:
              <input
                type="text"
                className='form-input'
                value={name}
                onChange = {(e) => setName(e.target.value) }
                onBlur = {handleBlur}
              />
              
            </label>
            <br/>
            <label>Email:
              <input
                type="text"
                className='form-input'
                value={email}
                onChange = {(e) => setEmail(e.target.value) }
              />
            </label>
            <br/>
            <label>PhoneNumber:
              <input
                type="number"
                className='form-input'
                value={number}
                onChange = {(e) => setNumber(e.target.value) }
              />
            </label>
            <br/>
            
            {/* <input type="submit"/> */}
            
            <button 
                type = "submit"
                id= "submitBtn"
                className = "submitBtn"
            > submit</button>

          </div>
      </form>
    </div>
    
  );
}

export default App;
