import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: 明るく親しみやすいコーラルピンク
        primary: {
          light: "#FF9E9E",
          DEFAULT: "#FF6B81",
          dark: "#E8556B",
        },
        // Secondary: パステル系のミントグリーン・レモンイエロー
        secondary: {
          mint: {
            light: "#D8F8EE",
            DEFAULT: "#8CE9C9",
            dark: "#5DD3AC",
          },
          lemon: {
            light: "#FFF9DB",
            DEFAULT: "#FFE875",
            dark: "#F2D54E",
          },
        },
        // Background: クレイモーフィズムの立体感が際立つオフホワイト〜ウォームグレー系
        background: {
          DEFAULT: "#F6F4F8",
          surface: "#EFECE6",
          card: "#FAF9FC",
        },
        // Text: 黒すぎない柔らかいチャコールブラウン系
        ink: {
          DEFAULT: "#3A3238",
          muted: "#7D7279",
          light: "#A89EA4",
        },
      },
      boxShadow: {
        // 外側のソフトなドロップシャドウ
        clay: "0 12px 24px -4px rgba(138, 118, 130, 0.16), 0 4px 10px -2px rgba(138, 118, 130, 0.08)",
        // 内側の明るいハイライト（立体感を出すためのinsetシャドウ）
        "clay-inset":
          "inset 0 4px 6px 0 rgba(255, 255, 255, 0.75), inset 0 -5px 8px 0 rgba(0, 0, 0, 0.08)",
        // カード用の外＋内複合シャドウ
        "clay-card":
          "0 14px 28px -6px rgba(138, 118, 130, 0.15), 0 4px 10px -2px rgba(138, 118, 130, 0.06), inset 0 3px 6px 0 rgba(255, 255, 255, 0.85), inset 0 -4px 6px 0 rgba(138, 118, 130, 0.08)",
        // プライマリボタン（コーラルピンク）専用の鮮やかなグロウ付きシャドウ
        "clay-primary":
          "0 12px 24px -4px rgba(255, 107, 129, 0.42), 0 4px 8px -2px rgba(255, 107, 129, 0.2), inset 0 4px 6px 0 rgba(255, 255, 255, 0.65), inset 0 -5px 8px 0 rgba(210, 60, 85, 0.25)",
        // プライマリボタン押下時（外側のシャドウが小さくなり、内側の影が深まる物理的な沈み込み表現）
        "clay-primary-pressed":
          "0 3px 6px -2px rgba(255, 107, 129, 0.28), 0 1px 3px -1px rgba(255, 107, 129, 0.15), inset 0 4px 8px 0 rgba(180, 40, 65, 0.28), inset 0 -2px 4px 0 rgba(255, 255, 255, 0.45)",
        // 汎用ボタン押下時
        "clay-pressed":
          "0 3px 6px -2px rgba(138, 118, 130, 0.14), inset 0 3px 6px 0 rgba(0, 0, 0, 0.12), inset 0 -2px 4px 0 rgba(255, 255, 255, 0.5)",
      },
      borderRadius: {
        clay: "1.75rem",
      },
      keyframes: {
        // 数秒おきに軽くバウンド＆脈打つCTAアテンションアニメーション
        "cta-attention": {
          "0%, 70%, 100%": {
            transform: "translateY(0) scale(1)",
          },
          "78%": {
            transform: "translateY(-5px) scale(1.02)",
          },
          "86%": {
            transform: "translateY(1px) scale(0.995)",
          },
          "93%": {
            transform: "translateY(-2px) scale(1.01)",
          },
        },
        // ボタン表面をキラッと流れるツヤ（シマー効果）
        shimmer: {
          "0%, 65%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
      },
      animation: {
        "cta-attention": "cta-attention 3.6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite",
        shimmer: "shimmer 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
