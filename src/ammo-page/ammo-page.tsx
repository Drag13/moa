import { useParams } from "react-router-dom";
import { AmmoStatistics } from "./ammo-statistics";
import { useAmmoPageData } from "./ammo.loader";

export const AmmoPage = () => {
  const { ammo, results } = useAmmoPageData();
  const { name: ammoName, price, velocityM, bk, weight } = ammo;
  const { code } = useParams();
  return (
    <>
      <h1>
        {ammoName} {bk !== 0 ? `BC: ${bk}` : "N/A"}
      </h1>
      <h2>Price: {price.value} hrn</h2>
      <h3>
        {weight.toFixed(2)}g/{velocityM}m/s
      </h3>

      <AmmoStatistics logs={results} ammoId={code!} />
    </>
  );
};
