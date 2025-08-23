import Image from "next/image";

type Props = { name?: string };

export default function ResultPass({ name }: Props) {
  return (
    <div className="w-[350px] space-y-6 bg-white px-6 py-12 rounded-2xl shadow-md text-black">
      <Image
        src="/pass.svg"
        alt="Description of image"
        width={260}
        height={100}
        className="mx-auto"
      />
      <div className="text-center flex flex-col gap-10">
        <h2 className="text-2xl font-semibold mt-5">{name ?? "홍길동"}</h2>
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
    </div>
  );
}
