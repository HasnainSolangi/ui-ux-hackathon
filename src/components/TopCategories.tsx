import Image from "next/image";
import pic1 from "../../public/Category1.png";
import pic2 from "../../public/Category2.png";
import pic3 from "../../public/Category3.png";
import Link from "next/link";

const TopCategories = () => {
  return (
    <div className="mx-auto max-w-7xl flex flex-col gap-40 mb-20">
        <h1 className="font-inter text-[32px] leading-[35.2px] pl-5 md:pl-0">
            Top categories
        </h1>
        <div className="flex gap-4 flex-wrap xl:flex-nowrap">
            <div className="relative overflow-hidden group">
                <Image src={pic1} alt="pic1" 
                width={424}
                height={424}/>
                <div className="absolute bottom-[-100%] left-0 right-0 bg-black/50 text-white p-4 transition-all duration-300 group-hover:bottom-[50%] translate-y-1/2 flex flex-col items-center gap-4">
                    <h3 className="text-xl font-semibold">Wing Chair</h3>
                    <Link href="/shop" className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                        Shop Now
                    </Link>
                </div>
            </div>
            
            <div className="relative overflow-hidden group">
                <Image src={pic2} alt="pic2" 
                width={424}
                height={424}/>
                <div className="absolute bottom-[-100%] left-0 right-0 bg-black/50 text-white p-4 transition-all duration-300 group-hover:bottom-[50%] translate-y-1/2 flex flex-col items-center gap-4">
                    <h3 className="text-xl font-semibold">Wooden Chair</h3>
                    <Link href="/shop" className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                        Shop Now
                    </Link>
                </div>
            </div>
            
            <div className="relative overflow-hidden group">
                <Image src={pic3} alt="pic3" 
                width={424}
                height={424}/>
                <div className="absolute bottom-[-100%] left-0 right-0 bg-black/50 text-white p-4 transition-all duration-300 group-hover:bottom-[50%] translate-y-1/2 flex flex-col items-center gap-4">
                    <h3 className="text-xl font-semibold">Desk Chair</h3>
                    <Link href="/shop" className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopCategories