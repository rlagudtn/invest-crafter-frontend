import { Combobox } from "@/components/Combobox";

interface TableFilterProps {
  filter?: string;
  sort?: string;
}

export const TableFilter = ({ filter, sort }: TableFilterProps) => {
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  return (
    <div className="w-full flex-col justify-end items-start gap-5 inline-flex">
      <div className="text-black text-xl md:text-2xl lg:text-3xl font-bold font-['Pretendard']">
        미국 기업 리스트
      </div>
      <div className="flex-col justify-end items-start gap-5 flex">
        <div className="self-stretch h-px border border-zinc-300"></div>
        <div className="justify-start items-start gap-2.5 inline-flex">
          <Combobox frameworks={frameworks} defaultPlaceholder="업종/산업" />
          <Combobox frameworks={frameworks} defaultPlaceholder="정렬" />
          <Combobox frameworks={frameworks} defaultPlaceholder="필터" />
        </div>
      </div>
      <div className=" justify-start items-start gap-2.5 inline-flex"></div>
    </div>
  );
};
