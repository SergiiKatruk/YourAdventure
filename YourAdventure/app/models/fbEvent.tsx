export interface FbEvent{
    description: string,
    end_time: Date,
    name: string,
    start_time: Date,
    id: string,
    cover?: {
        source?: string
    },
    interested_count: number,
    attending_count: number,
    maybe_count: number,
    place: {
        name: string,
        location: {
            city: string,
            country: string,
            latitude: number,
            longitude: number
        }
    },
    ticket_uri: string,
    parent_group: {
        name: string
    }
}