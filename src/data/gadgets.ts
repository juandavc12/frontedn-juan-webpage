import { Gadget } from "@/types/gadget";

export async function getGadgets(): Promise<Gadget[]> {
    try {
        const res = await fetch("http://localhost:4000/gadgets");
        if(!res.ok) {
            throw new Error("Failed to fetch gadgets");
        }
        const data: Gadget[] = await res.json();
        return data;
    } catch (err) {
        console.error('Error fetching gadgets:', err);
        return[];
    }
}