import IUserRepository from "../domain/repositories/IUserRepository";
import User from "../domain/models/User";
import ICreateUser from "../domain/models/ICreateUser";
import Result from "@shared/erros/Result";
import AppError from "@shared/erros/AppError";
import IHashProvider from "../providers/HasProvider/models/IHashProvider";

class CreateUserService
{
  private userRepository: IUserRepository;
  private hashProvider: IHashProvider;

  constructor(userRepository: IUserRepository, hashProvider: IHashProvider)
  {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
  }

  public async execute({ name, email, password, phone}: ICreateUser): Promise<Result<User, AppError>>
  {
    const existEmail: Result<User | null, AppError> = await this.userRepository.findByEmail(email);

    if (existEmail.isFailure) return Result.Err(existEmail.error);

    if (existEmail.getValue()) return Result.Err(new AppError(
    {
      errorType: "EMAIL_ALREADY_EXISTS",
      details: "O endereço de email fornecido já está sendo usado por outro usuário. Tente outro email."
    }));

    const hashedPassword: Result<string, AppError> = await this.hashProvider.generateHash(password);

    if (hashedPassword.isFailure) return Result.Err(hashedPassword.error);

    const user: Result<User, AppError> = await this.userRepository.create({ name, email, password, phone });

    if (user.isFailure) return Result.Err(user.error);

    return Result.Ok(user.getValue());
  }
}

export default CreateUserService;
