import React from "react";
import Logo from "../../public/logo.webp";
const Nav = () => {
  return (
    <nav style={{  margin: '1px',display: "flex",  alignItems: "center", justifyContent: 'space-between', width: '100%'}}>
      {/* Left Section */}
      <div style={{ width: '100%' }}>
        <a href="#" style={{ display: "flex", color: 'black',  textDecoration: 'none'}}>
          <img src={Logo} alt="" style={{ height: "60px", width: "60px" }} />
          <h3 style={{ marginLeft: "10px" }}>Eagle Developer</h3>
        </a>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', width: '100%', gap: '20px', justifyContent: 'end', marginRight: '10px'}}>
        <div><a href="#" style={{  textDecoration: 'none', color: 'black' }}>Home</a></div>
        <div><a href="#" style={{  textDecoration: 'none', color: 'black' }}>About Us</a></div>
        <div><a href="#" style={{  textDecoration: 'none', color: 'black' }}>Contact Us</a></div>
        <div><a href="#" style={{  textDecoration: 'none', color: 'black' }}>Log In</a></div>
      </div>
    </nav>
  );
};

export default Nav;
