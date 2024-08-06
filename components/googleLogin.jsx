import { useEffect } from "react";

export default function GoogleLogin() {
  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="133688964144-uu4s377mpv9ctra1eo73v61th5336ng1.apps.googleusercontent.com"
        data-context="signin"
        data-login_uri="http://localhost:3001/"
        data-nonce=""
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"></div>
    </>
  );
}
