import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ListFilter, Plus } from "lucide-react";

export default function Home() {
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
					<Button variant="default">
						<Plus />
						Ajouter
					</Button>
				</div>
			</div>
			<DataTable columns={columns} data={[]} />
		</div>
	);
}
