import { gadgets } from "@/data/gadgets";
import Card from "./Card";


export default function GadgetGrid() {
    return(
        <div className="w-full max-w-[650px] mx-auto grid grid-cols-2 gap-4">
            {gadgets.map((gadget) => (
                <Card />
            ))}
        </div>
    )
}