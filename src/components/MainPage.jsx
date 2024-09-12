import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

function MainPage(){
	
	const [results,setResults]=useState([]);
	useEffect(()=>{
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		  };
		  
		  fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php", requestOptions)
			.then((response) => response.json())
			.then((data) => setResults(data))
			.catch((error) => console.error(error));
			
	},[]);
	const params=useParams();
	let id= params.id;
	
    return(
        <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">
					{results.map((res)=>{
						return(
							
							<div className="blogPostListItem clear" key={res.id}>
						<Link to={"/Single/"+res.category +"/"+res.id} className="blogPostListImg">
							<img src={`https://xbellstore.com/itsharks24/blog/admin/${res.image}`} alt="Logo" />
						</Link>
						<div className="blogPostListText">
							<div className="blogPostListTime">{res.date}</div>
							<h3><Link to={"/Single/"+res.category +"/"+res.id}>{res.title} </Link></h3>
							<p>{res.description}</p>
						</div>
					</div>
						)
					})}
					
				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><Link to="/">New posts</Link></li>
						<li className="olderPosts"><Link to="/">Older posts</Link></li>
					</ul>
				</div>
			</div>
			<Sidebar/>
		</div>
		<div className="clear"></div>
		
	</section>
    )
}
export default MainPage