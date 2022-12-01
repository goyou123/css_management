import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    useEffect(() => {
        goHome()
    })

    return <div>erro</div>
}
