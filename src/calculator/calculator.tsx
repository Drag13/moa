import { ChangeEvent } from "react";
import { FormGroup } from "../shared/form-group/form-group";
import { AppInput } from "../shared/input/input";
import { AppLabel } from "../shared/label/label";
import { MoaResult } from "./result";
import { useMoaCalculator } from "./useMoaCalculator";

export const MoaCalculator = () => {
  const { distance, setDistance, setSpread, spread, moa } = useMoaCalculator();

  const handleSpreadChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSpread(e.target.value);

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDistance(e.target.value);

  return (
    <>
      <FormGroup>
        <AppLabel htmlFor="spread" text="Spread(mm)" />
        <AppInput
          id="spread"
          onChange={handleSpreadChange}
          value={spread}
          placeholder="Spread in mm"
        />
      </FormGroup>

      <FormGroup>
        <AppLabel htmlFor="distance" text="Distance" />
        <AppInput
          id="distance"
          onChange={handleDistanceChange}
          value={distance}
          placeholder="Distance in m"
        />
      </FormGroup>

      <MoaResult moa={moa} />
    </>
  );
};
