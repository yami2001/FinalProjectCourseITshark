import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header(){
  const [Categorys,setCategorys]=useState([]);
  useEffect(()=>{
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php", requestOptions)
        .then((response) => response.json())
        .then((result) => setCategorys(result))
        .catch((error) => console.error(error));
    }
    ,[]);
    return(
      <header id="header">
      <div className="siteHeader">
        <div className="wrapper clear">
          <Link to="/" className="mobile-logo">
          </Link>
          <ul className="mainMenu clear">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link >Category</Link>
              <ul>
                {Categorys.map((Category) =>{
                  return(<li key={Category.id}><Link to={`/category/${Category.name}`}>{Category.name}</Link></li>)
                })}
              </ul>
            </li>
            


          </ul>
          <div className="pull-right clear">
            <div className="headerSocialLinks clear">
              <a to="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
              <a to="https://web.facebook.com"><i className="fa fa-facebook"></i></a>
              <a to="https://x.com"><i className="fa fa-twitter"></i></a>
              <a to="https://www.bloglovin.com"><i className="fa fa-heart"></i></a>
              <a to="https://www.pinterest.com"><i className="fa fa-pinterest"></i></a>
              <a to="https://support.google.com/answer/2451065?hl=en"><i className="fa fa-google-plus"></i></a>
            </div>
            <div className="searchIcon"></div>
          </div>
          <span className="showMobileMenu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>	
      </div>
      <Link to="/" className="logo">IT SHARKS 33</Link>
      
    </header>
    )
}
export default Header