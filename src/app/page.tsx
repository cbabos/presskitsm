import EntityDetail from "@/components/entityDetail";
import Link from "next/link";

// @todo Using EntityDetail render the root Entity.
export default function Home() {
    async function create() {
        "use server";

        console.log("blah");
    }
    
    
    return (
        <>
            <EntityDetail id={1} />
        </>
    );
};