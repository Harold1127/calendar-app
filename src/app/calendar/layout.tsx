import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-aliceblue w-full h-[976px] overflow-hidden text-left text-xs text-white flex justify-center items-center">
     {children}
    </div>
  );
}
