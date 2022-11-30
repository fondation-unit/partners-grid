import { PartnerType } from "./Partner"

export type ReseauProps = {
    element: PartnerType
    setActiveId: (name: any) => void
    activeId: number
}