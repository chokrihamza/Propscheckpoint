import React from 'react'
import PropTypes from 'prop-types';
const styleprofile = {
    backgroundColor:'white',
    fontFamily: 'cursive',
    paddingTop: '50px',
    
  }
const Button={
    backgroundColor:'crimson',
    width:'100%',
    height:'50px'
}


function Profile(props) {
   
    return (
    <div style={styleprofile}>
    <h1 style={{background:"crimson",textAlign:"center"}}>
    {props.fullName}
    </h1>
     <h1 style={{background:"gray",textAlign:"center"}}>
     {props.bio}
     </h1>
     <h2 style={{background:"gray",textAlign:"center"}}>
     {props.profession}
     </h2>
     {props.children}
     <button style={Button}  onClick={props.ShowName}>Show Name</button>
    </div>
    )
}


export default Profile

Profile.propTypes = {
    fullName: PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    ShowName:PropTypes.func,
  };

  Profile.defaultProps = {
    fullName: "Chokri Hamza",
    bio:"Engineer",
    profession:"Industrial Engineer",
    ShowName:"hello am chokri",
  };
