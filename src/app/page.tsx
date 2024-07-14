import Image from "next/image";

export default function Home() {
    return <main className="flex min-h-screen flex-col"
    >
        <header className="w-[stretch] bg-slate-800 py-48 px-24 min-h-[28rem] m-4 mt-12 rounded-[1rem]">
            <div className="text-center">
                
                <a href="#pricing" className="mt-8 inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-medium rounded-md">Get Started</a>
            </div>
        </header>

        <section>
            <h1>Promotions</h1>
        </section>
    </main>
}
