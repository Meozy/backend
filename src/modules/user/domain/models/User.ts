import Email from "./Email";
import Phone from "./Phone";
import Result from "@shared/erros/Result";

class User
{
  id: string;
  name: string;
  email: Email;
  password: string;
  phone: Phone;
  avatar?: string;
  created_at: Date; 
  updated_at: Date;

  private constructor(id: string, name: string, email: Email, password: string, phone: Phone)
  {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.created_at = new Date(Date.now());
    this.updated_at = new Date(Date.now());
    Object.freeze(this);
  }
  /**
   * Cria um novo usuário
  */
  static create(id: string, name: string, email: string, password: string, phone: string): Result<User>
  {
    const isValidEmail: Result<Email> =  Email.create(email);
    const isValidPhone: Result<Phone> = Phone.create(phone);

    if (isValidEmail.isFailure) return Result.Err(isValidEmail.error);

    if (isValidPhone.isFailure) return Result.Err(isValidPhone.error);

    const user: User = new User(id, name, isValidEmail.getValue(), password, isValidPhone.getValue());

    return Result.Ok(user);
  }

  public toString(): string 
  {
    return `User {
      id: ${this.id},
      name: ${this.name},
      email: ${this.email.getValue()},
      password: ${this.password},
      phone: ${this.phone.getValue()},
      created_at: ${this.created_at.toString()},
      updated_at: ${this.updated_at.toString()}
    }`
  }
}

export default User;
