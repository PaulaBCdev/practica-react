import clsx from "clsx";

interface SellBuyTagProps {
  className?: string;
  sale: boolean;
}

const SellBuyTag = ({ className, sale }: SellBuyTagProps) => {
  const adType = sale ? "sell" : "buy";
  return (
    <p className={clsx("ad-type", adType, className)}>{adType.toUpperCase()}</p>
  );
};

export default SellBuyTag;
