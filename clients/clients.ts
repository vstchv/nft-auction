import Axios from "utils/Axios";
import { createUserQueryClient } from "./reactQueryClient/queries/UserClient";

export const UserQueryClient = createUserQueryClient(Axios);
