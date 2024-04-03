import { Combobox } from "@/components/Combobox";
import { SortCombobox } from "@/components/SortingComboBox";
import { columns } from "./framework";
interface TableFilterProps {
  filter?: string;
  sortKey?: string;
  direction?: string;
  columnsMap: Map<string, string>;
  setSortKey: React.Dispatch<React.SetStateAction<string | null>>;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
}

export const TableFilter = ({
  filter,
  sortKey,
  direction,
  columnsMap,
  setSortKey,
  setDirection,
}: TableFilterProps) => {
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
          <SortCombobox
            columnsMap={columnsMap}
            setSortKey={setSortKey}
            setDirection={setDirection}
            frameworks={columns}
            defaultPlaceholder="정렬"
          />
          <Combobox frameworks={frameworks} defaultPlaceholder="업종/산업" />
          <Combobox frameworks={frameworks} defaultPlaceholder="필터" />
        </div>
      </div>
      <div className=" justify-start items-start gap-2.5 inline-flex"></div>
    </div>
  );
};
