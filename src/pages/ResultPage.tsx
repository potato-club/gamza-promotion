import { ResultContainer } from "@/domains/result";
import { ResultErrorBoundary } from "@/shared";

export default function ResultPage() {
  return (
    <ResultErrorBoundary>
      <ResultContainer />
    </ResultErrorBoundary>
  );
}
