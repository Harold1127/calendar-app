import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-aliceblue w-[1119px] h-[976px] overflow-hidden text-left text-xs text-white flex justify-center items-center">
      <div className="absolute top-20 w-full h-full ">
        <Image
          src="/codelitt.svg"
          alt=""
          width="0"
          height="0"
          className="w-[265px] overflow-hidden h-[42px] object-cover "
        />
      </div>
     {children}
    </div>
  );
}
