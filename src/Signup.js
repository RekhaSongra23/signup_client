// import  { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(username, email, password);
//     axios.post("http://localhost:8000/signup", {
//         username: username,
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         console.log(res);
//         alert("data submitted");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <>
//       <h3>SIGNUP</h3>
//       <form onSubmit={handleSubmit}>
//         <p>Username</p>
//         <input
//           required
//           value={username}
//           type="text"
//           onChange={(e) => {
//             setUsername(e.target.value);
            
//           }}
//         />
//         <p>Email</p>
//         <input
//           required=""
//           value={email}
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
            
//           }}
//         />
//         <p>Password</p>
//         <input
//           required
//           value={password}
//           type="password"
//           onChange={(e) => {
//             setPassword(e.target.value);
           
//           }}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Signup;
