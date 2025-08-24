import { getLookup } from "@/services/resultService";
import ResultDefault from "../../features/result/components/ResultDefault";
import ResultFail from "../../features/result/components/ResultFail";
import ResultPass from "../../features/result/components/ResultPass";
import PassBackground from "./PassBackground";
import ResultNotFoundWrapper from "./ResultNotFoundWrapper";

type Props = { searchParams?: { name?: string; phone?: string } };

export default async function ResultPage({ searchParams }: Props) {
  console.log("ResultPage component executed"); // Added log

  // Await searchParams if it's a Promise, otherwise it will resolve immediately
  const params = await searchParams;
  const name = params?.name;
  const phone = params?.phone;

  let ComponentToRender: React.ElementType = ResultDefault;
  let componentProps: { name?: string } = {};
  let isPassStatus = false; // Flag to check if ResultPass is rendered

  if (!name || !phone) {
    ComponentToRender = ResultDefault;
  } else {
    try {
      const res = await getLookup({ name, phone });
      const status = res?.data?.status;
      console.log("STATUS", status);
      if (status === "PASS") {
        ComponentToRender = ResultPass;
        componentProps = { name };
        isPassStatus = true; // Set flag to true
      } else if (status === "FAIL") {
        ComponentToRender = ResultFail;
        componentProps = { name };
      }
    } catch (err: any) {
      console.error("getLookup error");
      console.error(err);

      if (err?.status === 404) {
        ComponentToRender = ResultNotFoundWrapper;
      } else {
        ComponentToRender = ResultDefault; // Fallback for other errors
      }
    }
  }

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {isPassStatus && <PassBackground />}
      <div className="relative z-10 flex items-center justify-center">
        <ComponentToRender {...componentProps} />
      </div>
    </div>
  );
}
