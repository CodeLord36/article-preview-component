import ArticlePreviewCard from "./components/ArticlePreviewCard";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-light-grayish-blue font-manrope text-[13px] flex flex-col justify-center items-center gap-4 p-6 pt-24 md:pt-[72px] ">
      <ArticlePreviewCard />
      <Footer />
    </main>
  );
}

export default App;
