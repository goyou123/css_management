import { useState } from 'react'

export const useTab = (idx: number, Tabs: any[]) => {
    const [currentIdx, _setCurrentIdx] = useState(idx)

    // if (!Tabs || !Array.isArray(Tabs)) {
    //     return null
    // }

    return {
        currentIdx,
        currentItem: Tabs[currentIdx],
        changeItem: _setCurrentIdx,
    }
}
