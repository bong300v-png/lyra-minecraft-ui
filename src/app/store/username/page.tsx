import { Suspense } from "react";
import StoreUsernameClient from "./StoreUsernameClient";

export default function StoreUsernamePage() {
  return (
    <Suspense fallback={<div style={{color:"#fff",padding:40,textAlign:"center"}}>Đang tải cửa hàng…</div>}>
      <StoreUsernameClient />
    </Suspense>
  );
}
