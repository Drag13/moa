type MoaResultProps = {
  moa: number;
};

export const MoaResult = ({ moa }: MoaResultProps) => (
  <div className="">Result in MOA: {moa === 0 ? 0 : moa.toFixed(2)}</div>
);
