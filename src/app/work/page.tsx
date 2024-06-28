import { FaExternalLinkAlt } from "react-icons/fa";

const timeLineContent = [
  [
    "2024/05/11~",
    "👑Anemos",
    "株式会社サポーターズ技育博24年5月出場,WingArc1st賞受賞, 公共機関のオープンデータを整形、集約、再配信を行うプラットフォーム, PublicAPI, インフラ担当",
  ],
  [
    "2024/02/24~2024/02/25",
    "@me",
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol15出場, あらゆるクラウドサービスと同期し、１日にやらなければ行けないタスクを提案するアプリケーション, バックエンド担当",
  ],
  [
    "2023/12/02~2023/12/03",
    "Package Wrapper",
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol12出場, Rustを使用したLinuxのパッケージ管理システムのラッパー",
  ],
  [
    "2023/05/20~2023/05/21",
    "たすくをたすく",
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol3出場, OpenAI APIを利用したタスク管理アプリ、バックエンド担当",
  ],
  [
    "2023/02/11~2023/02/12, 2023/03/04",
    "👑Unpacker",
    "株式会社サポーターズ技育CAMPオンラインハッカソンvol11最優秀賞受賞, 技育CAMPアドバンス副大賞受賞、ブラウザブックマークをZero Shot Classificationを利用し自動で分類を行うソフトウェアの作成、バックエンド担当",
  ],
  [
    "2022",
    "MCBE Management v2",
    "Pythonで書き直したMinecraftサーバー管理用ソフトウェア",
  ],
  [
    "2018~2021",
    "MCBE Management",
    "中学生の時に作成した、Minecraftサーバー管理用スクリプト",
  ],
];

export default function Page() {
  return (
    <main
      style={{ overflow: "auto" }}
      className="h-full mt-20 mb-5 w-5/6 flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-6xl font-bold m-20">Works</h1>
      </div>
      <div className="flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-2xl">TIMELINE</h2>
        <ul className="timeline timeline-vertical max-md:timeline-compact timeline-snap-icon">
          {timeLineContent.map((content) => (
            <li>
              <hr />
              <div className="timeline-start text-lg">{content.at(0)}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box text-lg w-5/6 max-md:w-10/12">
                <details className="collapse collapse-arrow">
                  <summary className="collapse-title text-xl font-medium">
                    <p>{content.at(1)}</p>
                  </summary>
                  <div className="collapse-content">
                    <p>{content.at(2)}</p>
                  </div>
                </details>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
