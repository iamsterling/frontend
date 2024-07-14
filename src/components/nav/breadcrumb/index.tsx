import { Suspense } from "react"
import { View } from "./view"
import { Client } from "./client"


const Breadcrumb = () => {


    return <Suspense fallback={<View />}>
        <Client />
    </Suspense>
}


export default Breadcrumb