import { InfiniteScrolling } from "./components/InfiniteScrolling";
import Logo from "./components/Logo";
import Background from "./components/Background";
import ButtonSpikes from "./components/ButtonSpikes";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Background />
        <div className="absolute flex justify-center items-center gap-2 top-16">
          <Logo />
        </div>
        <InfiniteScrolling />
        <div className="absolute bottom-12 z-50">
          <ButtonSpikes />
        </div>
      </div>
    </>
  );
}
