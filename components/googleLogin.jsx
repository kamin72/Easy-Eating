import { useEffect } from "react";

export default function GoogleLogin() {
  if ("FederatedCredential" in window) {
    const identity = {
      providers: [
        {
          configURL:
            "https://accounts.google.com/.well-known/openid-configuration",
          clientId: "YOUR_CLIENT_ID",
        },
      ],
    };

    navigator.credentials
      .get({ identity })
      .then((cred) => {
        // 處理憑證
        console.log(cred);
      })
      .catch((error) => {
        console.error("FedCM error:", error);
        // 在這裡處理錯誤，可能需要回退到其他登錄方法
      });
  } else {
    console.log("FedCM not supported");
    // 使用替代的登錄方法
  }
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="133688964144-uu4s377mpv9ctra1eo73v61th5336ng1.apps.googleusercontent.com"
        data-context="signin"
        data-login_uri="https://easy-eating-kamin72s-projects.vercel.app/"
        data-nonce=""
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"></div>
    </>
  );
}
