import React from "react";
import "./BannerBottom.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function BannerBottom() {
	const history = useHistory();

	return (
		<div className="bannerBottom">
			<div className="bannerBottom__info">
				<div className="bannerBottom__title">
					<h1>Online Experiences</h1>
					<Button onClick={() => history.push("/search")} variant="outlined">
						Explore all
					</Button>
				</div>
				<div className="bannerBottom__text">
					<p>
						Meet people all over the world while trying something new. Join live, interactive cideo sessions led by
						one-of-a-kind hosts −all without leaving home.
					</p>
				</div>
			</div>

			<div className="bannerBottom__card">
				<div className="bannerBottom__cardLeft">
					<img src="https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg?" alt="" />
					<div className="bannerBottom__cardInfo">
						<h4>Learn to make soup dumplings in Shanghai</h4>
					</div>
				</div>
				<div className="bannerBottom__cardRight">
					<img src="https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg?" alt="" />
					<div className="bannerBottom__cardInfo">
						<h4>Explore feminism with street art and graffiti</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BannerBottom;
