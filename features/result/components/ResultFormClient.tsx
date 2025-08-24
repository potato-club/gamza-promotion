"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  username: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),
  phoneNumber: z.string().regex(/^010\d{8}$/, {
    message:
      "전화번호 형식이 올바르지 않습니다. 하이픈(-)을 제외한 11자리를 입력해주세요.",
  }),
});

export default function ResultFormClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "", phoneNumber: "" },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const name = data.username;
    const phone = data.phoneNumber.replace(/-/g, "");
    // show a short loading state (~1s) before navigating so UX feels snappy
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      router.push(
        `/result?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(
          phone
        )}`
      );
    } finally {
      // in case navigation fails, ensure loading is reset
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      {/* Full-screen loading overlay */}
      {loading && (
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
      )}

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
                <Input
                  placeholder="홍길동"
                  {...field}
                  disabled={loading}
                  className=""
                />
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
                <Input
                  placeholder="01012345678"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#007AFF] rounded-2xl"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
              로딩...
            </span>
          ) : (
            "결과 확인하기"
          )}
        </Button>
      </form>
    </Form>
  );
}
