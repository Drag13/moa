import { useAmmoPageData } from "./ammo.loader";

export const AmmoPage = () => {
  const { name: ammoName, price, velocityM, bk, weight } = useAmmoPageData();
  return (
    <>
      <h1>
        {ammoName} {bk !== 0 ? `BC: ${bk}` : null}
      </h1>
      <h2>Price: {price.value} hrn</h2>
      <h3>
        {weight.toFixed(2)}g/{velocityM}m/s
      </h3>
    </>
  );
};
