import { Work } from "@/components/work/types";

export const atme: Work = {
  id: "atme",
  slug: "atme",
  title: "@me",
  date: "2024/02/24~2024/02/25",
  summary:
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol15出場. あらゆるクラウドサービスと同期し、１日にやらなければ行けないタスクを提案するアプリケーション",
  isPinned: false,
  role: "Backend",
  technologies: ["TypeScript", "API Integration"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          複数のクラウドサービスを利用していると、タスクが分散して管理が難しくなります。
          この問題を解決するため、各サービスと同期し、1日のタスクを統合的に提案するアプリケーションを開発しました。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-3">担当範囲</h2>
        <p className="text-base-content/80">バックエンドの設計・実装を担当しました。</p>
      </section>
    </div>
  ),
};
