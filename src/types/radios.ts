type option = {
  label: string;
  value: string | number;
}

export type IRadios = {
  name: string;
  label: string;
  control: any,
  options?: option[]
}