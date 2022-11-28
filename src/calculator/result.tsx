import styles from "./moa-result.module.css";

type MoaResultProps = {
  moa: number;
};

export const MoaResult = ({ moa }: MoaResultProps) => (
  <div className={styles.root}>{moa}</div>
);
