import { Work } from "@/components/work/types";

export const mcbeManagement: Work = {
  id: "mcbe-management",
  slug: "mcbe-management",
  title: "MCBE Management",
  date: "2018~2021",
  summary: "中学生の時に作成した、Minecraftサーバー管理用スクリプト",
  isPinned: false,
  role: "Full Stack",
  technologies: ["Batch", "Shell Script"],
  content: (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold mb-3">プロジェクトの背景</h2>
        <p className="text-base-content/80">
          中学生の頃に初めて作成した本格的なプログラム。
          Minecraft Bedrock Editionのサーバーを簡単に管理するためのスクリプト集です。
        </p>
      </section>
    </div>
  ),
};
