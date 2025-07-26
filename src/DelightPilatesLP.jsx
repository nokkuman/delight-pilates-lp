import React from "react";

export default function DelightPilatesLP() {
  return (
    <div className="font-sans text-gray-800">
      {/* ヒーローセクション */}
      <section className="bg-pink-100 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">ディライトピラティス</h1>
        <p className="text-lg md:text-2xl max-w-xl mx-auto">
          体を整え、女性らしいボディラインを取り戻し、前向きな毎日をつくる場所
        </p>
        <a
          href="https://example.com/reserve"
          className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600"
        >
          今すぐ体験予約
        </a>
      </section>

      {/* 特徴セクション */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">ディライトピラティスの特徴</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">完全マンツーマン</h3>
            <p>一人ひとりの悩みに寄り添った丁寧な指導で安心。</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">姿勢改善に特化</h3>
            <p>長年のクセを整え、健康で美しい姿勢へ導きます。</p>
          </div>
          <div className="bg-pink-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">女性専用空間</h3>
            <p>リラックスして通える、安心で清潔なスタジオ。</p>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">料金プラン</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xl font-semibold mb-4">体験1回：<span className="text-pink-600 font-bold">2,000円</span></p>
          <p className="mb-6">サブスクプラン（月額通い放題・週1〜2回）もご用意しています。</p>
          <a
            href="https://example.com/reserve"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600"
          >
            プランを詳しく見る・予約する
          </a>
        </div>
      </section>

      {/* アクセス・店舗情報 */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">アクセス</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-2">札幌市中央区○○ビル3F（札幌駅徒歩3分）</p>
          <iframe
            className="w-full h-64 rounded-xl border"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTAボタン固定 */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <a
          href="https://example.com/reserve"
          className="bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-700"
        >
          🌸 体験予約はこちら
        </a>
      </div>
    </div>
  );
}
