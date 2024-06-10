import clsx from "clsx";
import { FC, HTMLAttributes, ReactElement } from "react";

type TProps = HTMLAttributes<HTMLImageElement> & {
  cdn: string;
  children: ReactElement;
};

export const Hero: FC<TProps> = ({ cdn, children, className, ...args }) => (
  <div className="z-4 relative text-white">
    <img
      className={clsx("rounded-3xl max-h-[400px] w-[100%] object-cover", {
        [className as string]: className !== undefined,
      })}
      src={cdn}
      alt="Hero"
      {...args}
    />
    <div className="absolute rounded-3xl z-2 top-0 w-[100%] h-[100%] bg-black/60" />
    <div className="absolute z-3 top-[50%] w-[100%]">{children}</div>
  </div>
);
