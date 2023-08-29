import { useState } from "react";
function UserRegistration(){
    const [name ,setName] = useState('')
    function handleChangeName(event){
        setName(event.target.value)
    }
    const [email , setEmail] = useState('')
    function handleChangeEmail(event){
        setEmail(event.target.value)
    }
    const [password , setPassword] = useState('')
    function handleChangePassword(event){
        setPassword(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        
       if(name.length > 0 && password.length > 0 && email.length > 0){
        const submittedData = {
            username:name,
            email:email,
            password:password
        }
        fetch('http://localhost:8001/user-data',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(submittedData)
            
        })
        setName('')
        setEmail('')
        setPassword('')
        alert("Registration details submitted")
       }else{
        alert('Enter registration details')
       }
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="usename" value = {name} onChange={handleChangeName} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleChangeEmail} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={handleChangePassword} />
        </label>
        <button id='btn' type="submit">Register</button>
      </form>
    )
}
export default UserRegistration;