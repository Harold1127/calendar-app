import Link from "next/link";

type AddReminderButtonProps = {
  href: string;
};

const AddReminderButton: React.FC<AddReminderButtonProps> = ({ href }) => {
  return (
    <Link
      href={href}
      passHref
      className="rounded [background:linear-gradient(90deg,_#ff465d,_#bc46ba)] shadow-[0px_4px_28px_2px_#d1dcf0] absolute left-[420px]
        w-[180px] h-[49px] cursor-pointer text-center text-white font-Lato  font-semibold text-sm leading-[49px] tracking-wide"
    >
      Add reminder
    </Link>
  );
};

export default AddReminderButton;
