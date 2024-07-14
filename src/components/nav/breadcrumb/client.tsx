'use client'

import { View } from "./view"
import { usePathname } from 'next/navigation'

export const Client = () => {
    const path = usePathname()
    

    return <View pathname={path} />
}