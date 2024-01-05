import { useRouter } from 'next/navigation';

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="text-base font-semibold text-center absolute  rounded bg-dimgray shadow-[0px_4px_28px_2px_#d1dcf0] w-[123px] h-[49px] cursor-pointer">
      Cancel
    </button>
  );
};

export default BackButton;
