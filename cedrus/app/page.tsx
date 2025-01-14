"use client";

import { useState } from "react";

import { Strategy } from "@/types/strategy";

import { AddStrategyDialog } from "@/components/add-strategy-dialog";
import { FilterDialog } from "@/components/filter-dialog";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input";


export default function Home() {

	const [data, setData] = useState<Strategy[]>([]);
	const [filteredData, setFilteredData] = useState<Strategy[]>([]);

	const handleAddStrategy = (newStrategy: { name: string; targetYear: number }) => {
		const strategy: Strategy = {
			id: Math.random().toString(36).substring(2, 11),
			name: newStrategy.name,
			targetYear: newStrategy.targetYear,
			successRate: 0,
			carbonAvoided: 0,
			carbonAvoidedPercentage: 0,
			status: "in_progress",
		};
		setData((prev) => [...prev, strategy]);
		setFilteredData((prev) => [...prev, strategy])
	};

	const handleFilter = (years: [number, number]) => {
		setFilteredData(
			data.filter(
				(strategy) =>
				strategy.targetYear >= years[0] && strategy.targetYear <= years[1]
			)
		)
	};

	const handleSearch = (term: string) => {
		setFilteredData(
			data.filter((strategy) =>
				strategy.name.toLowerCase().includes(term.toLowerCase())
			)
		)
	};

	const minYear = Math.min(...data.map((strategy) => strategy.targetYear));
  	const maxYear = Math.max(...data.map((strategy) => strategy.targetYear));


	return (
		<div className="min-h-screen mx-auto container p-8 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-2xl font-semibold">Stratégies</h1>
			<p className="text-muted-foreground font-medium text-base">Voici un aperçu de toutes les stratégies</p>

			<div className="flex items-center justify-between space-x-2 py-4">
				<Input
					placeholder="Recherche"
					className="max-w-sm"
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<div className="flex items-center space-x-2">
					<FilterDialog
						onFilter={handleFilter}
						minYear={minYear}
						maxYear={maxYear}
					/>
					<AddStrategyDialog onAddStrategy={handleAddStrategy} />
				</div>
			</div>
			<DataTable columns={columns} data={filteredData} />
		</div>
	);
}