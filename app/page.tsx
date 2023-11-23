import dynamic from "next/dynamic";
const Scene = dynamic(() => import("./components/canvas/Scene"), {
  ssr: false,
  loading: () => (
    <div className="h-full grid">
      <div className="m-auto">
        <span className="loading loading-spinner" />
      </div>
    </div>
  ),
});
// import Scene from "./components/canvas/Scene";

export default function Home() {
  return (
    <main>
      <Scene />
    </main>
  );
}
