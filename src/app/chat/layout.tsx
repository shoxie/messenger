import ChatList from "@/components/ChatList";
import "../globals.css";
import { NextAuthProvider } from "@/app/providers";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NextAuthProvider>
                    <div className="flex flex-row">
                        <div>
                            <ChatList />
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </NextAuthProvider>
            </body>
        </html>
    );
}
