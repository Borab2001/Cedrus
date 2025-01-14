"use client";

import { Strategy } from "@/types/strategy";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


interface ViewStrategyDialogProps {
    strategy: Strategy
    children: React.ReactNode
}

export function ViewStrategyDialog({ 
    strategy,
    children 
}: ViewStrategyDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{strategy.name}</DialogTitle>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Année cible</p>
                            <p className="text-sm text-muted-foreground">{strategy.targetYear}</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Taux de réussite</p>
                            <p className="text-sm text-muted-foreground">{strategy.successRate}%</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Carbone évité (tCO2e/an)</p>
                            <p className="text-sm text-muted-foreground">{strategy.carbonAvoided} tCO2e/an</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Carbone évité (%)</p>
                            <p className="text-sm text-muted-foreground">{strategy.carbonAvoidedPercentage}%</p>
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Statut</p>
                            <p className="text-sm text-muted-foreground">
                                {strategy.status === 'calculated' ? 'Calculé' : 'En cours'}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}