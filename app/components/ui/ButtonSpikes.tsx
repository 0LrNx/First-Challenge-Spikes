import Link from "next/link";
import { ArrowRight } from "lucide-react"

function ButtonSpikes() {
    return (
        <>
            <Link 
                className="border border-[#4C3182] shadow-inner backdrop-blur-sm rounded-3xl flex items-center justify-center gap-3 px-6 py-1 cursor-pointer"
                href="https://www.spikes.dev">
                <p className="text-base font-medium text-white">www.spikes.dev</p>
                <ArrowRight className="size-4"/>
            </Link>
        </>
    )
}

export default ButtonSpikes;