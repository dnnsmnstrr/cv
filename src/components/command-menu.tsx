"use client";

import * as React from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { CommandIcon } from "lucide-react";

interface Props {
  links: { url: string; title: string }[];
  onChangeLanguage: () => void,
  translations: Record<string, string>
}
const TRIGGER_KEY = "k"

export const CommandMenu = ({ links, onChangeLanguage, translations }: Props) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === TRIGGER_KEY && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        {translations.press || 'Press'}{" "}
        <button onClick={() => setOpen((open) => !open)}>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>{TRIGGER_KEY.toUpperCase()}
          </kbd>
        </button>{" "}
        {translations.openMenu || 'to open the command menu'}
      </p>
      <button onClick={onChangeLanguage} className="fixed bottom-1 right-2 flex rounded-full shadow-2xl print:hidden">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          {translations.language}
        </kbd>    
      </button>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 h-6 w-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={translations.placeholder || "Type a command or search..."} />
        <CommandList>
          <CommandEmpty>{translations.noResults || 'No results found.'}</CommandEmpty>
          <CommandGroup heading={translations.actions || "Actions"}>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
            >
              <span>{translations.print || 'Print'}</span>
            </CommandItem>
            <CommandItem
              onSelect={onChangeLanguage}
            >
              <span>{translations.changeLanguage || 'Change Language'}</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
