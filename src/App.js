import React from 'react';
import Profile from './profile/Profile.js';
import './App.css';

let Personne={
  fullName:"Chokri Hamza",
  bio:`
  Years | 2015-2018
  Engineering degree– The National Higher Engineering School of
  Tunis
  Years | 2013-2015
  Preparatory cycle– Preparatory Institute Of Engineering Studies
  Of Gabes
  Year | 2012-2013
  Bachelor.`,
  profession:"Industrial engineer"
}

function showName(){
 return(alert("Hello Am Chokri Hamza ")) ;
}
function App() {
  return (
 
     <Profile fullName={Personne.fullName}
     bio={Personne.bio}
     profession={Personne.profession}
     ShowName={showName}
      >
      <div className="container">
      <img className="avatar" src="./images/avatar.jpg" alt="chokri hamza"/>
      </div>
     </Profile>
   

    
  );
}

export default App;
