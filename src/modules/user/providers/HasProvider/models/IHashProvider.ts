import AppError from "@shared/erros/AppError";
import Result from "@shared/erros/Result";

interface IHashProvider
{
  generateHash(payload: string): Promise<Result<string, AppError>>;
  compareHash(payload: string, hashed: string): Promise<Result<boolean, AppError>>;
}

export default IHashProvider;
