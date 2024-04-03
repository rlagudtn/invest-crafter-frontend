"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { IFrameItem } from "@/types/customTypes";

interface IComboboxProps {
  inputPlaceholder?: string;
  frameworks: IFrameItem[] | undefined;
  defaultPlaceholder?: string;
  // IconComponent?: IconType; // Optional: Custom icon component
}
export function Combobox({
  inputPlaceholder,
  frameworks,
  defaultPlaceholder = "옵션을 선택해주세요",
}: IComboboxProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  // Render function for the dynamic icon, allowing for customization or default
  const renderIcon = () => {
    return <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks?.find((framework) => framework.value === value)?.label
            : defaultPlaceholder}
          {renderIcon()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={inputPlaceholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {frameworks?.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
