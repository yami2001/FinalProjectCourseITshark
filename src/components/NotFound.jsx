import {Link} from "react-router-dom";
function NotFound() {
    return ( <section className="container">
		<div className="page404Wrap">
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<img src="/assets/images/404.png" alt="Francoise img"/>
			<p>The requested page has <br/> not been found</p>
			<Link to={"/"} className="homePageLink">homepage</Link>
		</div>
		<div className="clear"></div>
		<div className="ourInstagram">
			<div id="sb_instagram">
				<div className="sb_instagram_header">
					<a href="https://web.facebook.com" className="sbi_header_link">Follow on instagram</a>
				</div>
				<div id="sbi_images">
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://www.instagram.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://www.instagram.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst2.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://www.instagram.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst3.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://www.instagram.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst4.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
					<div className="sbi_item sbi_type_image">
						<div className="sbi_photo_wrap">
							<a href="https://www.instagram.com" className="sbi_photo">
								<img src="/assets/images/webimg/inst5.jpg" alt="Francoise img"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> );
}

export default NotFound;