"use client";

import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Strategy } from "@/types/strategy"

import { StrategyActions } from "./strategy-actions";
import { Badge } from "./ui/badge";


export const columns: ColumnDef<Strategy>[] = [
    {
        accessorKey: "name",
        header: "Nom",
    },
    {
        accessorKey: "targetYear",
        header: "Année cible",
    },
    {
        accessorKey: "successRate",
        header: "Taux de réussite",
    },
    {
        accessorKey: "carbonAvoided",
        header: "Carbone évité (tCO2e/an)",
    },
    {
        accessorKey: "carbonAvoidedPercentage",
        header: "Carbone évité (%)",
    },
    {
        accessorKey: "status",
        header: "Statut",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <Badge 
                    variant="secondary"
                    className={cn(
                        "gap-1.5 pointer-events-none",
                        status === 'calculated' ? "bg-emerald-500/10" : "bg-amber-500/10"
                    )}
                >
                    <span 
                        className={cn(
                        "size-1.5 rounded-full",
                        status === 'calculated' ? "bg-emerald-500" : "bg-amber-500"
                        )} 
                        aria-hidden="true"
                    ></span>
                        {status === 'calculated' ? 'Calculé' : 'En cours'}
                </Badge>
            )
            },
        },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row, table }) => (
            <StrategyActions 
                row={row}
                onDelete={(id: string) => table.options.meta?.onDelete(id)}
            />
        ),
    }
];