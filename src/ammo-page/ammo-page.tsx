import { useAmmoPageData } from "./ammo.loader";

export const AmmoPage = () => {
  const { name: ammoName, price } = useAmmoPageData();
  return (
    <>
      <h1>
        {ammoName}: {price.value}
      </h1>
    </>
  );
};
