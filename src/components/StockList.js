import React from "react";
import StockCard from "./StockCard";

export default function StockList({ stocks }) {
	return (
		<div>
			{stocks &&
				stocks.length !== 0 &&
				stocks.map((stock, i) => (
					<StockCard key={stock[0] + i} stock={stock} />
				))}
		</div>
	);
}
