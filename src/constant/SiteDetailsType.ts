export interface site {
    site_id: string
    site_name: string
    customer_id: number
}

export interface RealTimeSite {
    datetime: string
    site_id: string
    site_name: string
    clusters: {
        cluster_id: number
        cluster_name: string
    }[]

    subscriptions: {
        subscription_name: string
        status: string
        event_history: {
            event_id: number
            message: string
            status: string
            datetime: string
        }[]
        // 서비스마다 달라지기 때문에
        subscription_info: any
    }[]
}

export interface SitesDetail {
    sites_total_count: number
    sites_detail: {
        sites_status: string
        sites_count: number
        sites: {
            customer_id: number
            is_bookmark: boolean
            site_id: string
            site_name: string
            clusters: {
                cluster_id: number
                cluster_name: string
            }[]
            subscriptions: {
                subscription_name: string
                status: string
            }[]
        }[]
    }[]

    error_subscription: {
        subscription_name: string
        error_count: number

        sites: {
            customer_id: number
            is_bookmark: boolean
            site_id: string
            site_name: string
            subscriptions: {
                subscription_name: string
                status: string
            }[]
            clusters: {
                cluster_id: number
                cluster_name: string
            }[]
        }[]
    }[]
}
