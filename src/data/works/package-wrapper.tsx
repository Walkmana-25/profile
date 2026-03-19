import { Work } from "@/components/work/types";

export const packageWrapper: Work = {
  id: "package-wrapper",
  slug: "package-wrapper",
  title: "Package Wrapper",
  date: "2023/12/02~2023/12/03",
  summary:
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol12出場. Rustを使用したLinuxのパッケージ管理システムのラッパー",
  isPinned: false,
  role: "Full Stack",
  technologies: ["Rust", "Linux"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          Linuxのパッケージ管理はディストリビューションごとに異なるツールを使用する必要があり、
          クロスディストリビューションでの管理が困難でした。
          この問題を解決するため、統一的なインターフェースを提供するラッパーをRustで開発しました。
        </p>
      </section>
    </div>
  ),
};
