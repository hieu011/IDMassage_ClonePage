import { Button } from "@/components/ui/button";

export function ListButtonService({listButtonService} : any) {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {listButtonService.map((button : any) => (
        <Button
          key={button.label}
          className="h-16 text-sm text-white bg-[var(--button-green-color-)] hover:bg-[var(--button-hover-color)] flex items-center justify-center cursor-pointer"
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}
