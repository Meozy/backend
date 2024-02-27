import AppError from "@shared/erros/AppError";
import Result from "@shared/erros/Result";


class Email
{
  private readonly email: string;

  private constructor (email: string)
  {
    this.email = email;
    Object.freeze(this);
  }

  static create (email: string): Result<Email, AppError>
  {
    if (!this.validate(email)) return Result.Err(new AppError(
    { 
      errorType: "INVALID_EMAIL", 
      details:"Forneça um formato de email válido. Ex: user@domain.com" 
    }));

    return Result.Ok(new Email(email));
  }

  static validate(email: string): boolean
  {
    const emailExpression = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

    if (!email) return false;

    if (email.length > 256) return false;
    
    if (!emailExpression.test(email)) return false;

    const [account, address] = email.split("@");

    if (account.length > 64 || account.length === 0) return false;

    if (address.length > 255 || address.length === 0) return false;
  
    return true;
  }

  toString(): string 
  {
    return this.email;
  }

  getValue(): string
  {
    return this.email;
  }
}

export default Email;
