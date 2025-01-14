import { ListFilter } from "lucide-react";

import { AddStrategyDialog } from "@/components/add-strategy-dialog";
import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {

	const handleAddStrategy = (newStrategy: { name: string; targetYear: number }) => {
		console.log("Ajouté :", newStrategy);
	};

	return (
		<div className="min-h-screen mx-auto container p-8 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-2xl font-semibold">Stratégies</h1>
			<p className="text-muted-foreground font-medium text-base">Voici un aperçu de toutes les stratégies</p>

			<div className="flex items-center justify-between space-x-2 py-4">
				<Input
				placeholder="Recherche"
				className="max-w-sm"
				/>
				<div className="flex items-center space-x-2">
					<Button variant="outline">
						<ListFilter />
						Filtres
					</Button>
					<AddStrategyDialog onAddStrategy={handleAddStrategy} />
				</div>
			</div>
			<DataTable columns={columns} data={[]} />
		</div>
	);
}
