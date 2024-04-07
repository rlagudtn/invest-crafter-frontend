import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

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
        <SearchIcon className="h-6 w-6 shrink-0 " />
      </Button>
    </div>
  );
};
