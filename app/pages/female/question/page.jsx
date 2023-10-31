import Header from "@/components/generic/Header";
import Questions from "@/components/generic/Questions";
import QuestionsContextProvider from "@/context/questions-store";

export default function page() {
  console.log("page/female/question");
  return (
    <>
      <Header />
      <QuestionsContextProvider>
        <Questions />
      </QuestionsContextProvider>
    </>
  );
}
