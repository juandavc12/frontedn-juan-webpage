import { Gadget } from "@/types/gadget";
import "../styles/components/card.scss";
import Link from "next/link";


export default function Card({ name, description, route }: Gadget) {
    return (
        <Link href={route}>
        <div className="card">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
        </Link>
    );
}