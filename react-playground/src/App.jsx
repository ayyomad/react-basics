// import MovieCard from "./MovieCard";
// import ProfileCard from "./ProfileCard";
// function App() {
//   return (
//     <div>
//       <h1>Movie App</h1>

//       <MovieCard
//         title="Interstellar"
//         rating={9}
//       />

//       <MovieCard
//         title="Inception"
//         rating={8.8}
//       />

//       <MovieCard
//         title="The Dark Knight"
//         rating={9.1}
//       />
//       <h1>Student Profile</h1>
//       <ProfileCard
//         name="Madhav"
//         course="CS Engineering"
//       />

//       <ProfileCard
//         name="Alex"
//         course="Mechanical"
//       />
//     </div>
//   );
// }



// function App() {
//   const [count, setCount] = useState(100);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };



//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={increase}>
//         +
//       </button> 

//       <button onClick={decrease}>
//         -
//       </button>

//       <button onClick={reset}>
//         Reset
//       </button>
//     </div>
//   );
// }

// function App() {
//   const [username, setUsername] = useState("");

//   return (
//     <div>
//       <h1>Login</h1>

//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(event) => {
//           setUsername(event.target.value);
//         }}
//       />

//       <p>You typed: {username}</p>
//     </div>
//   );
// }



// function App(){
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Username: ', username);
//     console.log('Password: ', password);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Username:
//         <input type="text" value={username} 
//         onChange={(e)=> setUsername(e.target.value)}/>
//         </label> <br /><br />

//         <label>Password: 
//           <input type="password" value={password}
//           onChange={(e)=> setPassword(e.target.value)}/>
//         </label>
//         <br></br>
//         <button type="submit">Login</button>

//       </form>
//     </div>
//   );
  
// }

// import { useState } from "react";

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <div>
//       <h1>{loggedIn ? "Welcome!" : "Please Login"}</h1>

//       <button onClick={() => setLoggedIn(!loggedIn)}>
//         {loggedIn ? "Logout" : "Login"}
//       </button>
//       <p>{loggedIn ? "Access granted": "Access Denied"}</p>
//     </div>
    
//   );
// }


// import MovieCard from "./MovieCard";

// function App() {
//   const movies = [
//     {
//       id: 1,
//       title: "Interstellar",
//       rating: 9,
//     },
//     {
//       id: 2,
//       title: "Inception",
//       rating: 8.8,
//     },
//     {
//       id: 3,
//       title: "The Dark Knight",
//       rating: 9.1,
//     },
//     {
//       id: 4,
//       title: "2018",
//       rating: 9.5,
//     },
//   ];

//   return (
//     <div>
//       <h1>Movies</h1>

//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.id}
//           title={movie.title}
//           rating={movie.rating}
//         />
//       ))}
//     </div>
//   );
// }


import { useEffect } from "react";


function App() {  

    useEffect(() => {
        console.log("rendered");
    }, []);

    return (
        <h1>Hello React</h1>
    );
}


export default App;