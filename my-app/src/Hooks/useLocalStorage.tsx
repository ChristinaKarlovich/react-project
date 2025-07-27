import { useState } from "react";

function useLocalStorage(query: string) {
  return useState(() => {
    return localStorage.getItem(query) as string;
  });
}

export default useLocalStorage;
