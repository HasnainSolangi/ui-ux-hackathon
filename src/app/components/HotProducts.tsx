import Image from "next/image";

export default function HotProducts() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-16">
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-start md:gap-0 gap-6">
        {/* Vertical Text */}
        <div className="flex-shrink-0 flex items-center md:h-[500px] h-auto">
          <p className="text-xl font-medium tracking-wider text-zinc-900 rotate-[270deg] origin-center whitespace-nowrap">
            EXPLORE NEW AND POPULAR STYLES
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left Large Image */}
          <div className="w-full md:w-[48%]">
            <Image
              src="/03.jpg"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Right Grid of Smaller Images */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/04.jpg"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/06.jpg"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
