import Email from "./Email";
import Phone from "./Phone";
import Result from "@shared/erros/Result";

interface IUser
{
  id: string;
  name: string;
  email: Result<Email>;
  password: string;
  phone: Result<Phone>;
  avatar: string;
  created_at: Date;
  updated_at: Date;
}

export default IUser;
