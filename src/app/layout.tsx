import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ColorMe（カラーミー）| AIパーソナルカラー診断",
  description:
    "スマホで撮るだけ3秒！AIがあなたの魅力を引き出すパーソナルカラーを診断します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* PC表示時は外側に淡いグラデーション背景を敷き、中央の max-w-md コンテナを際立たせる */}
      <body
        className={`${zenMaruGothic.className} min-h-screen bg-[#EAE6EE] text-slate-800 antialiased`}
      >
        <div className="mobile-shell">{children}</div>
      </body>
    </html>
  );
}
