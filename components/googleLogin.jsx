import Script from "next/script";

export default function GoogleLogin() {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
      <div
        id="g_id_onload"
        data-client_id="Y133688964144-uu4s377mpv9ctra1eo73v61th5336ng1.apps.googleusercontent.com"
        data-login_uri="https://easy-eating-three.vercel.app/"
        data-auto_prompt="false"></div>
      <div
        class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"></div>
    </>
  );
}
