import Image from "next/image";
import chair2 from "../../../public/chair2popular.png";
import pnik_sofa from "../../../public/sofa_pink_1.png";
import chairPopular from "../../../public/chair-popular.jpeg";
import sofa2 from "../../../public/sofa2.png";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import table3 from "../../../public/table3.png";
import seat02popular from "../../../public/seat02popular.png";
import pillowseat from "../../../public/pilow.png";
import oldchair from "../../../public/oldChair.jpeg";
import seat3 from "../../../public/seat3.jpeg";
import chair2Pro from "../../../public/chair2Pro.jpg";
import table2 from "../../../public/table.jpeg";

const AllProductpage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <h1 className="font-inter text-[32px] leading-[35.2px] font-semibold mt-8 text-[#272343]">
          All Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-y-6 gap-x-[30px] px-4 ">
          <div className="w-full max-w-[358px] h-[312px]">
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
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
                  <p className="text-[#272343] font-medium text-lg">$20</p>
                </div>
                <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[358px] h-[312px]">
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
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
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
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
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
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={table3}
                    alt="table3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
                  <p className="text-[#272343] font-medium text-lg">$20</p>
                </div>
                <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={seat02popular}
                    alt="seat02popular"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={pillowseat}
                    alt="pillowseat"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={oldchair}
                    alt="oldchair "
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Image
                    src={seat3}
                    alt="seat3"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
                  <p className="text-[#272343] font-medium text-lg">$20</p>
                </div>
                <button className="p-2 md:p-3 bg-[#029FAE] hover:bg-[#076068] rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Link href="/single_product">
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
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Link href="/single_product">
                    <Image
                      src={chairPopular}
                      alt="chairPopular"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
          <div className="w-full max-w-[358px] h-[312px]">
            <div className="product-card bg-white rounded-lg p-4">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 bg-[#01AD5A] text-white px-3 py-1 rounded-md text-sm">
                  New
                </div>
                <div className="aspect-square relative w-full">
                  <Link href="/single_product">
                    <Image
                      src={chair2Pro}
                      alt="chair2Pro"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#007580] text-sm md:text-base">
                    Library Stool Chair
                  </p>
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
      </div>

      
     <div className="max-w-full bg-[#1E28320D] overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6 lg:px-8 relative top-24 md:top-0">
    <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[58.59px] text-[#000000] pt-10 sm:pt-20 text-center px-2">
      Or Subscribe To The Newsletter
    </h1>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between items-center w-full max-w-[643px] px-2">
      <div className="flex flex-col w-full sm:w-[80%]">
        <p className="font-roboto font-semibold text-base leading-[18.75px] text-[#1E283280]">
          Email address...
        </p>
        <div className="w-full h-[2px] bg-[#000000]" />
      </div>
      <p className="font-sans font-normal text-base leading-[21.79px] text-[#1E2832] underline border-b-2 border-[#000000] cursor-pointer whitespace-nowrap">
        SUBMIT
      </p>
    </div>
    <div className="flex flex-col items-center w-full px-2">
      <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight sm:leading-[58.59px] text-[#000000] pt-6 sm:pt-10 text-center">
        Follow products and discounts on Instagram
      </h1>
      <div className="my-4 w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
        {[table2, seat3, pnik_sofa, chair2, chairPopular, chair2Pro].map((image, index) => (
          <div key={index} className="relative w-[186px] h-[186px] flex-shrink-0">
            <Image 
              src={image} 
              alt={`product-${index}`} 
              width={186} 
              height={186} 
              className="object-cover"
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default AllProductpage;
