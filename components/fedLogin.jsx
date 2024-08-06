import { useEffect, useState } from "react";

export default function FedCMLogin() {
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("FederatedCredential" in window) {
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

      const options = {
        identity,
        mediation: "optional", // 或 'required'
        signal: AbortSignal.timeout(10000), // 10 秒超時
      };

      navigator.credentials
        .get(options)
        .then((cred) => {
          console.log("FedCM success:", cred);
          // 處理憑證
        })
        .catch((error) => {
          console.error("FedCM error:", error);
          setError(error.message);
          if (error.name === "IdentityCredentialError") {
            console.log(
              "Error retrieving token. Falling back to traditional sign-in."
            );
            // 實現傳統的 Google 登錄按鈕作為備選
          }
        });
    }
  }, []);

  if (error) {
    return <div>Error: {error}. Please try traditional sign-in.</div>;
  }

  return null; // 或返回一個按鈕觸發登錄
}
