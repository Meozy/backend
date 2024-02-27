import AppError from "@shared/erros/AppError";
import Result from "@shared/erros/Result";
import IHashProvider from "../models/IHashProvider";

class FakeHashProvider implements IHashProvider
{
  public async generateHash(payload: string): Promise<Result<string, AppError>> 
  {
     return Result.Ok(payload.trim().concat("Hashed"));
  }

  public async compareHash(payload: string, hashed: string): Promise<Result<boolean, AppError>> 
  {
    return Result.Ok(payload.trim() === hashed.slice(0, hashed.length - 5).trim());    
  }
}

export default FakeHashProvider;
