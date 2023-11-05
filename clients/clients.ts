import Axios from "clients/Axios";
import { createUserQueryClient } from "./reactQueryClient/queries/UserClient";

export const UserQueryClient = createUserQueryClient(Axios);
