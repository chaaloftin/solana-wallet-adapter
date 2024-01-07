import { FC } from "react";
import styles from "../styles/PingButton.module.css";

export const PingButton: FC = () => {
  const onClick = () => {
    console.log("Ping!");
  };

  return (
    <div className="flex flex-col items-center" onClick={onClick}>
      <button className="my-2.5 p-3.75 text-base border-0 font-roboto">
        Ping!
      </button>
    </div>
  );
};
