import Rating from "@/components/rating";
import { PropsWithChildren } from "react";
import Marquee from "react-fast-marquee";


export default function Page({ params }: { params: { product: string } }) {
    

    let variant = {
        color: [1,2,3],
        options: {
            storage: [],

        }
    }
    
    return <main className="
        flex 
        flex-col
        gap-4 
        mx-4 my-12">

        <h1 className="text-xl">{params.product}</h1>
        
        <div className="bg-slate-800 w-full aspect-square rounded-lg" />

        <section className="w-full flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
                <p className="text-slate-600">Strikingly thin and fast so you can work, play, or create anywhere.</p>
                <Rating />
                <h2 className="text-[2rem] font-bold font-italic">$2999.99</h2>


                <ul className="flex gap-4">
                    {variant.color.map((i, index) => {
                        return <li key={index} 
                            className="
                                bg-slate-300
                                w-10 h-10
                                rounded-full
                            "
                        />
                    })}
                </ul>


            </div>
            
            <section className="flex justify-between gap-2">
                <button className="bg-slate-800 p-4 rounded-xl w-full">Clicky</button>
                <button className="bg-slate-800 p-4 rounded-xl w-full">Clicky</button>
            </section>
        </section>

        <section className="flex flex-col gap-8">
            customers also viewed

            <Marquee
                autoFill={true}
                speed={20}
                direction="right"
                pauseOnClick={true}
                pauseOnHover={true}
            >
                <Item>
                </Item>
            </Marquee>
        </section>
    </main>
}




const Item = ({ children }: PropsWithChildren) => {


    return <div className="
        bg-slate-800
        rounded-[1rem] 
        mx-4 w-[12rem] 
        my-4
        aspect-square


        ring
        ring-slate-900
        hover:ring-neon
        ring-offset-4
        ring-offset-slate-900

        transition-all ease-in-out duration-300
    ">
        { children }
    </div>
}