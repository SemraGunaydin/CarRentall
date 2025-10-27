import type { FC } from "react";
import SearchBar from "./searchbar";
import Year from "./year";


const Filter:FC = () => {
  return (
	<div className="mt-12 padding-x padding-y max-widht">
		<div className="home-text-container">
			<h1 className="text-4xl font-extrabold">Car Catalog</h1>
			<p>Choose your favorite car</p>
		</div>

		<div className="home-filters">
			<SearchBar/>
			<div className="home-filter-container">
				<Year/>
			</div>
		</div>
	</div>
  )
}

export default Filter;
