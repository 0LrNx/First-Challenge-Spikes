import { InfiniteScrolling } from "./components/features/InfiniteScrolling";
import Logo from "./components/ui/Logo";
import Background from "./components/ui/Background";
import ButtonSpikes from "./components/ui/ButtonSpikes";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
