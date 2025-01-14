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

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ajouter une stratégie</DialogTitle>
                </DialogHeader>
                
                <form onSubmit={handleSubmit}>
                    <Input placeholder="Nom de la stratégie" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input type="number" placeholder="Année cible" value={targetYear} onChange={(e) => setTargetYear(e.target.value)} required />
                    
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