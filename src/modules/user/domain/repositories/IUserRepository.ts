import Result from "@shared/erros/Result";
import User from "../models/User";
import AppError from "@shared/erros/AppError";

export interface ICreateUser
{
  name: string;
  email: string;
  password: string;
  phone: string;
}

interface IUserRepository 
{
  /**
  * Encotra um usuário pelo nome 
  * @param name Nome do usuário
  * */
  findByName(name: string): Promise<Result<User | null, AppError>>;

  /**
  * Econtra um usuário pelo email 
  * @param email Email do usuário 
  * */
  findByEmail(email: string): Promise<Result<User | null, AppError>>;

  /**
  * Econtra um usuário pelo ID 
  * @param id ID do usuário
  * */
  findById(id: string): Promise<Result<User | null, AppError>>;

  /**
  * Retorna uma lista com todos os usuários cadastrados 
  * */
  find(): Promise<Result<User[], AppError>>;
  
  /**
  * Cria um novo usuário e salva na base de dados
  * @param data Entidade que caracteriza o usuário 
  * */
  create(data: ICreateUser): Promise<Result<User, AppError>>;

  /**
  * Salva as modificações de um usuário ja criado
  * @param user Usuário que deva ser salvo 
  * */
  save(user: User): Promise<Result<User, AppError>>;
}

export default IUserRepository;
