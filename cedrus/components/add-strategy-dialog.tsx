"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { 
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react";


interface AddStrategyDialogProps {
    onAddStrategy: (strategy: { name: string; targetYear: number }) => void;
}

export function AddStrategyDialog({ onAddStrategy }: AddStrategyDialogProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [targetYear, setTargetYear] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddStrategy({ name, targetYear: parseInt(targetYear) });
        setOpen(false);
        setName("");
        setTargetYear("");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default">
                    <Plus />
                    Ajouter
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="font-semibold">Ajouter une stratégie</DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4 pt-4 pb-8">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">
                                Nom de la stratégie
                            </Label>
                            <Input placeholder="e.g. DPE B" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="year">
                                Année cible
                            </Label>
                            <Input type="number" placeholder="e.g. 2050" value={targetYear} onChange={(e) => setTargetYear(e.target.value)} required />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" variant="default">
                            Ajouter la stratégie
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}