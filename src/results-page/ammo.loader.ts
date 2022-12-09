import ammoData from "../data/ammo.json";

type Ammo = {
  id: string;
  name: string;
  velocity: number;
  price: number;
};

const mapAmmosDto = (ammos: unknown): Ammo[] => {
  if (!Array.isArray(ammos)) {
    return [];
  }

  return ammos.map((ammo) => ({
    id: ammo.id,
    name: ammo.name,
    velocity: ammo.velocity,
    price: ammo.prices.at(-1),
  }));
};

export const ammoLoader = () => {
  return Promise.resolve(ammoData).then(mapAmmosDto);
};
