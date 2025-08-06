
import Image from "next/image";
export default function Banner() {
  return (
   <div className="w-full h-screen bg-cover z-" style={{ backgroundImage: "url('/Peak.png')" }}>
      
    <div className=" ">
       <div className="w-[412px] h-[150px] text-5xl text-block pt-[230px] ml-[100px]">
         <div className="text-[#D91C1C]">Welcome to</div>
         <div className="text-[#BABBBB]">Amanbay Tech!</div>
       </div>

         <div className="w-[705px] h-[144px] ml-[100px] mt-[180px]">
            <div className="text-[35px]">Empower Your Business for the Digital Age -
        Cutting-Edge Web, Mobile Development, 
         and DevOps Solutions for Your Success!
            </div>
         </div>

         <div className="flex gap-[40px] mt-[100px]  ">
            <button className="text-3xl bg-[#C01F26] w-[308px] h-[60px] rounded-[30px]  ml-[100px] hover:bg-[#c01f2796]">Our services</button>
            <button className="bg-transparent rounded-[30px] w-[257px] h-[60px] text-3xl border-2 border-white/50">Contract Us</button>
         </div>
     </div>
  
   </div>
  
     
  );
}