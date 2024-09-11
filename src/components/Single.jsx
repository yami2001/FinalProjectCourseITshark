import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

function Single() {
	const prams=useParams();
	const [Single,setSingle]=useState([]);

	useEffect(()=>{
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		  };
		  
		  fetch(`https://xbellstore.com/itsharks24/blog/api/singlepost.php?id=${prams.id}`, requestOptions)
			.then((response) => response.json())
			.then((data) => setSingle(data))
			.catch((error) => console.error(error));

	

	},[prams.id])
	////////////////////////////////////////////////////////////////////////
	const [relatedPosts,setRelatedposts]=useState([])

	useEffect(()=>{
		const formdata = new FormData();

console.log(prams.category)
		
fetch(`https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${prams.category}` )
  .then((response) => response.json())
  .then((result) => setRelatedposts(result))
  .catch((error) => console.error(error));
	},[])
	return (  <section className="container">
		<div className="wrapper clear">
			<div className="contentLeft">
				
				{Single.map((res)=>{
					return(

					<div key={res.id}>
					<div className="singlePostMeta" >
					<div className="singlePostTime">{res.title}</div>
					<h1>{res.title}</h1>
					<a href="#" className="singlePostCategory">Lifestyle</a>
				</div>
					<div className="singlePostWrap">
					<div className="singlePostImg">
						<img src={`https://xbellstore.com/itsharks24/blog/admin/${res.image}`} alt="Francoise img"/>
					</div>
					<p>{res.description}</p>
					
				</div>
				</div>)
			
				})}
				
				
				<div className="pageSocial">
					<div className="pageSocialWrapper">
						<a href="https://web.facebook.com"><i className="fa fa-facebook"></i></a>
						<a href="https://x.com"><i className="fa fa-twitter"></i></a>
						<a href="https://www.pinterest.com"><i className="fa fa-pinterest"></i></a>
					</div>
				</div>
				<div className="relatedPostsBox">
						<h3>related posts</h3>
						<div className="relatedPostsWrap clear">
						{relatedPosts.map((relatedPost)=>{

					return(
						<Link to={`/Single/${relatedPost.category}/${relatedPost.id}`} className="relatedPostItem" key={relatedPost.id}>
								<img src={`https://xbellstore.com/itsharks24/blog/admin/${relatedPost.image}`} alt="Francoise img"/>
								<div className="overlayBox">
									<div className="relatedPostDesc">
										<div className="postTime">{relatedPost.date}</div>
										<h4>MY BEDSIDE TABLE: THE CURATOR</h4>
									</div>
								</div>
							</Link>
					)
				})}
							
						</div>
					</div>
				
	
				
			</div>
			<Sidebar/>
		</div>
		<div className="clear"></div>
		<div className="ourInstagram">
			<div id="sb_instagram">
				<div className="sb_instagram_header">
					<a href="https://www.instagram.com" className="sbi_header_link">Follow on instagram</a>
				</div>
				<div id="sbi_images">
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://web.facebook.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://x.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst2.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://www.pinterest.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst3.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://support.google.com/answer/2451065?hl=en" className="sbi_photo">
								<img src="/assets/images/webimg/inst4.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://web.facebook.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst5.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	);
}

export default Single;

	