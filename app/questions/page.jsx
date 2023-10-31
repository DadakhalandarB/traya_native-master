import Questions from "@/components/generic/Questions";
import QuestionsContextProvider from "@/context/questions-store";

export default function page() {
  return (
    <QuestionsContextProvider>
      <Questions />
    </QuestionsContextProvider>
  );
}