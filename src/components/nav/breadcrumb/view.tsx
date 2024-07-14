import Link from "next/link"
import { AiTwotoneHome } from "react-icons/ai"
import { BsSlashLg } from "react-icons/bs"
import { CgFormatSlash } from "react-icons/cg"


interface view {
    pathname: string
}

export const View = ({ pathname }: view) => {



    return <nav className="
        bg-slate-700
        flex
        align-center

        p-4
    ">
        <Link href="/"
            className="
                self-center
            "
        ><AiTwotoneHome /></Link>
        <CgFormatSlash className="" />
    </nav>
}