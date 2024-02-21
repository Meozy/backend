import IUserRepository from "../domain/repositories/IUserRepository";
import User from "../domain/models/User";
import Result from "@shared/erros/Result";

interface IRequest
{
  name: string;
  email: string;
  password: string;
  phone: string;
}

class CreateUserService
{
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository)
  {
    this.userRepository = userRepository;
  }

  public async execute({ name, email, password, phone}: IRequest): Promise<Result<User>>
  {
    const existEmail: Result<User | null> = await this.userRepository.findByEmail(email);

    if (existEmail.isFailure) return Result.Err(existEmail.error);

    if (!existEmail) return Result.Err("Email addres already used.");

    const user: Result<User> = await this.userRepository.create({ name, email, password, phone });

    if (user.isFailure) return Result.Err(user.error);

    return Result.Ok(user.getValue());
  }
}

export default CreateUserService;
