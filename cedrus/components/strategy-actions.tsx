"use client";

import { Row } from "@tanstack/react-table";
import { MoreHorizontal, Trash2, Eye } from "lucide-react";

import { Strategy } from "@/types/strategy";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ViewStrategyDialog } from "./view-strategy-dialog";


interface StrategyActionsProps {
    row: Row<Strategy>;
    onDelete?: (id: string) => void;
}

export function StrategyActions({ row, onDelete }: StrategyActionsProps) {
    const strategy = row.original;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <ViewStrategyDialog strategy={row.original}>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <Eye className="mr-2 h-4 w-4" />
                        Voir les détails
                    </DropdownMenuItem>
                </ViewStrategyDialog>

                <DropdownMenuItem 
                    className="text-destructive focus:text-destructive focus:bg-destructive/10" 
                    onClick={() => onDelete?.(strategy.id)}
                >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Supprimer
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}