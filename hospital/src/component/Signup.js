// // // Signup.js
// // import React, { useEffect, useState } from 'react';
// // import '../styles/Signup.css';
// // import { FaRegUserCircle } from 'react-icons/fa';
// // import { MdEmail } from 'react-icons/md';
// // import { RiLockPasswordFill } from 'react-icons/ri';
// // // import axios from 'axios';   

// // export default function Signup() { 
// //   const [data, setData] = useState([]);
// //   // useEffect(() => {
// //   //   axios.get('http://localhost:3000/')
// //   //   .then(res => setSome(res.data))
// //   //   .catch(err => console.log(err)); 
// //   // }, [])
// //   // console.log(some);

// //   // useEffect(() => {
// //   //   const fetchData = async () => {
// //   //     const result = await fetch('http://localhost:3000/register');
// //   //     const jsonResult = await result.json();

// //   //     setData(jsonResult);
// //   //   }

// //   //   fetchData();
// //   // }, []);


// //   const [action, setAction] = useState('Login');
// //   const [email, setEmail] = useState('Email');
// //   const [password, setPassword] = useState('Password');
// //   const [username, setUsername] = useState('Username');
// //   const [errorMessage, setErrorMessage] = useState('');
  
// //   // <div>
// //   //   <div>
// //   //     <table>
// //   //       <thead>
// //   //         <tr>
// //   //           <th>name</th>
// //   //           <th>email</th>
// //   //           <th>some</th>
// //   //           <th>some</th>
// //   //           <th>date</th>
// //   //         </tr>
// //   //         </thead>
// //   //         <tbody>
// //   //           {some.map((login, index) => {
// //   //             return <tr key ={index}>
// //   //               <td>{login.slno}</td>
// //   //               <td>{login.username}</td>
// //   //               <td>{login.email}</td>
// //   //               <td>{login.date}</td>
// //   //             </tr>
// //   //           })}
// //   //         </tbody>
// //   //     </table>
// //   //   </div>
// //   // </div>


// //   // console.log(data);
// // // {data.map(login => 
// // //   <div key = {login.id}>
// // //     <h1>
// // //       {login.username}
// // //     </h1>

// // //   </div>  
// // // )}

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:3002/api/signup', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           email,
// //           password,
// //           username, // Include username for signup
// //         }),
// //       });

// //       if (response.ok) {
// //         // Handle successful signup/login (e.g., redirect, set authentication state)
// //         console.log('User signed up/logged in successfully!');
// //       } else {
// //         const errorData = await response.json();
// //         setErrorMessage(errorData.message);
// //       }
// //     } catch (error) {
// //       console.error('Error during signup/login:', error);
// //       setErrorMessage('An error occurred, please try again.');
// //     }
// //   };

// //   return (
// //     <div className="signup-container"> {/* Updated class name */}
// //       <div className="header">
// //         <div className="text">{action}</div>
// //         <div className="underline"></div>
// //       </div>
// //       <div className="inputs">
// //         {action === 'Login' ? (
// //           <div></div>
// //         ) : (
// //           <div className="input">
// //             <FaRegUserCircle />
// //             <input type="text" placeholder={username} />
// //           </div>
// //         )}
// //         <div className="input">
// //           <MdEmail />
// //           <input type="email" placeholder={email} />
// //         </div>
// //         <div className="input">
// //           <RiLockPasswordFill />
// //           <input type="password" placeholder={password} />
// //         </div>
// //         {action === 'Sign Up' ? (
// //           <div></div>
// //         ) : ( 
// //           <div className="forgot-password">
// //             Lost password? <span>Click here</span>
// //           </div>
// //         )}
// //         <div className="submit-container">
// //           <div
// //             className={action === 'Login' ? 'submit gray' : 'submit'}
// //             onClick={() => setAction('Sign Up')}
// //           >
// //             Sign Up
// //           </div>
// //           <div
// //             className={action === 'Sign Up' ? 'submit gray' : 'submit'}
// //             onClick={handleSubmit}
            
// //           >
// //             Login
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // Signup.js
// import React, { useState } from 'react';
// import '../styles/Signup.css';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { RiLockPasswordFill } from 'react-icons/ri';


// export default function Signup() {

//     const [data, setData] = useState([]);

//     const [action, setAction] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [username, setUsername] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:3002/api/signup', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                     username,
//                 }),
//             });

//             if (response.ok) {
//                 // Handle successful signup/login (e.g., redirect, set authentication state)
//                 console.log('User signed up/logged in successfully!');
//             } else {
//                 const errorData = await response.json();
//                 setErrorMessage(errorData.message);
//             }
//         } catch (error) {
//             console.error('Error during signup/login:', error);
//             setErrorMessage('An error occurred, please try again.');
//         }
//     };

//     return (
//         <div className="signup-container"> {/* Updated class name */}
//             <div className="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action === 'Login' ? (
//                     <div></div>
//                 ) : (
//                     <div className="input">
//                         <FaRegUserCircle />
//                         <input type="text" placeholder={username} value={username} onChange={(e) => {
//                             setUsername(e.target.value)
//                         }} />
//                     </div>
//                 )}
//                 <div className="input">
//                     <MdEmail />
//                     <input type="email" placeholder={email} value={email} onChange={(e) => {
//                         setEmail(e.target.value)
//                     }} />
//                 </div>
//                 <div className="input">
//                     <RiLockPasswordFill />
//                     <input type="password" placeholder={password} value={password} onChange={(e) => {
//                         setPassword(e.target.value)
//                     }} />
//                 </div>
//                 {action === 'Sign Up' ? (
//                     <div></div>
//                 ) : (
//                     <div className="forgot-password">
//                         Lost password? <span>Click here</span>
//                     </div>
//                 )}
//                 <div className="submit-container">
//                     <div
//                         className={action === 'Login' ? 'submit gray' : 'submit'}
//                         onClick={() => setAction('Sign Up')}
//                     >
//                         Sign Up
//                     </div>
//                     <div
//                         className={action === 'Sign Up' ? 'submit gray' : 'submit'}
//                         onClick={handleSubmit}

//                     >
//                         Login
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// Signup.js



// import React, { useState } from 'react';
// import '../styles/Signup.css';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';
// import { RiLockPasswordFill } from 'react-icons/ri';


// export default function Signup() {

//     const [data, setData] = useState([]);

//     const [action, setAction] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [username, setUsername] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await fetch('http://localhost:3002/api/signup', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                     username,
//                 })
//             }).then((res)=>{
//                 return res.json()
//             }).then((data)=>{
//                 console.log(data)
//             }).catch((error)=>{
//                 setErrorMessage(error.message);
//             })

//             // if (response.ok) {
//             //     // Handle successful signup/login (e.g., redirect, set authentication state)
//             //     console.log('User signed up/logged in successfully!');
//             // } else {
//             //     const errorData = await response.json();
//             //     setErrorMessage(errorData.message);
//             // }
//         } catch (error) {
//             console.error('Error during signup/login:', error);
//             setErrorMessage('An error occurred, please try again.');
//         }
//     };

//     return (
//         <div className="signup-container"> {/* Updated class name */}
//             <div className="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action === 'Login' ? (
//                     <div></div>
//                 ) : (
//                     <div className="input">
//                         <FaRegUserCircle />
//                         <input type="text" placeholder={username} value={username} onChange={(e) => {
//                             setUsername(e.target.value)
//                         }} />
//                     </div>
//                 )}
//                 <div className="input">
//                     <MdEmail />
//                     <input type="email" placeholder={email} value={email} onChange={(e) => {
//                         setEmail(e.target.value)
//                     }} />
//                 </div>
//                 <div className="input">
//                     <RiLockPasswordFill />
//                     <input type="password" placeholder={password} value={password} onChange={(e) => {
//                         setPassword(e.target.value)
//                     }} />
//                 </div>
//                 {action === 'Sign Up' ? (
//                     <div></div>
//                 ) : (
//                     <div className="forgot-password">
//                         Lost password? <span>Click here</span>
//                     </div>
//                 )}
//                 <div className="submit-container">
//                     <div
//                         className={action === 'Login' ? 'submit gray' : 'submit'}
//                         onClick={() => setAction('Sign Up')}
//                     >
//                         Sign Up
//                     </div>
//                     <div
//                         className={action === 'Sign Up' ? 'submit gray' : 'submit'}
//                         onClick={handleSubmit}

//                     > 
//                         Login
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState } from 'react';
import '../styles/Signup.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [action, setAction] = useState('signup');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3002/api/${action}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password,
                    username,
                })
            });

            if (response.ok) {
                // Handle successful signup/login (e.g., redirect, set authentication state)
                console.log('User signed up/logged in successfully!');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        } catch (error) {
            console.error('Error during signup/login:', error);
            setErrorMessage('An error occurred, please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="header">
                <div className="text">{action === 'signup' ? 'Sign Up' : 'Login'}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'signup' && (
                    <div className="input">
                        <FaRegUserCircle />
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                )}
                <div className="input">
                    <MdEmail />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <RiLockPasswordFill />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="submit-container">

                    <div className={action === 'signup' ? 'submit' : 'submit gray'} onClick={(e) => action === 'signup' ? handleSubmit(e) : setAction('signup')}>Signup</div>
                    <div className={action === 'login' ? 'submit' : 'submit gray'} onClick={(e) => action === 'login' ? handleSubmit(e) : setAction('login')}>Login</div>


                </div>
            </div>
        </div>
    );
}
