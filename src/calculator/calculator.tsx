import { ChangeEvent } from "react";
import { FormGroup } from "../shared/form-group/form-group";
import { AppInput } from "../shared/input/input";
import { AppLabel } from "../shared/label/label";
import { MoaResult } from "./Result";
import { useMoaCalculator } from "./useMoaCalculator";

export const MoaCalculator = () => {
  const { distance, setDistance, setSpread, spread, moa } = useMoaCalculator();

  const handleSpreadChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSpread(e.target.value);

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDistance(e.target.value);

  return (
    <>
      <h1 className="text-3xl mb-4 text-white">MOA calculator</h1>
      <FormGroup>
        <AppInput
          id="spread"
          onChange={handleSpreadChange}
          value={spread}
          required
        />
        <AppLabel htmlFor="spread" text="Spread(mm)" />
      </FormGroup>

      <FormGroup>
        <AppInput
          id="distance"
          onChange={handleDistanceChange}
          value={distance}
          required
        />
        <AppLabel htmlFor="distance" text="Distance" />
      </FormGroup>

      <MoaResult moa={moa} />
    </>
  );
};
