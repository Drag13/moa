import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import { AmmoStatistics } from "./ammo-statistics";
import { useAmmoPageData } from "./ammo.loader";
import styles from "./info.module.css";

export const AmmoPage = () => {
  const { ammo, results } = useAmmoPageData();
  const { name: ammoName, price, velocityM, bk, weight } = ammo;
  const { code } = useParams();
  return (
    <>
      <h1>{ammoName}</h1>

      <h2>Specification</h2>

      <p className={styles["info-group"]}>
        <Info>Price: {price.value} hrn</Info>
        <Info>Weight: {weight.toFixed(2)}gr</Info>
        <Info> Velocity: {velocityM.toFixed(2)} m/s</Info>
        <Info> {bk !== 0 ? `BC: ${bk}` : "N/A"}</Info>
      </p>

      <h2>Results</h2>
      <AmmoStatistics logs={results} ammoId={code!} />
    </>
  );
};

function Info({ children }: PropsWithChildren) {
  return <span className={styles["info-item"]}>{children}</span>;
}
