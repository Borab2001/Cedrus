"use client";

import { ColumnDef } from "@tanstack/react-table";

export interface Strategy {
    id: string
    name: string
    targetYear: number
    successRate: number
    carbonAvoided: number
    carbonAvoidedPercentage: number
    status: 'calculated' | 'in_progress'
}

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
        id: "actions",
        header: "Actions",
        cell: () => <span>Actions ici</span>,
    },
    {
        accessorKey: "status",
        header: "Statut",
    }
];