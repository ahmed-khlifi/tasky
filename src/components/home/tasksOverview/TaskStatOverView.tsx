import { Star } from "lucide-react";

export default function TaskStatOverView() {
    return (
        <div className='bg-white  rounded-2xl p-6'>
            <div className='flex items-center gap-5 border-b-2 border-[#E8EDF1] pb-8'>
                <div className="bg-[#F5F6FA] w-12 h-12 rounded-full flex items-center justify-center">
                    <Star className="text-[#8D98A9] w-6 h-6" />
                </div>
                <p className="text-[#8C97A8] font-bold">Task Completed</p>
                <p className="font-bold ml-auto text-2xl">08</p>
            </div>
            <div className="flex  justify-center gap-5 mt-5 ">
                <SvgItem />
                <div>
                    <span className="text-[#8C97A8] font-medium mt-3">
                        <p>
                            <span className="text-emerald-500 font-bold">10+</span> more
                        </p>
                        <p>from last week</p>
                    </span>
                </div>
            </div>
        </div>
    )
}


function SvgItem() {
    return <svg width="133" height="68" viewBox="0 0 133 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2_54)">
            <path d="M9 45.7573C9.43233 45.9655 10.2525 46.3237 15.2624 41.7925C21.5248 36.1285 27.2178 32.1638 33.4802 37.2613C39.7426 42.3589 43.7277 54.8196 51.698 51.4213C59.6683 48.0229 62.5149 22.535 72.1931 19.1367C81.8713 15.7383 88.1337 35.5622 94.9653 24.8006C101.797 14.0391 109.198 0.445683 114.322 2.14487C118.421 3.50422 122.482 9.13046 124 11.7737" stroke="#5051F9" strokeWidth="2" />
        </g>
        <defs>
            <filter id="filter0_d_2_54" x="0.565918" y="-0.00146484" width="132.301" height="68.0015" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="7" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.313725 0 0 0 0 0.317647 0 0 0 0 0.976471 0 0 0 0.4 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_54" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_54" result="shape" />
            </filter>
        </defs>
    </svg>

}