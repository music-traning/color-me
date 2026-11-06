import type { Metadata } from "next";
import "./globals.css";

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
      {/* Webフォントの大量プリロード（約6.5MB）を廃止し、OS標準の丸ゴシック・ゴシック体で即座に描画 */}
      <body className="min-h-screen bg-[#EAE6EE] font-sans text-slate-800 antialiased">
        <div className="mobile-shell">{children}</div>
      </body>
    </html>
  );
}
