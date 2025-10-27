import type { FC } from "react";
import type { ICar } from "../../types";
import { motion } from "motion/react";

type Props = {
  car: ICar;
};

const Info: FC<Props> = ({ car }) => {
  const arr = [
    {
      icon: "/steering-wheel.svg",
      text: car.trany,
    },
    {
      icon: "/tire.svg",
      text: car.drive,
    },
    {
      icon: "/calendar.svg",
      text: car.year,
    },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // ✅ doğru tip
      },
    },
  };

  return (
    <div className="w-full flex-between">
      {arr.map(({ icon, text }, key) => (
        <motion.div
          key={key}
          custom={key}
          variants={navVariants}
          initial="hidden"
          whileInView="show" // ✅ variant adı düzeltildi
          viewport={{ once: true, amount: 0.2 }}
          className="flex-center flex-col"
        >
          <img src={icon} className="size-[25px]" />
          <p className="text-center">{text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Info;