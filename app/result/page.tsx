"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { useState } from "react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "이름은 2글자 이상이어야 합니다.",
  }),
  phoneNumber: z.string().regex(/^010-\d{4}-\d{4}$/, {
    message: "전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)",
  }),
  // email: z.string().email({
  //   message: "이메일 형식이 올바르지 않습니다.",
  // }),
});

export default function InputForm() {
  const [temp, setTemp] = useState(2);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      // email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "다음과 같은 내용으로 제출했습니다:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  if (temp === 1) {
    return (
      <div className="w-[350px] space-y-6 bg-white p-6 rounded-2xl shadow-md text-black">
        <Image
          src="/non-pass.svg"
          alt="Description of image"
          width={260}
          height={100}
          className="mx-auto"
        />
        <div className="text-center flex flex-col gap-10">
          <h2 className="text-2xl font-semibold mt-5">홍길동</h2>
          <div className="text-6xl text-[#212528] font-[Cafe24PROUP]">
            불합격
          </div>
          <div className="flex flex-col items-center space-y-2 text-sm text-[#848C95] font-medium">
            <p>
              지원해주셔서 감사드립니다. <br />
              보여주신 열정과 관심이 너무나도 인상깊었지만 <br />
              한정된 인원으로 인해 함께하지 못하게 되었습니다.
            </p>
            <p>앞으로의 모든 활동을 응원하겠습니다!</p>
          </div>
        </div>
        <Button
          onClick={() => setTemp(0)}
          className="w-full text-[#007AFF] rounded-2xl bg-transparent hover:bg-transparent"
        >
          이전으로 돌아가기
        </Button>
      </div>
    );
  }

  if (temp === 2) {
    return (
      <div className="w-[350px] space-y-6 bg-white p-6 rounded-2xl shadow-md text-black">
        <Image
          src="/pass.svg"
          alt="Description of image"
          width={260}
          height={100}
          className="mx-auto"
        />
        <div className="text-center flex flex-col gap-10">
          <h2 className="text-2xl font-semibold mt-5">홍길동</h2>
          <div className="text-6xl text-[#212528] font-[Cafe24PROUP]">합격</div>
          <div className="flex flex-col items-center space-y-2 text-sm text-[#848C95] font-medium">
            <p>
              지원해주셔서 감사드리며 축하드립니다!
              <br />
              감자 10기 신입 부원으로 최종 선발되셨습니다.
              <br />
              앞으로 함께하게 되어 정말 반갑습니다.
            </p>
            <p>자세한 일정은 곧 안내드리겠습니다 :)</p>
          </div>
        </div>
        <Button
          onClick={() => setTemp(0)}
          className="w-full text-[#007AFF] rounded-2xl bg-transparent hover:bg-transparent"
        >
          이전으로 돌아가기
        </Button>
      </div>
    );
  }

  return (
    <>
      <Image
        src="/resultLogo.svg"
        alt="Description of image"
        width={260}
        height={100}
        className="object-cover rounded-lg"
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
                  <Input placeholder="홍길동" {...field} />
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
                  <Input placeholder="010-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">
                  이메일 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit" className="w-full bg-[#007AFF] rounded-2xl">
            결과 확인하기
          </Button>
        </form>
      </Form>
    </>
  );
}
