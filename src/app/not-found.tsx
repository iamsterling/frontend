import Link from 'next/link'
 
export default function NotFound() {
    return <main className="flex flex-col gap-4 text-center self-center justify-self-center h-max p-24 py-48">
        <h1 className="text-9xl font-extrabold text-neon">404</h1>
        
        <div>
            <p className="text-2xl md:text-3xl text-gray-500 mt-4">Oops! Page not found</p>
            <p className="text-gray-600 mt-2">The page you are looking for doesn't exist or an other error occurred.</p>
        </div>
        
        <a href="/" className="
            mt-6 px-6 py-3 
            inline-block
            text-base 
            font-medium 
            rounded-md
            w-[fit-content]
            self-center
            

            ring ring-neon ring-offset-4 dark:ring-offset-slate-900
            
            
            hover:ring-offset-[0.8rem]
        ">
        Go back home
        </a>

    </main>
}