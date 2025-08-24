import Image from "next/image";

type Props = { name?: string };

export default function ResultFail({ name }: Props) {
  return (
    <div className="w-[350px] space-y-6 bg-white px-6 py-12 rounded-2xl shadow-md text-black animate-fade-in">
      <Image
        src="/non-pass.svg"
        alt="Description of image"
        width={260}
        height={100}
        className="mx-auto"
      />
      <div className="text-center flex flex-col gap-10">
        <h2 className="text-2xl font-semibold mt-5">{name ?? "홍길동"}</h2>
        <div className="text-6xl text-[#212528] font-[Cafe24PROUP]">불합격</div>
        <div className="flex flex-col items-center space-y-2 text-sm text-[#848C95] font-medium">
          <p>
            지원해주셔서 감사드립니다. <br />
            보여주신 열정과 관심이 너무나도 인상깊었지만 <br />
            한정된 인원으로 인해 함께하지 못하게 되었습니다.
          </p>
          <p>앞으로의 모든 활동을 응원하겠습니다!</p>
        </div>
      </div>
    </div>
  );
}
