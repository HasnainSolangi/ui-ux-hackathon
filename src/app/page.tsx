import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import oldChair from "../../public/oldChair.jpeg";
import PinkSofa from "../../public/sofa_pink_1.png";
import chair2 from "../../public/chair2.png";
import sofa2 from "../../public/sofa2.png";
import TopCategories from "@/components/TopCategories";
import PopularStyles from "@/components/PopularStyles";
import OurProduct from "@/components/OurProduct";


export default function Home() {
    const cardBuild = [
      {
        id:1,
        heading:"Featured Products",
        divText:"New",
        Image1:{
          src: oldChair,
          alt:"oldChair",
          Width: 312,
          height: 312
        },
        paragraph: "Library Stool Chair",
        classNamepara:"text-[#007580]",
        amount: 20,
        classNameCart:"bg-[#029FAE]",
        isDiv:true,
      },
       {
        id:2,
        divText:"sales",
        classNameDiv:"bg-[#F5813F]",
        Image1:{
          src: PinkSofa,
          alt:"Sofa Pink",
          Width: 312,
          height: 312
        },
        paragraph: "Library Stool Chair",
        classNamepara: "text-[#272343]",
        amount:20,
        cutamount:39,
        classNameCart:"bg-gray-300",
        isDiv:true,
        className:"relative top-[40px]"
      },
      {
        id:3,
        Image1:{
          src: chair2,
          alt:"chair2",
          Width: 312,
          height: 312
        },
        paragraph: "Library Stool Chair",
        classNamepara: "text-[#272343]",
        amount:20,
        classNameCart:"bg-gray-300",
        isDiv:false,
        className:"relative top-[70px]"
      },
      {
        id:4,
        Image1:{
          src: sofa2,
          alt:"sofa2",
          Width: 312,
          height: 312
        },
        paragraph: "Library Stool Chair",
        classNamepara: "text-[#272343]",
        amount:20,
        classNameCart:"bg-gray-300",
        isDiv:false,
        className:"relative top-[70px]"
      },
    ]


  return (
   <div>
      <Hero/>
      <Sponsors/>
      <div className="flex flex-wrap xl:flex-nowrap object-cover">
      {cardBuild.map((elem)=>{
        return(
          <FeaturedProducts
          key={elem.id}
          heading={elem.heading}
          divText={elem.divText}
          Image1={elem.Image1}
          paragraph={elem.paragraph}
          amount= {elem.amount}
          classNameDiv={elem.classNameDiv}
          classNamepara={elem.classNamepara}
          cutamount={elem.cutamount}
          classNameCart={elem.classNameCart}
          isDiv={elem.isDiv}
          className={elem.className}
          />
        )
      })}
      </div>
      <TopCategories/>
      <PopularStyles/>
      <OurProduct/>
   </div>
  );
}
