import { NewEntWhereInput } from "./NewEntWhereInput";
import { NewEntOrderByInput } from "./NewEntOrderByInput";

export type NewEntFindManyArgs = {
  where?: NewEntWhereInput;
  orderBy?: Array<NewEntOrderByInput>;
  skip?: number;
  take?: number;
};
