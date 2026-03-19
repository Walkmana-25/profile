import { Work } from "@/components/work/types";

export const taskukeru: Work = {
  id: "taskukeru",
  slug: "taskukeru",
  title: "たすくをたすく",
  date: "2023/05/20~2023/05/21",
  summary:
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol3出場. OpenAI APIを利用したタスク管理アプリ",
  isPinned: false,
  role: "Backend",
  technologies: ["TypeScript", "OpenAI API"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          OpenAI APIを活用し、タスクの優先順位付けや提案を自動化するタスク管理アプリケーションを開発しました。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">担当範囲</h2>
        <p className="text-base-content/80">バックエンドの設計・実装を担当しました。</p>
      </section>
    </div>
  ),
};
