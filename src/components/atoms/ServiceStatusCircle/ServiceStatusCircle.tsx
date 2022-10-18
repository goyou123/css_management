import React from 'react'
import { ServiceStatusCircleLi } from 'components/atoms/ServiceStatusCircle/ServiceStatusCircle.style'
import { DefaultTheme } from 'styled-components'

export interface IProps {
    theme?: DefaultTheme
    subscription_name: string
    status: string
    circle: boolean
}
function ServiceStatusCircle({ theme, subscription_name, status, circle }: IProps) {
    return (
        <ServiceStatusCircleLi status={status} theme={theme} circle={circle}>
            {subscription_name}
        </ServiceStatusCircleLi>
    )
}

// export default ServiceStatusCircle
export default React.memo(ServiceStatusCircle)
