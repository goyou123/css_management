import React, { ReactComponentElement } from 'react'
import { ListTabDiv } from 'components/atoms/SiteListTab/SiteListTab.style'

interface Iprops {
    title: ReactComponentElement<any> | string
    count: number
    red?: boolean
}
function SiteListTab({ title, count, red }: Iprops) {
    return (
        <ListTabDiv>
            <div className="tab">
                <h4>{title}</h4>
                <p className={red ? 'red' : ''}>{count}</p>
            </div>
        </ListTabDiv>
    )
}

export default SiteListTab
