import { useEffect } from "react";

export default function GoogleLogin() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
