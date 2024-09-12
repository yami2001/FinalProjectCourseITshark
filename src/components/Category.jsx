import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";


function Category() {
  let pram = useParams();
  const [Categories, setCategories] = useState([]);


  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(`https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${pram.category}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCategories(result))
      .catch((error) => console.error('Error fetching posts:', error));
  }, [pram.category]);

  return (
    <section className="container">
      <div className="wrapper clear">
        <div className="contentLeft">
          <div className="archivePageTitle"><span>Lifestyle</span></div>
          <div className="archivePostWrap">
            {Categories.map((Category) => (
              <div className="archivePostItem" key={Category.id}>
                <div className="archivePostTime">{Category.date}</div>
                <h3 className="archivePostTitle"><Link to="#">{Category.title}</Link></h3>
                <Link to={`/Single/${Category.category}/${Category.id}`}  className="archivePostCategory">Lifestyle</Link>
                <Link to={`/Single/${Category.category}/${Category.id}`} className="archivePostImg">
                  <img src={`https://xbellstore.com/itsharks24/blog/admin/${Category.image}`} alt="Francoise img"/>
                </Link>
                <p>{Category.description}</p>
                <div className="archivePostItemMeta">
                  <Link to="#" className="archivePostItemComments">124 Comments</Link>
                  <div className="archivePostItemShareLinks">
                    <Link to="https://web.facebook.com"><i className="fa fa-facebook"></i></Link>
                    <Link to="https://x.com"><i className="fa fa-twitter"></i></Link>
                    <Link to="https://www.pinterest.com"><i className="fa fa-pinterest"></i></Link>
                  </div>
                  <Link to={"/Single/"+Category.category+"/"+Category.id} className="archivePostReadMore">Read More</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="postPagination">
            <ul className="clear">
              <li className="newPosts"><Link to="/">New posts</Link></li>
              <li className="olderPosts"><Link to="/">Older posts</Link></li>
            </ul>
          </div>
        </div>
        <Sidebar />
      </div>
      <div className="clear"></div>
    </section>
  );
}

export default Category;
