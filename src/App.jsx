import { useState, useEffect } from 'react'


function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [otp, setOTP] = useState('');
  const [data, setData] = useState('');

  function cregister() {
    const result = {username, email, password, cpassword,otp};
    if (password != cpassword) alert("Username or Password invalid and Registration Unsuccessfull") ;
    if (password != cpassword) return;
    if (password.length < 8) alert("Password Doesn't minimum length and Registration Unsuccessfull");
    if (password.length < 8) return;
    setData(result);
  }
  function verifyotp() {
    alert("OTP Verified");
    alert("Registration Completed!!");
  }

  return (
    <div>
      <h1>Registration Form</h1>
      <br></br>
      UserName : <input type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
      <br></br>
      Email: <input type='text' placeholder='Email: test@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br>
      <br></br>
      Password : <input type='text' placeholder='Enter more than 8 character' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br>
      <br></br>
      Confirm Password : <input type='text' placeholder='Confirm Password' value={cpassword} onChange={(e) => setCPassword(e.target.value)}></input><br></br>
      <br></br>
      <button onClick={cregister}>Submit</button>
      
      

      {data && (
        <>
        <h3>{username}</h3>
        <h3>{email}</h3>
        <h3>Registered Sucessfully!: {password}</h3>
        <h3>Generated OTP: {password + 100}</h3>
        <input placeholder='Enter OTP'></input>
        <button onClick={verifyotp}>Submit OTP</button>
        </>
      )
      }
      
    </div>
  );

}

export default App;