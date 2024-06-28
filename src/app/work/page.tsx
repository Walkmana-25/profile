import { FaExternalLinkAlt } from "react-icons/fa";

const timeLineContent = [
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
      className="h-full mt-20 w-5/6 flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center mt-40">
        <h1 className="text-6xl font-bold m-20">Works</h1>
      </div>
      <div className="flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-2xl">TIMELINE</h2>
        <ul className="timeline timeline-vertical">
          {timeLineContent.map((content) => (
            <li>
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
              <div className="timeline-end timeline-box text-lg w-3/4">
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
