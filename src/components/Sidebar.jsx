import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Sidebar() {
    const [recentposts,setRecentposts]=useState([]);
    useEffect(()=>{const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php", requestOptions)
        .then((response) => response.json())
        .then((result) => setRecentposts(result))
        .catch((error) => console.error(error));},[])
    
    return ( 
        <div className="sidebarRight">
        <div className="sidebar-widget">
            <h3>About us</h3>
            <div className="aboutMeWidget">
                <img src="/assets/images/ourlogo.png"/>
                <p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
            </div>
        </div>
        <div className="sidebar-widget">
            <h3>follow me</h3>
            <div className="followMeSocialLinks">
                <Link to="#"><i className="fa fa-instagram"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-facebook"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-heart"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-pinterest"></i></Link>
                <span></span>
                <Link to="#"><i className="fa fa-google-plus"></i></Link>
            </div>
        </div>
        
        <div className="sidebar-widget">
            <h3>Recent post</h3>
            <div className="popularPostsWidget">
                {recentposts.map((recentpost)=>{
                    return(
                    <div className="popularPostsWidgetItem" key={recentpost.id}>
                        <Link to={`/Single/${recentpost.category}/${recentpost.id}`}   className="popularPostsItemImg">
                        <img src={`https://xbellstore.com/itsharks24/blog/admin/${recentpost.image}`} alt="Francoise img"/></Link>
                        <time dateTime="2015-05-15">{recentpost.date}</time>
                        <h4><Link to="#">{recentpost.title}</Link></h4>
                    </div>
                    )})}
                
                
            </div>
        </div>
        
        
    </div>
);
}

export default Sidebar;