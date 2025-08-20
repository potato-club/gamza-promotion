import { getLookup } from "@/services/resultService";
import ResultDefault from "../../features/result/components/ResultDefault";
import ResultFail from "../../features/result/components/ResultFail";
import ResultPass from "../../features/result/components/ResultPass";
import ResultNotFoundWrapper from "./ResultNotFoundWrapper";

type Props = { searchParams?: { name?: string; phone?: string } };

export default async function ResultPage({ searchParams }: Props) {
  const name = searchParams?.name;
  const phone = searchParams?.phone;

  if (!name || !phone) {
    return <ResultDefault />;
  }

  try {
    const res = await getLookup({ name, phone });
    const status = res?.data?.status;
    console.log("STATUS", status);
    if (status === "PASS") return <ResultPass name={name} />;
    if (status === "FAIL") return <ResultFail name={name} />;
  } catch (err: any) {
    // fallthrough to default
    console.error("getLookup error");
    console.error(err);

    if (err?.status === 404) {
      return <ResultNotFoundWrapper />;
    }
  }

  return <ResultDefault />;
}
