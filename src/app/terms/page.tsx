import type { Metadata } from "next";
import { PageShell, PageKicker, PageTitle } from "@/components/lyra/PageShell";

export const metadata: Metadata = {
  title: "Điều khoản & Bảo mật — Lyra",
  description:
    "Điều khoản sử dụng và chính sách bảo mật của Lyra — tài khoản AuthMe, mua hàng & hoàn tiền, quy tắc ứng xử, dữ liệu cá nhân, thanh toán và miễn trừ.",
};

type TermsSection = {
  readonly h: string;
  readonly p: string;
};

const LAST_UPDATED = "Cập nhật lần cuối: 26/07/2026";

const SECTIONS: readonly TermsSection[] = [
  {
    h: "1. Tài khoản",
    p: "Tài khoản game được tạo trực tiếp trong server bằng lệnh /register và đăng nhập bằng /login (AuthMe). Mỗi người chơi chịu trách nhiệm về tài khoản và tên trong game (IGN) của mình. Không chia sẻ mật khẩu; Lyra không bao giờ hỏi mật khẩu của bạn qua chat hay Discord.",
  },
  {
    h: "2. Mua hàng & hoàn tiền",
    p: "Rank và badge trên Store là hàng hóa kỹ thuật số, được staff kích hoạt thủ công trong vòng 24 giờ sau khi xác nhận thanh toán; mọi giao dịch đều được log công khai tại kênh #nap-log trên Discord. Giao dịch đã kích hoạt không được hoàn tiền, trừ trường hợp lỗi hệ thống được xác nhận bởi đội ngũ hỗ trợ trong vòng 7 ngày.",
  },
  {
    h: "3. Quy tắc ứng xử",
    p: "Nghiêm cấm hack/cheat, quảng cáo server khác, lừa đảo giao dịch và ngôn từ thù ghét. Vi phạm có thể bị mute, tạm khóa hoặc cấm vĩnh viễn tùy mức độ, không hoàn lại vật phẩm đã mua.",
  },
  {
    h: "4. Dữ liệu cá nhân",
    p: "Lyra chỉ lưu IGN, mật khẩu đã mã hóa một chiều (AuthMe) và lịch sử giao dịch nạp để vận hành dịch vụ. Chúng tôi không bán dữ liệu cho bên thứ ba. Bạn có thể yêu cầu xóa tài khoản và dữ liệu qua Discord hỗ trợ.",
  },
  {
    h: "5. Thanh toán",
    p: "Trong giai đoạn beta, thanh toán được xử lý thủ công qua ticket trên Discord (VietQR hoặc MoMo) và có log công khai tại #nap-log. Cổng thanh toán tự động (Tebex) sẽ được bổ sung sau. Lyra không lưu số thẻ hay thông tin thanh toán nhạy cảm trên máy chủ của mình.",
  },
  {
    h: "6. Miễn trừ",
    p: "Lyra là máy chủ cộng đồng, không liên kết với Mojang hay Microsoft. Dịch vụ có thể gián đoạn để bảo trì; chúng tôi sẽ thông báo trước trên Discord và Forums khi có thể. Resource world reset theo mùa luôn được báo trước ít nhất 7 ngày — town và công trình của bạn không bao giờ bị xóa.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <PageKicker>PHÁP LÝ</PageKicker>
        <PageTitle>Điều khoản &amp; Bảo mật</PageTitle>
        <div
          style={{
            fontSize: 12.5,
            color: "#626b7a",
            margin: "8px 0 40px",
          }}
        >
          {LAST_UPDATED}
        </div>
        {SECTIONS.map((s) => (
          <div key={s.h} style={{ marginBottom: 34 }}>
            <h2
              className="font-display"
              style={{
                fontWeight: 700,
                fontSize: 18,
                margin: "0 0 12px",
                color: "#E6EBF4",
              }}
            >
              {s.h}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                color: "#9aa3b5",
                lineHeight: 1.75,
                margin: 0,
                textWrap: "pretty",
              }}
            >
              {s.p}
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
