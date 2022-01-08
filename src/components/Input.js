import React, { useState } from "react";

export default function Input({ onSearchChange }) {
	const [search, setSearch] = useState("");
	const onChangeHandler = (e) => {
		setSearch(e.target.value);
		onSearchChange(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				name="search"
				value={search}
				onChange={onChangeHandler}
				placeholder="search your stocks here..."
			/>
		</div>
	);
}
