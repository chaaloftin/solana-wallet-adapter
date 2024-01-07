import { FC } from "react";
import styles from "../styles/Home.module.css";

export const AppBar: FC = () => {
  return (
    <div className="h-22 flex bg-black flex-row items-center justify-between text-5xl text-white pl-5 pr-5 flex-wrap">
      <span>Wallet-Adapter Example</span>
      <button>Connect</button>
    </div>
  );
};
