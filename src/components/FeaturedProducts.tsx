import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface ImageProps {
  src: StaticImageData;
  width?:number;
  height?:number;
  alt:string;
}

interface Icards {
  id?: number;
  className?:string;
  heading?: string;
  classNameDiv?: string;
  divText?: string;
  paragraph: string;
  classNamepara?: string;
  amount: number;
  cutamount?: number;
  classNameCart?: string;
  isDiv?: boolean;
  Image1:ImageProps;

}

const FeaturedProducts: React.FC<Icards> = (props) => {
  return (
    <div className={`mx-auto max-w-7xl flex flex-col gap-16 mb-32`}>
      <h1 className={`font-inter text-[32px] leading-[35.2px] text-[#272343] mx-20`}>
        {props.heading}
      </h1>
      <div className={`flex ${props.className} mx-[70px]`}>
        <div className="card-1 flex flex-col gap-2">
          {props.isDiv && (
            <div
              className={`w-[49px] h-[26px] rounded-[4px] py-[3px] px-[10] bg-[#01AD5A] flex items-end justify-center relative top-[55px] left-[15px] ${props.classNameDiv}`}
            >
              <p className="font-inter font-medium text-[13px] leading-[14.3px] text-[#FFFFFF]">
                {props.divText}
              </p>
            </div>
          )}
          <Link href="/shop">
          <Image
            src={props.Image1.src}
            alt={props.Image1.alt}
            height={props.Image1.height}
            width={props.Image1.width}
          />
          </Link>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p
                className={`font-inter font-normal text-base leading-[20.8px] ${props.classNamepara}`}
              >
                {props.paragraph}
              </p>
              <div className="flex">
                <p className="font-inter text-[18px] leading-[19.8px] text-[#272343]">
                  {props.amount}
                </p>
                <p className="font-inter font-normal text-sm leading-[15.4px] line-through text-[#9A9CAA]">
                  {props.cutamount}
                </p>
              </div>
            </div>
            <div
              className={`w-11 h-11 rouded-[8px] flex items-center justify-center rounded-[8px] hover:bg-[#076068] ${props.classNameCart}`}
            >
              <ShoppingCart className="w-[18.5px] h-[18.4px] text-[#FFFFFF]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
