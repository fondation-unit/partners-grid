export type PartnerType = {
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
