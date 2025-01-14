export interface Strategy {
    id: string
    name: string
    targetYear: number
    successRate: number
    carbonAvoided: number
    carbonAvoidedPercentage: number
    status: 'calculated' | 'in_progress'
}