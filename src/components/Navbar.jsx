import React from 'react'

const Navbar = () => {
  return (
    <div>
      
   <div className="navbar">
   <div className="logo">
<img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix log'/>
   </div>

   <div className="memu">
    <a href=""> Home</a>
    <a href=""> Tv show</a>
    <a href="">movie</a>
    <a href=""> new & Popular</a>
    <a href="">My List</a>

   </div>
   <div className="profile">
   <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png
            "
            alt="Profile"
          />
   </div>
   </div>

   </div>
  )
}

export default Navbar;