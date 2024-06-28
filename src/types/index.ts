export interface Item {
  id: number;
  title: string;
  children?: { id: number; title: string; children?: [] }[] | Item[];
}

export interface ThreeFolder {
  title: string;
  key: string;
  children?: ThreeFolder[];
}
