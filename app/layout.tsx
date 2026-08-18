import type { Metadata } from "next";
import "./globals.css";
import "./extras.css";
import "./booking.css";
import "./hero-carousel.css";

export const metadata: Metadata = {
  title: "An Nhiên Retreat | Chạm vào khoảng lặng",
  description:
    "Khu nghỉ dưỡng giữa đại ngàn, nơi mỗi kỳ nghỉ trở thành một nhịp thở sâu.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
