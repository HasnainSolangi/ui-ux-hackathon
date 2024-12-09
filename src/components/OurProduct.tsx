import Image from "next/image";
import chair2 from "../../public/chair2popular.png";
import { ShoppingCart } from "lucide-react";
import pnik_sofa from "../../public/sofa_pink_1.png";
import chairPopular from "../../public/chair-popular.jpeg";
import sofa2 from "../../public/sofa2.png";
import Link from "next/link";

const OurProduct = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-30 relative top-[-60px] md:bottom-0 h-[3100px] md:h-auto md:top-0">
      <h1 className="text-2xl md:text-3xl lg:text-[32px] font-inter text-[#272343] mb-8 md:mb-12 relative top-[1050px] md:top-0">
        Our Products
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative top-[1100px] md:top-0 ">
        {/* Product cards as grid items - each card will maintain its own space */}
        
        {/* Product Card 1 */}
        <div className="product-card bg-white rounded-lg p-4">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
              New
            </div>
            <div className="aspect-square relative w-full">
              <Image 
                src={chair2}
                alt="chair2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-[#007580] text-sm md:text-base">Library Stool Chair</p>
              <p className="text-[#272343] font-medium text-lg">$20</p>
            </div>
            <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="product-card bg-white rounded-lg p-4">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
              New
            </div>
            <div className="aspect-square relative w-full">
              <Link href="/shop">
              <Image 
                src={pnik_sofa}
                alt="pink sofa"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              </Link>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-[#007580] text-sm md:text-base">Library Stool Chair</p>
              <div className="flex gap-2 items-center">
                <p className="text-[#272343] font-medium text-lg">$20</p>
                <p className="text-[#9A9CAA] line-through text-sm">$39</p>
              </div>
            </div>
            <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="product-card bg-white rounded-lg p-4">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
              New
            </div>
            <div className="aspect-square relative w-full">
              <Image 
                src={chairPopular}
                alt="chair popular"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-[#007580] text-sm md:text-base">Library Stool Chair</p>
              <div className="flex gap-2 items-center">
                <p className="text-[#272343] font-medium text-lg">$20</p>
                <p className="text-[#9A9CAA] line-through text-sm">$39</p>
              </div>
            </div>
            <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="product-card bg-white rounded-lg p-4">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
              New
            </div>
            <div className="aspect-square relative w-full">
              <Image 
                src={sofa2}
                alt="sofa2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-[#007580] text-sm md:text-base">Library Stool Chair</p>
              <div className="flex gap-2 items-center">
                <p className="text-[#272343] font-medium text-lg">$20</p>
                <p className="text-[#9A9CAA] line-through text-sm">$39</p>
              </div>
            </div>
            <button className="p-2 md:p-3 bg-gray-300 hover:bg-[#076068] rounded-lg">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;