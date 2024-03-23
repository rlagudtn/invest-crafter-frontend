import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
interface SearchInputProps {
  className: string;
  height: string;
  btnWidth: string;
}
export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  btnWidth,
  height,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full justify-center items-center space-x-2",
        className,
        height
      )}
    >
      <Input
        className="h-full rounded-lg max-w-md"
        placeholder="기업명, 심볼을 입력해주세요."
        type="search"
      />
      <Button className={clsx(btnWidth, "h-full rounded-lg")} type="submit">
        <MicroscopeIcon />
      </Button>
    </div>
  );
};

function MicroscopeIcon({}) {
  return (
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
