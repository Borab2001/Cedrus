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
    const [open, setOpen] = useState(false)

    const handleYearChange = (newYears: number[]) => {
        setYears(newYears as [number, number])
    }

    const handleApplyFilter = () => {
        onFilter(years)
        setOpen(false)
    }

    const handleResetFilter = () => {
        setYears([minYear, maxYear])
        onFilter([minYear, maxYear])
        setOpen(true)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                            step={1}
                            value={years}
                            onValueChange={handleYearChange}
                        />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{minYear}</span>
                        <span>{maxYear}</span>
                    </div>
                </div>
                
                <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={handleResetFilter}>
                        Réinitialiser
                    </Button>
                    <Button onClick={handleApplyFilter}>Appliquer</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}