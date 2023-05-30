import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Chat() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    console.log(user)
    return (
        <div>
            hallo
        </div>
    )
}