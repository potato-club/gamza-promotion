"use client";

import { LoadingSpinner } from "@/shared";
import { useResultQuery } from "../hooks/useResultQuery";
import ResultForm from "./ResultForm";
import ResultDisplay from "./ResultDisplay";

export default function ResultContainer() {
  const {
    state,
    userData,
    error,
    isLoading,
    submitQuery,
    resetState,
    retryQuery,
  } = useResultQuery();

  // 로딩 상태
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // 폼 상태
  if (state === "form") {
    return <ResultForm onSubmit={submitQuery} isLoading={isLoading} />;
  }

  // 결과 상태들 (pass, fail, notfound, error)
  return (
    <ResultDisplay
      state={state}
      userData={userData}
      error={error}
      onRetry={retryQuery}
      onReset={resetState}
    />
  );
}
