import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IProps {
  limit: number;
  onLimitChange: (limit: string) => void;
}

export function PageSizeSelector({ limit, onLimitChange }: IProps) {
  const limitOptions = [10, 20, 50, 100];

  return (
    <Select defaultValue={String(limit)} onValueChange={onLimitChange}>
      <SelectTrigger>
        <SelectValue placeholder="Registros por página" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {limitOptions.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {option} registros por página
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
