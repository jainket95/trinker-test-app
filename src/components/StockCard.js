import React, { useState } from "react";

export default function StockCard({ stock }) {
	const [showAddButton, setShowAddButton] = useState(false);
	const [name, data1, data2] = stock;
	const stockName1 = name.split("::")[0];
	const stockName2 = name.split("::")[1];
	const percentChange = (data1 - data2) / data2;

	const onAddStock = (params) => {};

	const button = (
		<>{showAddButton && <button onClick={onAddStock}>+</button>}</>
	);

	const onMouseEnter = (event) => {
		event.stopPropagation();
		setShowAddButton(true);
	};
	const onMouseLeave = (event) => {
		event.stopPropagation();
		setShowAddButton(false);
	};

	return (
		<div
			className="cardContainer"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}>
			{stockName1 && stockName2 && data1 && percentChange && (
				<div className="card">
					<div className="left">
						<div className="stock">{stockName1}</div>
						<div className="stockname">{stockName2}</div>
					</div>
					<div className="right">
						<div className="price">{data1}</div>
						<div className="percent">{percentChange}</div>
					</div>
				</div>
			)}
			{button}
		</div>
	);
}
