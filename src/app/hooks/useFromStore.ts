import { useEffect, useState } from "react";
//this hook prevents hydration issues by mounting the result of zustand local storage values before component mounts. This issue is only experienced when we use the persist option.
const useFromStore = (store: any, callbackToRetrieveStoreItem: () => void) => {
  const [state, setState] = useState();

  const stateOfStore = store(callbackToRetrieveStoreItem);
  useEffect(() => {
    setState(stateOfStore);
  }, [callbackToRetrieveStoreItem, stateOfStore, store]);

  return state;
};

export default useFromStore;
