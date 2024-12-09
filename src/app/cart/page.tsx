import Image from "next/image";
import yellowchair from "../../../public/yellowChair.png";
import { Heart, Trash2 } from "lucide-react";
import seat3 from "../../../public/seat3.jpeg"

const CartPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 my-8 flex flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
        <div className="w-full flex flex-col gap-4">
            <h1 className="font-inter font-medium text-xl lg:text-[22px] leading-[33px] text-[#111111]">
                Bag
            </h1>
            <div className="w-full flex flex-col sm:flex-row gap-4">
                <Image src={yellowchair} alt="yellowchair" 
                className="object-contain"
                width={150}
                height={150}/>
                <div className="flex flex-col gap-4">
                    <h1 className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">
                    Library Stool Chair
                    </h1>
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <p className="font-inter font-normal text-[15px] leading-7 text-[#757575]">
                        Ashen Slate/Cobalt Bliss
                        </p>
                        <div className="flex gap-4 lg:gap-6 font-inter font-normal text-sm leading-[16.94px] text-[#757575]">
                            <p>Size L</p>
                            <p>Quantity 1</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Heart className="cursor-pointer" width={24} height={24}/>
                            <Trash2 className="cursor-pointer" width={24} height={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="text-[#111111] font-inter font-normal text-[15px] leading-7 flex">
                <p>MRP:&nbsp;</p>
                <p>$99</p>
            </div>
        </div>

        <div className="w-full h-[2px] bg-[#E5E5E5] my-4"/>

        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full">
        <div className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col sm:flex-row gap-4">
                <Image src={seat3} alt="seat3" 
                className="object-contain"
                width={150}
                height={150}/>
                <div className="flex flex-col gap-4">
                    <h1 className="font-inter font-normal text-base leading-[20.8px] text-[#272343]">
                    Library Stool Chair
                    </h1>
                    <div className="flex flex-col gap-4 lg:gap-6">
                        <p className="font-inter font-normal text-[15px] leading-7 text-[#757575]">
                        Ashen Slate/Cobalt Bliss
                        </p>
                        <div className="flex gap-4 lg:gap-6 font-inter font-normal text-sm leading-[16.94px] text-[#757575]">
                            <p>Size L</p>
                            <p>Quantity 1</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Heart className="cursor-pointer" width={24} height={24}/>
                            <Trash2 className="cursor-pointer" width={24} height={24}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="text-[#111111] font-inter font-normal text-[15px] leading-7 flex">
                <p>MRP:&nbsp;</p>
                <p>$99</p>
            </div>
        </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6 h-fit">
            <h1 className="font-inter font-medium text-xl lg:text-[21px] leading-[33px] text-[#111111]">
            Summary
            </h1>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <p className="font-inter font-normal text-[15px] leading-7 text-[#111111]">
                    Subtotal
                    </p>
                    <p className="font-inter font-medium text-sm leading-6 text-[#111111]">
                    $198.00
                    </p>
                </div>

                <div className="flex justify-between items-center gap-4">
                    <p className="font-inter font-normal text-[15px] leading-7 text-[#111111]">
                    Estimated Delivery & Handling
                    </p>
                    <p className="font-inter font-medium text-sm leading-6 text-[#111111]">
                    Free
                    </p>
                </div>
            </div>
            <div className="bg-[#E5E5E5] w-full h-[2px]"/>
            <div className="flex justify-between items-center">
                    <p className="font-inter font-normal text-[15px] leading-7 text-[#111111]">
                    Total
                    </p>
                    <p className="font-inter font-medium text-sm leading-6 text-[#111111]">
                    $198.00
                    </p>
                </div>
                    <div className="bg-[#E5E5E5] w-full h-[2px]"/>

                    <button className="w-full py-[18px] px-4 bg-[#029FAE] hover:bg-[#15727a] rounded-[30px] font-inter font-medium text-[15px] leading-6 text-white">
                        Member Checkout
                    </button>
        </div>
    </div>
  )
}

export default CartPage