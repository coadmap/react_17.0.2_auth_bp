import { useCallback, useContext } from "react";
import { currentAccountContext } from "hooks/useCurrentAccount/currentAccountContext";
import { HttpClient } from "lib/axios";
import { Account } from "data/account";
import { APIHost } from "constants/APIHost";

interface CurrentAccountUseCase {
  account?: Account;
  isLoggedIn: boolean;
  refetchAccount: (id?: string) => Promise<void>;
  signOut: () => void;
}

export const useCurrentAccount = (): CurrentAccountUseCase => {
  const { account, isLoggedIn, setAccount, setIsLoggedIn } = useContext(currentAccountContext);

  const refetchAccount = useCallback(
    async (id?: string) => {
      const accountId = id ?? account?.id;

      if (!accountId) return;

      await HttpClient.request<Account>({
        method: "GET",
        url: `${APIHost.APP}/accounts/${accountId}`,
      }).then((res) => {
        setAccount(res.data);
        setIsLoggedIn(true);
      });
    },
    [account, HttpClient, setAccount, setIsLoggedIn]
  );

  const signOut = useCallback(() => {
    localStorage.clear();
    setIsLoggedIn(false);
    setAccount(undefined);
  }, [setIsLoggedIn, setAccount]);

  return { account, isLoggedIn, refetchAccount, signOut };
};
