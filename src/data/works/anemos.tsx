import { Work } from "@/components/work/types";

export const anemos: Work = {
  id: "anemos",
  slug: "anemos",
  title: "Anemos",
  date: "2024/05/11~",
  summary:
    "株式会社サポーターズ技育博24年5月出場, WingArc1st賞受賞. 公共機関のオープンデータを整形、集約、再配信を行うプラットフォーム",
  isPinned: false,
  role: "Backend / Infrastructure",
  technologies: ["TypeScript", "Public API", "Infrastructure"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          公共機関が公開するオープンデータは形式が統一されておらず、利用者がそれぞれ整形する必要がありました。
          この問題を解決するため、オープンデータを自動的に整形・集約し、再配信するプラットフォームを開発しました。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">主な機能</h2>
        <ul className="list-disc list-inside space-y-2 text-base-content/80">
          <li>複数の公共機関からオープンデータを自動収集</li>
          <li>データの正規化・整形処理</li>
          <li>統一されたAPIでのデータ提供</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">担当範囲</h2>
        <p className="text-base-content/80">
          PublicAPIの設計・実装、およびインフラ構築を担当しました。
        </p>
      </section>
    </div>
  ),
};
