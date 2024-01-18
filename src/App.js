// import logo from './logo.svg';
// import './App.css';
// import Signup from './UI/screens/signUp'
// import SignIn from './UI/screens/signIn';
// import MainPage from '../src/UI/screens/MainPage'
// function App() {
//   return (
//     <div className="App">
//       <SignIn />
//       {/* <MainPage /> */}

//     </div>
//   );
// }

// export default App;

// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignIn from './UI/screens/signIn';
import Signup from './UI/screens/signUp';

// App.js



const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUP" element={<Signup />} />
      </Routes>

    </Router>
  );
};

export default App;


