import { ArrowRight, Menu, MenuIcon } from "lucide-react";

export const Hero = () => {
  return (
    <div>
      <div className="flex gap-4 bg-[#eeece9] justify-between">
        <div className="">
          <p className="font-bold p-4">ॐ</p>
        </div>
        <div className="hidden md:block md:ml-8">
          <h1>Дхамма-Махаана</h1>
          <h3>Випашяна Бясалгалын Төв</h3>
        </div>
        <div className="">
          <p className="p-4">
            <MenuIcon />
          </p>
        </div>
      </div>
      <div>
        <div className="bg-[#eeece9] w-fit flex flex-col mt-10 text-center p-2">
          <h3>Монгол дахь Випашяна бясалгалын албан ёсны төв</h3>
          <h1>Дхамма-Махаана</h1>
          <h1>
            Випашяна бол Энэтхэгийн эртний бясалгалын нэг техник бөгөөд оюун
            санааны бохирдлыг арилгаж, дээд аз жаргалыг олж авах арга зам юм.
          </h1>
        </div>
        <div>
          <button className="border flex">
            Бүртгүүлэх <ArrowRight />
          </button>
          <button className="border">Дэлгэрэнгүй</button>
        </div>
      </div>
    </div>
  );
};
