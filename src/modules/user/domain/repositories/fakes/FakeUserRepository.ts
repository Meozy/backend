import User from "../../models/User";
import IUserRepository, { ICreateUser } from "../IUserRepository";
import Result from "@shared/erros/Result";

class FakeUserRepository implements IUserRepository
{
  private users: User[] = [];

  public async create(data: ICreateUser): Promise<Result<User>>
  {
    const user: Result<User> = User.create((this.users.length + 1).toFixed(), data.name, data.email, data.password, data.phone);

    if (user.isFailure) return Result.Err(user.error);

    this.users.push(user.getValue());

    console.log(this.users);

    return Result.Ok(user.getValue());
  }

  public async save(user: User): Promise<Result<User>>
  {
    const findeIndex = this.users.findIndex((findUser) => findUser.id === user.id);

    if (findeIndex === -1) return Result.Err("Usuário não encontrado");

    this.users[findeIndex] = user;

    return Result.Ok(user);
  }

  public async find(): Promise<Result<User[]>>
  {
    return Result.Ok(this.users);
  }

  public async findById(id: string): Promise<Result<User | null>>
  {
    const filtredUser: User | undefined = this.users.find((user) => user.id === id);

    if (!filtredUser) return Result.Ok(null);

    return Result.Ok(filtredUser);
  }

  public async findByName(name: string): Promise<Result<User | null>>
  {
    const filtredUser: User | undefined = this.users.find((user) => user.name === name);

    if (!filtredUser) return Result.Ok(null);

    return Result.Ok(filtredUser);
  }

  public async findByEmail(email: string): Promise<Result<User | null>>
  {
    const filtredUser: User | undefined = this.users.find((user) => user.email.getValue() === email);

    if (!filtredUser) return Result.Ok(null);

    return Result.Ok(filtredUser);
  }
}

export default FakeUserRepository;
