import { isCreatingChatAtom } from '@/lib/atom'
import { useAtom } from 'jotai'
import { BiMessageAdd, BiSearchAlt2 } from 'react-icons/bi'

export default function ChatList() {
    const [isCreatingChat, setCreatingChat] = useAtom(isCreatingChatAtom)

    function createNewChat() {
        setCreatingChat(true)
    }

    return (
        <div className="flex flex-col h-screen px-5 py-5 border-r w-96">
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row items-center justify-between text-xl">
                    <div>
                        <span className="font-semibold">Chats</span>
                    </div>
                    <div>
                        <button className="p-1.5 transition-all duration-300 rounded-full hover:bg-gray-200">
                            <BiMessageAdd />
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute text-2xl text-gray-400 top-2 left-2">
                        <button onClick={createNewChat}>
                            <BiSearchAlt2 />
                        </button>
                    </div>
                    <input placeholder='Search messages' className="w-full px-3 py-2 pl-10 bg-gray-100 rounded-full placeholder-sm focus:outline-none" />
                </div>
            </div>
        </div>
    )
}