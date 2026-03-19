import { Work } from "@/components/work/types";

export const unpacker: Work = {
  id: "unpacker",
  slug: "unpacker",
  title: "Unpacker",
  date: "2023/02/11~2023/03/04",
  summary:
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol11最優秀賞受賞, 技育CAMPアドバンス副大賞受賞. ブラウザブックマークをZero Shot Classificationを利用し自動で分類を行うソフトウェア",
  isPinned: true,
  role: "Backend",
  technologies: ["TypeScript", "Machine Learning", "Zero Shot Classification"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          ブラウザのブックマークは整理されず、大量の未分類ブックマークが溜まりがちです。
          この問題を解決するため、Zero Shot Classificationを活用してブックマークを自動分類するソフトウェアを開発しました。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">受賞歴</h2>
        <ul className="list-disc list-inside space-y-2 text-base-content/80">
          <li>技育CAMPオンラインハッカソンvol11 最優秀賞</li>
          <li>技育CAMPアドバンス 副大賞</li>
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">担当範囲</h2>
        <p className="text-base-content/80">バックエンドの設計・実装を担当しました。</p>
      </section>
    </div>
  ),
};
