import { Work } from "@/components/work/types";

export const mcbeManagementV2: Work = {
  id: "mcbe-management-v2",
  slug: "mcbe-management-v2",
  title: "MCBE Management v2",
  date: "2022",
  summary: "Pythonで書き直したMinecraftサーバー管理用ソフトウェア",
  isPinned: false,
  role: "Full Stack",
  technologies: ["Python"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          以前作成したMinecraftサーバー管理用スクリプトをPythonでリライトし、
          機能拡張と保守性の向上を図りました。
        </p>
      </section>
    </div>
  ),
};
