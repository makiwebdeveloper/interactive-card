import { FormikValues } from "formik";
import { FC } from "react";
import cardFront from "../assets/bg-card-front.png";
import { getFormattingArrayOfCardNumbers } from "../utils/getFormattingArrayOfCardNumbers";

interface Props {
  values: FormikValues;
}

const CardFront: FC<Props> = ({ values }) => {
  return (
    <div
      className="
      w-[333px] h-[183px] xl:w-[447px] xl:h-[245px] 2xl:w-[520px] 2xl:h-[300px] bg-cover px-5 py-4 flex flex-col justify-between"
      style={{ backgroundImage: `url(${cardFront})` }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white" />
        <div className="w-5 h-5 rounded-full border border-white" />
      </div>
      <div className="flex flex-col gap-4 xl:gap-8 2xl:gap-14">
        <div className="flex">
          {getFormattingArrayOfCardNumbers(values.number).map((item, i) => (
            <p
              key={i}
              className="flex-1 text-white text-2xl xl:text-3xl 2xl:text-4xl"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-white tracking-wider uppercase xl:text-xl 2xl:text-2xl">
            {values.name.slice(0, 20)}
          </p>
          <p className="text-white xl:text-xl 2xl:text-2xl">
            {values.month
              ? values.month.length === 1
                ? "0" + values.month
                : values.month.slice(0, 2)
              : "00"}
            /
            {values.year
              ? values.year.length === 1
                ? "0" + values.year
                : values.year.slice(0, 2)
              : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
