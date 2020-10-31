import React from "react";
import "./SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>62 days ﹒ 1 November to 30 November ﹒ 2 guest </p>
				<h1>Places to stay near you</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
				img="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				location="Private room in centre of Brisbane"
				title="Stay at this spacious House"
				description="1 guest ﹒ 1 bedroom ﹒ Queenbed ﹒ Private bathroom ﹒ Wifi ﹒Kitchen ﹒ Free parking ﹒ Washing Machine"
				star={4.9}
				price="$80 / night"
				total="$2700 total"
			/>

			<SearchResult
				img="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				location="Private room in centre of Brisbane"
				title="Stay at this spacious House"
				description="1 guest ﹒ 1 bedroom ﹒ Queenbed ﹒ Private bathroom ﹒ Wifi ﹒Kitchen ﹒ Free parking ﹒ Washing Machine"
				star={4.9}
				price="$80 / night"
				total="$2700 total"
			/>

			<SearchResult
				img="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				location="Private room in centre of Brisbane"
				title="Stay at this spacious House"
				description="1 guest ﹒ 1 bedroom ﹒ Queenbed ﹒ Private bathroom ﹒ Wifi ﹒Kitchen ﹒ Free parking ﹒ Washing Machine"
				star={4.9}
				price="$80 / night"
				total="$2700 total"
			/>
		</div>
	);
}

export default SearchPage;
