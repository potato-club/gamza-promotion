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

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "", phoneNumber: "" },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const name = data.username;
    const phone = data.phoneNumber.replace(/-/g, "");
    // navigate to result page with query params
    router.push(
      `/result?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`
    );
  }

  return (
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

        <Button type="submit" className="w-full bg-[#007AFF] rounded-2xl">
          결과 확인하기
        </Button>
      </form>
    </Form>
  );
}
