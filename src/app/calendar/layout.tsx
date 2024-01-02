import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-[1119px] h-[686px] m-auto">
      <div>
        <Image src="/codelitt.svg" alt="" width={265} height={42} />
      </div>
     {children}
    </div>
  );
}
