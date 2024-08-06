import { useEffect } from "react";

const FedCMLogin = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && "FederatedCredential" in window) {
      const identity = {
        providers: [
          {
            configURL:
              "https://accounts.google.com/.well-known/openid-configuration",
            clientId:
              "133688964144-uu4s377mpv9ctra1eo73v61th5336ng1.apps.googleusercontent.com",
          },
        ],
      };

      const abortController = new AbortController();
      const signal = abortController.signal;

      navigator.credentials
        .get({ identity, signal })
        .then((cred) => {
          console.log("FedCM success:", cred);
          // 處理憑證
        })
        .catch((error) => {
          console.error("FedCM error:", error);
          // 錯誤處理
        });

      return () => {
        abortController.abort();
      };
    }
  }, []);

  return null; // 或者返回一個後備UI
};

export default FedCMLogin;
