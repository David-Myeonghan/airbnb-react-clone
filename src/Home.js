import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import BannerBottom from "./BannerBottom";

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
					title="Unique stays"
					description="Spaces that are more than just a place to sleep"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=480"
					title="Online Experiences"
					description="Unique activities we can do together, led by a world of hosts"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
					title="Entire homes"
					description="Comfortable private places, with room for friends or family"
				/>
			</div>
			<BannerBottom />
		</div>
	);
}

export default Home;
