import { MutableRefObject, RefObject } from "react";

export const useScrollToView = (
  ref: MutableRefObject<HTMLDivElement | undefined | null>,
  options: ScrollIntoViewOptions | undefined = {}
) => {
  const toView = () =>
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      ...options,
    });
  // run this function from an event handler or an effect to execute scroll

  return { toView };
};
