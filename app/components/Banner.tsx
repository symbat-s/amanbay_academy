import Image from "next/image";
export default function Banner() {
  return (
     <div className="flex gap-[225px] ">
        <div>
        <div className="w-[690px] h-[240px] mt-[200px] ml-[89px] text-bold text-8xl">Welocome to Amanbay Tech!</div>
        <div className="w-[705px] h-[144px] text-[35px] ml-[89px]">Empower Your Business for the Digital Age - Cutting-Edge Web, Mobile Development, and DevOps Solutions for Your Success!</div>
        <a href="https://amanbay.tech/en#explore"><button className="w-[250px] h-[65px] ml-[89px] bg-[#EA4D46] text-[white] text-center text-2xl rounded-[10px] mt-[70px]">Show services</button></a>
        </div>

        <div>
           <Image src="/PeakBanner.png" alt="Баннер" width={466} height={400} className="absolute mr-[50px]" />
        </div>
     </div>
  );
}
