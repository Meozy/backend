import Result from "@shared/erros/Result";
import User from "../models/User";

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
  findByName(name: string): Promise<Result<User | null>>;

  /**
  * Econtra um usuário pelo email 
  * @param email Email do usuário 
  * */
  findByEmail(email: string): Promise<Result<User | null>>;

  /**
  * Econtra um usuário pelo ID 
  * @param id ID do usuário
  * */
  findById(id: string): Promise<Result<User | null>>;

  /**
  * Retorna uma lista com todos os usuários cadastrados 
  * */
  find(): Promise<Result<User[]>>;
  
  /**
  * Cria um novo usuário e salva na base de dados
  * @param data Entidade que caracteriza o usuário 
  * */
  create(data: ICreateUser): Promise<Result<User>>;

  /**
  * Salva as modificações de um usuário ja criado
  * @param user Usuário que deva ser salvo 
  * */
  save(user: User): Promise<Result<User>>;
}

export default IUserRepository;
