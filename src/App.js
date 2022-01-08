import React, { useState } from "react";
import Input from "./components/Input";
import StockList from "./components/StockList";
import stockData from "./data.json";
import "./App.css";

export default function App() {
	const [dropdown, setDropdown] = useState(false);
	const [searchStock, setSearchStock] = useState("");
	const [stocks, setStocks] = useState(stockData);

	const onInputChange = (search) => {
		setDropdown(true);
		setSearchStock(search);
		getFilteredStock();
	};

	const getFilteredStock = () => {
		const filteredStock = stocks.filter((stock) => stock.name === searchStock);

		setStocks(() => filteredStock);
	};

	return (
		<div className="mainContainer">
			<Input onSearchChange={onInputChange} />
			{dropdown && <StockList stocks={stockData} />}
		</div>
	);
}
