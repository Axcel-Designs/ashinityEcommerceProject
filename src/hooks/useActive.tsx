import { useState } from "react";

export default function useActive() {
  const [isActive, setActive] = useState<boolean>(false);

  const toggleActive = () => setActive((prev) => !prev);
  const activeTrue = () => setActive(true);
  const activeFalse = () => setActive(false);

  return {
    isActive,
    toggleActive,
    activeTrue,
    activeFalse,
  };
}
