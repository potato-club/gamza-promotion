"use client";

import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { getLookup } from "../api/resultApi";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PassBackground from "../../../app/result/PassBackground";
import ResultFail from "./ResultFail";
import ResultPass from "./ResultPass";

const FormSchema = z.object({
  username: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),
  phoneNumber: z.string().regex(/^010\d{8}$/, {
    message:
      "전화번호 형식이 올바르지 않습니다. 하이픈(-)을 제외한 11자리를 입력해주세요.",
  }),
});

type ResultState = "form" | "loading" | "pass" | "fail" | "notfound" | "error";

export default function ResultFormClient() {
  const [resultState, setResultState] = useState<ResultState>("form");
  const [userName, setUserName] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "", phoneNumber: "" },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const name = data.username;
    const phone = data.phoneNumber.replace(/-/g, "");

    setResultState("loading");
    setUserName(name);

    try {
      const res = await getLookup({ name, phone });
      const status = res?.data?.status;

      if (status === "PASS") {
        setResultState("pass");
      } else if (status === "FAIL") {
        setResultState("fail");
      } else {
        setResultState("error");
      }
    } catch (err: any) {
      console.error("getLookup error", err);

      if (err?.status === 404) {
        setResultState("notfound");
      } else {
        setResultState("error");
      }
    }
  }

  // 결과 상태에 따른 렌더링
  if (resultState === "loading") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="flex flex-col items-center gap-3">
          <svg
            className="animate-spin h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <div className="text-white text-lg font-medium">결과 조회중...</div>
        </div>
      </div>
    );
  }

  if (resultState === "pass") {
    return (
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <PassBackground />
        <div className="relative z-10 flex items-center justify-center">
          <ResultPass name={userName} />
        </div>
      </div>
    );
  }

  if (resultState === "fail") {
    return (
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0F1112]">
        <div className="relative z-10 flex items-center justify-center">
          <ResultFail name={userName} />
        </div>
      </div>
    );
  }

  if (resultState === "notfound") {
    return (
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0F1112]">
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-[350px] space-y-6 bg-white px-6 py-12 rounded-2xl shadow-md text-black text-center">
            <div className="text-6xl mb-4">🔍</div>
            <div className="text-xl font-semibold text-black">
              정보를 찾을 수 없습니다
            </div>
            <div className="text-gray-500 mb-4">
              이름 혹은 전화번호를 확인해주세요.
            </div>
            <Button
              onClick={() => setResultState("form")}
              className="w-full bg-[#007AFF] rounded-2xl"
            >
              다시 시도
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (resultState === "error") {
    return (
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0F1112]">
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-[350px] space-y-6 bg-white px-6 py-12 rounded-2xl shadow-md text-black text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <div className="text-xl font-semibold text-black">
              오류가 발생했습니다
            </div>
            <div className="text-gray-500 mb-4">잠시 후 다시 시도해주세요.</div>
            <Button
              onClick={() => setResultState("form")}
              className="w-full bg-[#007AFF] rounded-2xl"
            >
              다시 시도
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 기본 폼 상태
  return (
    <div className="relative w-full min-h-screen bg-[#0F1112]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/resultLogo.svg"
            alt="결과 페이지 로고"
            width={260}
            height={100}
            className="object-cover rounded-lg mb-8"
          />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[350px] space-y-6 bg-white p-6 rounded-2xl shadow-md text-black"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      이름 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">
                      전화번호 <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="01012345678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-[#007AFF] rounded-2xl">
                결과 확인하기
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
