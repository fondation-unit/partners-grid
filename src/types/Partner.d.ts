export type PartnerType = {
    id: string
    name: string
    logo: string
    url: string
    type: string|null
    items: [
        {
            name: string
            logo: string
            url: string
        }
    ]
}
