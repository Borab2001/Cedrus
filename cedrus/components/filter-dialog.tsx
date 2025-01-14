"use client";

import { useState } from "react";
import { ListFilter } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface FilterDialogProps {
    onFilter: (years: [number, number]) => void;
    minYear: number;
    maxYear: number;
}

export function FilterDialog({ onFilter, minYear, maxYear }: FilterDialogProps) {
    const [years, setYears] = useState<[number, number]>([minYear, maxYear]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <ListFilter />
                    Filtres
                </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Filtrer les stratégies</DialogTitle>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                    <div className="grid gap-4">
                        <Label>Année cible (entre {years[0]} et {years[1]})</Label>
                        <Slider
                            min={minYear}
                            max={maxYear}
                            value={years}
                            onValueChange={(value) => {
                                setYears(value as [number, number]);
                                onFilter(value as [number, number]);
                            }}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}