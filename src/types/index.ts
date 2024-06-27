export interface Item {
  id: number;
  title: string;
  children?: { id: number; title: string; children?: [] }[] | Item[];
}
