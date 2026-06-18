import reviews from "./data/reviews.json";
import Dashboard from "./Dashboard";
import ThemeToggle from "./ThemeToggle";

export default function Page() {
  return (
    <>
      <header className="border-b border-pink-100 bg-[#ec0a7a] dark:border-neutral-800">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-white">📶 Wiom Review Project</span>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-6 space-y-6">
        <Dashboard reviews={reviews as any} />
      </main>
      <footer className="border-t border-pink-100 dark:border-neutral-800">
        <div className="mx-auto max-w-4xl px-4 py-4 text-center text-xs text-[#8a5570] dark:text-neutral-400">
          Reviews collected from Google Play Store and YouTube. Sentiment and review type are
          assigned by content-based heuristics, not just star rating.
        </div>
      </footer>
    </>
  );
}
