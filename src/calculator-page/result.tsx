type MoaResultProps = {
  moa: number;
};

export const MoaResult = ({ moa }: MoaResultProps) => (
  <div className="text-white text-2xl border p-4 text-center rounded-md">
    Result in MOA: {moa === 0 ? 0 : moa.toFixed(2)}
  </div>
);
