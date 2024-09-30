import { createContext } from "react";
import { listData } from "../lib/dummydata";

export let postContext = createContext(listData);
