"use client";

import { useCallback, useState } from "react";
import { getLookup } from "../api/resultApi";
import type {
  ResultState,
  UserData,
  UseResultQueryReturn,
  UserFormData,
} from "../model/types";

export function useResultQuery(): UseResultQueryReturn {
  const [state, setState] = useState<ResultState>("form");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastQueryData, setLastQueryData] = useState<UserFormData | null>(null);

  const submitQuery = useCallback(async (data: UserFormData) => {
    try {
      setState("loading");
      setError(null);

      const name = data.username;
      const phone = data.phoneNumber.replace(/-/g, "");

      setUserData({ name, phone });
      setLastQueryData(data);

      // 2초 딜레이 추가 (UX 개선을 위한 로딩 상태 표시)
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await getLookup({ name, phone });
      const status = response?.data?.status;

      if (status === "PASS") {
        setState("pass");
      } else if (status === "FAIL") {
        setState("fail");
      } else {
        setState("error");
        setError("알 수 없는 응답 상태입니다.");
      }
    } catch (err: any) {
      console.error("getLookup error:", err);

      if (err?.status === 404) {
        setState("notfound");
        setError("입력하신 정보를 찾을 수 없습니다.");
      } else {
        setState("error");
        setError(err?.message || "서버 오류가 발생했습니다.");
      }
    }
  }, []);

  const resetState = useCallback(() => {
    setState("form");
    setUserData(null);
    setError(null);
    setLastQueryData(null);
  }, []);

  const retryQuery = useCallback(async () => {
    if (lastQueryData) {
      await submitQuery(lastQueryData);
    } else {
      resetState();
    }
  }, [lastQueryData, submitQuery, resetState]);

  const isLoading = state === "loading";

  return {
    state,
    userData,
    error,
    isLoading,
    submitQuery,
    resetState,
    retryQuery,
  };
}
