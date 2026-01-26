'use client'
import { getGadgets } from "@/data/gadgets";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Gadget } from "@/types/gadget";

export default function GadgetGrid() {
    const [gadgets, setGadgets] = useState<Gadget[]>([]);

useEffect(()=> {
    getGadgets().then((data) => setGadgets(data))
},[])

    return(
        <div className="w-full max-w-[650px] mx-auto grid grid-cols-2 gap-4">
            
            {gadgets.map((gadget) => (
                <Card key={gadget.id} {...gadget} />
            ))}
        </div>
    )
}