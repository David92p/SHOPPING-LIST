import { TdTable } from "../interfaces/tdTable";

export const setTdTable = (arg: TdTable) => {
  console.log(arg);
  if (arg.typology.value) {
    console.log(arg.typology.value);
  }
};
