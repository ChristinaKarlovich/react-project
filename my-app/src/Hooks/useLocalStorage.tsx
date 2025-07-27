import { useState } from "react";

function useLocalStorage(query: string) {
  const [lsValue, setLsValue] = useState(() => {
    return localStorage.getItem(query) as string;
  });

  return [lsValue, setLsValue];
}

export default useLocalStorage;
