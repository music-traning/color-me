"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Sparkles,
  Camera,
  MessageCircle,
  Heart,
  Gift,
  ShieldCheck,
  ArrowRight,
  Frown,
  Wallet,
  Smartphone,
  Wand2,
  Check,
  Clock,
  Calendar,
  Lock,
} from "lucide-react";

/* =========================================================
   Framer Motion 共通アニメーション Variants
   ========================================================= */
const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
    },
  },
};

const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   LINE登録CTAボタン共通コンポーネント
   - font-extrabold + drop-shadow で背景グラデーションに沈まない高い視認性を確保
   ========================================================= */
interface ClayCtaButtonProps {
  href: string;
  label: string;
  external?: boolean;
}

function ClayCtaButton({ href, label, external = false }: ClayCtaButtonProps) {
  return (
    <div className="relative w-full">
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-primary/35 blur-md"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="animate-cta-attention hover:[animation-play-state:paused] active:[animation-play-state:paused]">
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          whileHover={{ y: -2 }}
          whileTap={{
            y: 5,
            scale: 0.97,
            boxShadow:
              "0 3px 6px -2px rgba(255, 107, 129, 0.28), 0 1px 3px -1px rgba(255, 107, 129, 0.15), inset 0 4px 8px 0 rgba(180, 40, 65, 0.3), inset 0 -2px 4px 0 rgba(255, 255, 255, 0.45)",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 22,
          }}
          className="btn-clay-primary relative w-full overflow-hidden py-4 text-base font-extrabold tracking-wide text-white"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer"
          />

          <MessageCircle className="relative z-10 h-5 w-5 shrink-0 fill-white/25 drop-shadow-sm" />
          <span className="relative z-10 font-extrabold drop-shadow-[0_1px_2px_rgba(160,30,55,0.45)]">
            {label}
          </span>
          <ArrowRight className="relative z-10 h-5 w-5 shrink-0 stroke-[2.5] drop-shadow-sm" />
        </motion.a>
      </div>
    </div>
  );
}

/* =========================================================
   Header Component
   ========================================================= */
function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-background/90 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 focus:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-primary text-white shadow-clay-primary transition-transform group-hover:rotate-6">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-slate-800">
            Color
            <span className="bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
              Me
            </span>
          </span>
          <span className="ml-0.5 rounded-full bg-secondary-lemon px-2.5 py-0.5 text-xs font-extrabold text-slate-800 shadow-clay-inset">
            AI診断
          </span>
        </a>

        <motion.a
          href="#cta"
          whileHover={{ y: -1.5 }}
          whileTap={{
            y: 3,
            scale: 0.96,
            boxShadow:
              "0 2px 4px -1px rgba(138, 118, 130, 0.14), inset 0 3px 5px 0 rgba(0, 0, 0, 0.12)",
          }}
          className="rounded-full bg-gradient-to-b from-secondary-mint-light to-secondary-mint px-4 py-2 text-xs font-extrabold text-slate-800 shadow-clay"
        >
          LINE先行登録
        </motion.a>
      </div>
    </header>
  );
}

/* =========================================================
   1. Hero Section
   - メインコピー（H1）を 32px・font-extrabold で最大限際立たせる
   - 直下のサブコピー（リード文）を text-gray-600 にワントーン落としジャンプ率を強調
   ========================================================= */
function HeroSection() {
  const seasons = [
    {
      name: "イエベ春",
      eng: "Spring",
      gradient: "from-[#FFE3B3] via-[#FFB5A7] to-[#FF8FA3]",
      swatches: ["#FF9E9E", "#FFD166", "#A8E6CF"],
      tag: "多幸感コーラル",
    },
    {
      name: "ブルベ夏",
      eng: "Summer",
      gradient: "from-[#E0C3FC] via-[#C2D3FF] to-[#B5E2FA]",
      swatches: ["#F4A9C7", "#B8C0FF", "#98F5E1"],
      tag: "透明感ラベンダー",
    },
    {
      name: "イエベ秋",
      eng: "Autumn",
      gradient: "from-[#F6D5B0] via-[#E6A176] to-[#D97F6C]",
      swatches: ["#D97F6C", "#E0A96D", "#8FB996"],
      tag: "こなれテラコッタ",
    },
    {
      name: "ブルベ冬",
      eng: "Winter",
      gradient: "from-[#F3C4FB] via-[#E56B8F] to-[#7251B5]",
      swatches: ["#E63976", "#7251B5", "#4CC9F0"],
      tag: "華やかベリー",
    },
  ];

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-8 pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-primary-light/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-64 -left-16 h-60 w-60 rounded-full bg-secondary-mint/30 blur-3xl"
      />

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* 公開時期バッジ */}
        <motion.div
          variants={heroItemVariants}
          className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-secondary-lemon-light px-4 py-1.5 text-xs font-bold text-slate-800 shadow-clay-inset"
        >
          <Calendar className="h-3.5 w-3.5 text-primary-dark" />
          <span>202X年◯月リリース予定・無料・アプリDLなし</span>
        </motion.div>

        {/* キャッチコピー群（ジャンプ率を高めたH1） */}
        <motion.div variants={heroItemVariants}>
          <p className="mb-2.5 inline-block rounded-2xl bg-white/90 px-4 py-1.5 text-base font-extrabold text-primary-dark shadow-clay-inset">
            ＼ スマホで3秒！AIパーソナルカラー診断 ／
          </p>

          <h1 className="mt-2 text-[32px] font-extrabold leading-[1.35] tracking-tight text-slate-900">
            似合う色がわかれば、
            <br />
            <span className="relative inline-block text-primary-dark">
              もっと可愛くなれる。
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-0 -z-10 h-3.5 w-full rounded-full bg-secondary-lemon/80"
              />
            </span>
          </h1>
        </motion.div>

        {/* 直下のサブコピー：メインコピーを引き立てるため文字色をワントーン落としつつ 16px(text-base) で可読性を確保 */}
        <motion.p
          variants={heroItemVariants}
          className="mt-4 text-base font-normal leading-relaxed text-gray-600"
        >
          LINEで顔写真を1枚送るだけで、4シーズン（春夏秋冬）をAIが無料診断！
          あなたに似合う「運命のカラー＆プチプラコスメ」がすぐに見つかります♡
        </motion.p>

        {/* 4シーズン分析ビジュアル */}
        <motion.div
          variants={heroItemVariants}
          className="card-clay mt-7 w-full bg-gradient-to-b from-white via-background-card to-[#FFF5F7] p-5"
        >
          <div className="mb-4 flex items-center justify-between rounded-2xl bg-background px-4 py-2.5 shadow-clay-inset">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary text-white">
                <Camera className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-bold text-slate-800">
                4シーズン分析（春夏秋冬）
              </span>
            </div>
            <span className="rounded-full bg-secondary-mint px-2.5 py-0.5 text-xs font-bold text-slate-800">
              解析完了 3.0s ✨
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {seasons.map((season) => (
              <motion.div
                key={season.name}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-white p-3 text-left shadow-clay"
              >
                <div
                  className={`mb-2.5 flex h-20 w-full flex-col justify-between rounded-xl bg-gradient-to-br ${season.gradient} p-2.5 shadow-clay-inset`}
                >
                  <span className="inline-block w-fit rounded-full bg-white/90 px-2 py-0.5 text-xs font-bold text-slate-800">
                    {season.eng}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {season.swatches.map((hex) => (
                      <span
                        key={hex}
                        style={{ backgroundColor: hex }}
                        className="h-4 w-4 rounded-full border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-base font-bold text-slate-800">
                  {season.name}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  {season.tag}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ファーストビューCTA */}
        <motion.div
          variants={heroItemVariants}
          className="mt-8 w-full space-y-2.5"
        >
          <p className="text-base font-extrabold text-primary-dark">
            ＼ 先着登録で「4シーズン別リップ早見表」をすぐにお届け🎁 ／
          </p>
          <ClayCtaButton
            href="#cta"
            label="LINE友だち追加して先行登録する"
          />
          <p className="text-sm font-medium text-gray-700">
            ※202X年◯月リリース時にLINEで優先案内が届きます（完全無料）
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   2. Problem Section（高コントラスト＆本文 16px = text-base 設計）
   ========================================================= */
function ProblemSection() {
  const problems = [
    {
      icon: Frown,
      iconBg: "from-[#FFD6E0] to-[#FF9E9E]",
      title: "「SNSで見た可愛いリップ、塗ってみたら顔色がくすんで見える…」",
      desc: "口コミやトレンドだけで選ぶと、自分の肌トーンと合わずにお蔵入りコスメが増えがち。",
    },
    {
      icon: Wallet,
      iconBg: "from-[#D8F8EE] to-[#8CE9C9]",
      title:
        "「対面でのパーソナルカラー診断には憧れるけど、料金が高くて手が出せない…」",
      desc: "診断にお金をかけるなら、新しいコスメや可愛い服をたくさん買いたいのが本音！",
    },
  ];

  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-t-[2.5rem] bg-background-surface px-6 py-12 shadow-clay-inset"
    >
      <motion.div variants={cardRevealVariants} className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-primary-dark shadow-sm">
          💭 Make-up Troubles
        </span>
        <h2 className="mt-3 text-xl font-extrabold leading-relaxed text-slate-800">
          「バズりコスメなのに、なんか似合わない…」
          <br />
          そんなモヤモヤ、ありませんか？
        </h2>
      </motion.div>

      {/* 厳選した2つの悩みカード */}
      <div className="mt-7 space-y-5">
        {problems.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              variants={cardRevealVariants}
              className="card-clay flex items-start gap-4 bg-background-card p-5"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.iconBg} text-slate-800 shadow-clay-inset`}
              >
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-extrabold leading-snug text-slate-800">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-700">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 解決へのブリッジボックス */}
      <motion.div
        variants={cardRevealVariants}
        className="mt-7 rounded-clay bg-gradient-to-r from-primary-light/30 via-secondary-lemon-light/70 to-secondary-mint-light/60 p-4 text-center shadow-clay"
      >
        <p className="text-base font-extrabold leading-relaxed text-slate-800">
          そのお悩み、すべて
          <span className="mx-1 rounded-lg bg-white px-2.5 py-0.5 text-primary-dark shadow-sm">
            『ColorMe』のAI診断
          </span>
          がサポートします✨
        </p>
      </motion.div>
    </motion.section>
  );
}

/* =========================================================
   3. Solution & USP Section（本文 text-base ＆ text-gray-700）
   ========================================================= */
function UspSection() {
  const reasons = [
    {
      number: "REASON 01",
      badgeStyle: "bg-primary-dark text-white",
      cardGradient: "from-[#FFF0F3] to-[#FFE3E8]",
      icon: Wand2,
      iconColor: "text-primary-dark",
      title:
        "4シーズン分析（春夏秋冬）！スマホの顔写真1枚でパーソナルカラーを無料診断",
      desc: "プロのパーソナルカラー理論をベースにしたAI診断が、あなたの肌・瞳・髪のバランスを分析。「イエベ春・ブルベ夏・イエベ秋・ブルベ冬」の4シーズンから、あなたに調和しやすいカラータイプを無料で診断します。",
      tags: ["完全無料", "色彩理論ベースのAI診断", "4シーズン分析（春夏秋冬）"],
    },
    {
      number: "REASON 02",
      badgeStyle: "bg-[#2E9E7B] text-white",
      cardGradient: "from-[#EAFCF5] to-[#D8F8EE]",
      icon: Heart,
      iconColor: "text-[#2E9E7B]",
      title:
        "もうドラッグストアで迷わない！似合う「プチプラコスメ」をピンポイント提案",
      desc: "「似合う色はわかったけど、結局どのコスメを買えばいいの？」そんな疑問もスッキリ解決。キャンメイク・セザンヌ・ロムアンドなど、10〜20代に人気のプチプラ＆韓国コスメから、あなたのシーズンに合うおすすめ品番をご提案します💄",
      tags: ["プチプラ＆韓国コスメ", "おすすめ品番がわかる", "コスメ選びが楽しくなる"],
    },
    {
      number: "REASON 03",
      badgeStyle: "bg-[#C99700] text-white",
      cardGradient: "from-[#FFFDF0] to-[#FFF6CC]",
      icon: Smartphone,
      iconColor: "text-[#B8860B]",
      title: "面倒なアプリDL・会員登録は一切ナシ！いつものLINEだけで完結",
      desc: "新しいアプリでスマホの容量を圧迫したり、メールアドレスやパスワードを登録したりする手間はゼロ。LINEのトーク画面で友だちと話す感覚で、いつでもどこでも診断結果や似合う色リストを見返せます。",
      tags: ["アプリ不要", "メアド登録なし", "LINEトーク完結"],
    },
  ];

  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="px-6 py-14"
    >
      <motion.div variants={cardRevealVariants} className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-mint-light px-3.5 py-1 text-xs font-bold text-slate-800 shadow-clay-inset">
          🌈 Why ColorMe?
        </span>
        <h2 className="mt-3 text-xl font-extrabold leading-relaxed text-slate-800">
          はじめてでも気軽に試せる！
          <br />
          <span className="text-primary-dark">『ColorMe』</span>が選ばれる3つの理由
        </h2>
      </motion.div>

      <div className="mt-9 space-y-7">
        {reasons.map((reason) => {
          const IconComponent = reason.icon;
          return (
            <motion.article
              key={reason.number}
              variants={cardRevealVariants}
              className="card-clay space-y-4 p-6"
            >
              <div
                className={`relative flex h-36 w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${reason.cardGradient} p-4 shadow-clay-inset`}
              >
                <span
                  className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${reason.badgeStyle}`}
                >
                  {reason.number}
                </span>
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                  className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-clay"
                >
                  <IconComponent className={`h-8 w-8 ${reason.iconColor}`} />
                </motion.div>
                <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
                  {reason.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-bold text-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-extrabold leading-snug text-slate-800">
                {reason.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                {reason.desc}
              </p>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}

/* =========================================================
   4. Flow & LINE Preview Section（本文 text-base ＆ 高コントラスト）
   ========================================================= */
function FlowSection() {
  const steps = [
    {
      step: "STEP 1",
      title: "LINE公式アカウントを友だち追加",
      desc: "まずは下のボタンから『ColorMe』を友だち追加！現在、202X年◯月のリリースに向けた無料先行登録を受け付け中です。",
      icon: MessageCircle,
      badgeBg: "bg-secondary-mint",
    },
    {
      step: "STEP 2",
      title: "スマホで顔写真を1枚送信",
      desc: "サービス公開後、LINEのトーク画面から自然光で撮った顔写真を1枚送信します（カメラロールの写真でもOK！）。",
      icon: Camera,
      badgeBg: "bg-secondary-lemon",
    },
    {
      step: "STEP 3",
      title: "スマホで3秒！AIパーソナルカラー診断＆似合うコスメが届く",
      desc: "4シーズン分析（春夏秋冬）の診断カルテと、普段のお買い物ですぐ参考にできる「似合うプチプラコスメ一覧」がLINEに届きます♡",
      icon: Sparkles,
      badgeBg: "bg-primary-light text-white",
    },
  ];

  const recommendedCosmetics = [
    {
      brand: "ロムアンド",
      item: "ジューシーラスティングティント #11 ピンクパンプキン",
      swatch: "#FF828B",
    },
    {
      brand: "キャンメイク",
      item: "シルキースフレアイズ #07 ネクタリンオレンジ",
      swatch: "#FFA987",
    },
  ];

  return (
    <motion.section
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="rounded-[2.5rem] bg-background-surface px-6 py-14 shadow-clay-inset"
    >
      <motion.div variants={cardRevealVariants} className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-slate-800 shadow-sm">
          📱 Easy 3 Steps
        </span>
        <h2 className="mt-3 text-xl font-extrabold leading-relaxed text-slate-800">
          使い方はとってもカンタン！
          <br />
          3ステップであなたの「似合う」が見つかる
        </h2>
      </motion.div>

      {/* 3ステップ・タイムライン */}
      <div className="mt-8 space-y-5">
        {steps.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.step}
              variants={cardRevealVariants}
              className="relative"
            >
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute left-9 top-20 -bottom-5 w-0.5 border-l-2 border-dashed border-primary/50"
                />
              )}

              <div className="card-clay relative z-10 flex items-start gap-4 p-5">
                <div
                  className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl ${item.badgeBg} text-slate-800 shadow-clay-inset`}
                >
                  <IconComponent className="h-6 w-6" />
                </div>

                <div className="flex-1 space-y-1.5">
                  <span className="inline-block rounded-full bg-background px-2.5 py-0.5 text-xs font-bold text-primary-dark">
                    {item.step}
                  </span>
                  <h3 className="text-base font-extrabold leading-snug text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 顔写真プライバシー保護の目立つ注記ボックス */}
      <motion.div
        variants={cardRevealVariants}
        className="mt-6 rounded-2xl border-2 border-secondary-mint-dark bg-white p-4 shadow-clay"
      >
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary-mint-light text-slate-800 shadow-clay-inset">
            <Lock className="h-5 w-5 text-[#2E9E7B]" />
          </span>
          <div className="space-y-1">
            <p className="text-base font-extrabold text-slate-800">
              🔒 顔写真のプライバシー保護について
            </p>
            <p className="text-base font-bold leading-relaxed text-primary-dark">
              ※送信された顔写真は診断後、即時システムから完全に破棄され、保存されることはありません。
            </p>
          </div>
        </div>
      </motion.div>

      {/* 診断の具体性：LINEトーク画面での診断結果イメージUI */}
      <motion.div variants={cardRevealVariants} className="mt-10">
        <div className="mb-4 text-center">
          <span className="inline-block rounded-full bg-secondary-lemon px-4 py-1 text-xs font-extrabold text-slate-800 shadow-clay-inset">
            💬 こんな診断カルテがLINEに届きます
          </span>
        </div>

        {/* LINEトーク風モックアップコンテナ */}
        <div className="overflow-hidden rounded-clay bg-[#DCE6F2] p-4 shadow-clay-card">
          {/* トークヘッダー */}
          <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-dark text-white">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-extrabold text-slate-800">
                ColorMe AI診断公式
              </span>
            </div>
            <span className="rounded-full bg-secondary-mint-light px-2.5 py-0.5 text-xs font-bold text-slate-800">
              LINEトーク画面イメージ
            </span>
          </div>

          <div className="space-y-3.5">
            {/* ユーザーの送信バブル（右側） */}
            <div className="flex justify-end">
              <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-[#8CE99A] px-3.5 py-2.5 text-left shadow-sm">
                <p className="flex items-center gap-2 text-base font-bold text-slate-800">
                  <Camera className="h-4 w-4 shrink-0" />
                  <span>顔写真を送信しました🔒</span>
                </p>
              </div>
            </div>

            {/* AIの返信バブル（左側：カラーパレット＆おすすめコスメ） */}
            <div className="flex items-start gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
              </div>

              <div className="flex-1 rounded-2xl rounded-tl-sm bg-white p-4 text-left shadow-clay">
                <div className="flex items-center justify-between border-b border-background pb-2.5">
                  <div>
                    <p className="text-xs font-bold text-gray-700">
                      あなたの4シーズン診断結果
                    </p>
                    <p className="text-base font-extrabold text-primary-dark">
                      🌸 イエベ春（Spring）タイプ
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary-lemon-light px-2.5 py-1 text-xs font-bold text-slate-800">
                    多幸感コーラル
                  </span>
                </div>

                {/* 似合うカラーパレット */}
                <div className="mt-3">
                  <p className="mb-1.5 text-sm font-extrabold text-slate-800">
                    🎨 あなたの魅力を引き立てる似合わせパレット
                  </p>
                  <div className="flex items-center gap-2 rounded-xl bg-background p-2.5 shadow-clay-inset">
                    {[
                      { hex: "#FF8FA3", name: "コーラル" },
                      { hex: "#FFB5A7", name: "ピーチ" },
                      { hex: "#FFD166", name: "イエロー" },
                      { hex: "#A8E6CF", name: "ミント" },
                    ].map((c) => (
                      <div
                        key={c.hex}
                        className="flex flex-1 flex-col items-center gap-1"
                      >
                        <span
                          style={{ backgroundColor: c.hex }}
                          className="h-7 w-7 rounded-full border-2 border-white shadow-sm"
                        />
                        <span className="text-xs font-bold text-gray-700">
                          {c.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* おすすめプチプラコスメ提案 */}
                <div className="mt-3.5">
                  <p className="mb-1.5 text-sm font-extrabold text-slate-800">
                    💄 あなたに似合うプチプラコスメ提案
                  </p>
                  <div className="space-y-2">
                    {recommendedCosmetics.map((cosme) => (
                      <div
                        key={cosme.item}
                        className="flex items-center gap-2.5 rounded-xl bg-[#FFF5F7] px-3 py-2.5"
                      >
                        <span
                          style={{ backgroundColor: cosme.swatch }}
                          className="h-5 w-5 shrink-0 rounded-full border-2 border-white shadow-sm"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-extrabold text-primary-dark">
                            {cosme.brand}
                          </p>
                          <p className="truncate text-sm font-bold text-slate-800">
                            {cosme.item}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

/* =========================================================
   5. CTA Section（高コントラスト＆単一CTAに集約）
   ========================================================= */
function CtaSection() {
  const perks = [
    "【今すぐ届く】4シーズン別「似合うプチプラリップ早見表」",
    "【先着特典】公開時に待ち時間なしで試せる「優先診断案内」",
  ];

  return (
    <motion.section
      id="cta"
      variants={sectionRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-12"
    >
      <motion.div
        variants={cardRevealVariants}
        className="card-clay relative overflow-hidden bg-gradient-to-b from-[#FFF5F7] via-white to-[#FFFBE8] p-6 text-center"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-lemon px-4 py-1 text-xs font-extrabold text-slate-800 shadow-clay-inset">
          <Gift className="h-3.5 w-3.5 text-primary-dark" />
          <span>202X年◯月リリース予定｜先行予約受付中</span>
        </span>

        <h2 className="mt-4 text-2xl font-extrabold leading-relaxed text-slate-900">
          似合う色がわかれば、
          <br />
          <span className="text-primary-dark">もっと可愛くなれる♡</span>
        </h2>

        {/* 先着特典リスト */}
        <div className="mt-5 rounded-2xl bg-white p-4 text-left shadow-clay-inset">
          <ul className="space-y-2.5">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-start gap-2 text-base font-bold text-slate-800"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-mint text-slate-800">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 単一のシンプルなメインCTAボタン */}
        <div className="mt-6 space-y-3">
          <ClayCtaButton
            href="https://line.me/"
            label="【無料】LINE友だち追加して先行登録する"
            external
          />

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1 text-sm font-medium text-gray-700">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-[#2E9E7B]" />
              完全無料・いつでもブロックOK
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary-dark" />
              約10秒で完了
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

/* =========================================================
   Footer Component
   ========================================================= */
function Footer() {
  return (
    <footer className="border-t border-white/60 px-6 pt-6 pb-12 text-center text-gray-700">
      <div className="mb-3 flex items-center justify-center gap-1.5 text-base font-extrabold text-slate-800">
        <Sparkles className="h-4 w-4 text-primary-dark" />
        <span>ColorMe（カラーミー）</span>
      </div>

      {/* 法務・信頼性リンク */}
      <nav
        aria-label="フッターナビゲーション"
        className="mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-bold text-slate-800"
      >
        <a
          href="#"
          className="underline-offset-4 hover:text-primary-dark hover:underline"
        >
          運営者情報
        </a>
        <a
          href="#"
          className="underline-offset-4 hover:text-primary-dark hover:underline"
        >
          プライバシーポリシー
        </a>
        <a
          href="#"
          className="underline-offset-4 hover:text-primary-dark hover:underline"
        >
          利用規約
        </a>
      </nav>

      <p className="text-sm leading-relaxed text-gray-700">
        ※診断結果はパーソナルカラー理論に基づくAIの分析結果であり、特定の効果を保証するものではありません。
      </p>
      <p className="mt-2 text-xs text-gray-600">
        © {new Date().getFullYear()} ColorMe AI Personal Color Service. All
        rights reserved.
      </p>
    </footer>
  );
}

/* =========================================================
   Main Page Component
   ========================================================= */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <UspSection />
      <FlowSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
