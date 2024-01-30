// import  { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log(username, email, password);
//     axios.post("http://localhost:8000/Login", {
//         username: username,
//         password: password,
//       })
//       .then((res) => {
//         console.log(res);
//         alert("you are logged");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         setUsername=""
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         setPassword=""
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };
// export default Login;
