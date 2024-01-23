import { NewEnt as TNewEnt } from "../api/newEnt/NewEnt";

export const NEWENT_TITLE_FIELD = "id";

export const NewEntTitle = (record: TNewEnt): string => {
  return record.id?.toString() || String(record.id);
};
