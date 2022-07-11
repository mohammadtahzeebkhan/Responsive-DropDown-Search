import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
	const [visibility, setVisibility] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [search, setSearch] = useState("");
	const options = [
		"Andaman and Nicobar ",
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chandigarh",
		"Chhattisgarh",
		"Dadra and Nagar Haveli",
		"Daman and Diu",
		"Delhi",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Lakshadweep",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Orissa",
		"Pondicherry",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Tripura",
		"Uttaranchal",
		"Uttar Pradesh",
		"West Bengal"
	];
 
	return (
		<div className="App">
		
			<div
				className="select"
				onClick={e => {
					setVisibility(!visibility);
					setSearch("");
					e.currentTarget.children[0].children[1].innerHTML = visibility
						? "arrow_drop_down "
						: "arrow_drop_up";
				}}
			>
				<div className="selected-option">
					<span
						title={
							selectedOption === ""
								? "Select a state"
								: selectedOption
						}
					>
						{selectedOption === ""
							? "Select a state"
							: selectedOption.length <= 20
							? selectedOption
							: `${selectedOption.slice(0, 20)}...`}
					</span>
					<i className="material-icons">arrow_drop_down</i>
				</div>
				{visibility && (
					<div className="options">
						<div className="search-options">
							<input 
							 className="inp"
								type="text"
								placeholder="Search states"
								defaultValue={search}
								onClick={e => e.stopPropagation()}
								onChange={e => setSearch(e.target.value)}
							/>
						</div>
						<ul>
							{/* <li
								data-value="default"
								onClick={() => setSelectedOption("")}
							>
								Select a state
							</li> */}
							{options
								.filter(option =>
									option
										.toLowerCase()
										.includes(search.toLowerCase())
								)
								.map((option, index) => (
									<li
										key={index}
										className={
											selectedOption === option
												? "active-option"
												: null
										}
										onClick={() =>
											setSelectedOption(option)
										}
									>
										{option}
									</li>
								))}
						</ul>
					</div>
				)}
			</div>
	
		</div>
	);
}

export default App;
