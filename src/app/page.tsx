import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-24">
      <div className="flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9Sein3gZllZ5ycT5ycCOrki0p90TySVYKw&s"
          alt=""
          className="rounded-full w-auto h-auto"
        />
        <div className="flex flex-col items-center justify-center m-10">
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p className="text-lg">Welcome to my website</p>
        </div>
      </div>
    </main>
  );
}
