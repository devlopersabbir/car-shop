"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../custom/CustomButton";

type Props = {
  pageNumber: number;
  isNext?: boolean;
};
const ShowMore = ({ pageNumber }: Props) => {
  const router = useRouter();
  const handleNavigation = () => {};
  return (
    <div className="w-full flex-center gap-5 mt-10">
      <CustomButton
        title="Show More"
        buttonType="button"
        containerStyle="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    </div>
  );
};
export default ShowMore;
