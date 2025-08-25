"use client";

import { Button, Input } from "@/shared";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { UserFormData } from "../model/types";

const FormSchema = z.object({
  username: z.string().min(2, { message: "이름은 2글자 이상이어야 합니다." }),
  phoneNumber: z.string().regex(/^010\d{8}$/, {
    message:
      "전화번호 형식이 올바르지 않습니다. 하이픈(-)을 제외한 11자리를 입력해주세요.",
  }),
});

interface ResultFormProps {
  onSubmit: (data: UserFormData) => Promise<void>;
  isLoading?: boolean;
}

export default function ResultForm({
  onSubmit,
  isLoading = false,
}: ResultFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "", phoneNumber: "" },
  });

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    await onSubmit({
      username: data.username,
      phoneNumber: data.phoneNumber,
    });
  };

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
              onSubmit={form.handleSubmit(handleSubmit)}
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
                        disabled={isLoading}
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
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#007AFF] rounded-2xl"
                disabled={isLoading}
              >
                {isLoading ? "조회중..." : "결과 확인하기"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
