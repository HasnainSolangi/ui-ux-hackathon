import Image from "next/image";
import seat02popular from "../../public/seat02popular.png";
import chair02popular from "../../public/chair2popular.png";
import chairpopular from "../../public/chair-popular.jpeg";
import seatpopular from "../../public/seat(1).png";

const PopularStyles = () => {
  return (
    <div className="mx-auto max-w-7xl mb-20">
        <h1 className="font-roboto font-normal text-[34px] leading-[39.84px] mb-20 pl-10 md:pl-0">
        Explore new and popular styles
        </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-screen p-4">
        {/* First box spanning 2 rows on larger screens */}
        <div className="sm:row-span-2 transition duration-300 hover:scale-105">
            <Image 
                src={chairpopular}
                alt="chairpopular"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                width={500}
                height={500}
            />
        </div>
        
        {/* Remaining boxes in a responsive grid */}
        <div className="transition duration-300 hover:scale-105">
            <Image 
                src={seatpopular}
                alt="seatpopular"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                width={500}
                height={500}
            />
        </div>
        <div className="transition duration-300 hover:scale-105">
            <Image 
                src={chair02popular}
                alt="seat02popular"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                width={500}
                height={500}
            />
        </div>
        <div className="transition duration-300 hover:scale-105">
            <Image 
                src={seat02popular}
                alt="chair02popular"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                width={500}
                height={500}
            />
        </div>
        <div className="transition duration-300 hover:scale-105">
            <Image 
                src={chair02popular}
                alt="chair02popular"
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl"
                width={500}
                height={500}
            />
        </div>
    </div>
</div>
  )
}

export default PopularStyles