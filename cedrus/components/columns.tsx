"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Strategy } from "@/types/strategy"

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
    },
    {
        id: "actions",
        header: "Actions",
        cell: () => <span>Actions ici</span>,
    }
];