import Breadcrumb from "@/components/nav/breadcrumb";
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
        <Breadcrumb />
        { children }
    </>
}
