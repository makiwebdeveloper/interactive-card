import { FC } from "react";
import cardBack from "../assets/bg-card-back.png";

interface Props {
  cvc: string;
}

const CardBack: FC<Props> = ({ cvc }) => {
  return (
    <div
      className="relative w-[333px] h-[183px] xl:w-[447px] xl:h-[245px] 2xl:w-[520px] 2xl:h-[300px] mr-0 ml-auto bg-cover"
      style={{ backgroundImage: `url(${cardBack})` }}
    >
      <p className="absolute text-white tracking-wider xl:text-xl 2xl:text-2xl md:top-[78px] md:right-[40px] xl:top-[105px] xl:right-[50px] 2xl:top-[132px] 2xl:right-[40px]">
        {cvc.slice(0, 3)}
      </p>
    </div>
  );
};

export default CardBack;
