enum ErrorTypes
{
  INVALID_EMAIL = "001:O email fornecido é inválido.",
  INVALID_PHONE = "002:O número de telefone fornecido é inválido.",
  USER_NOT_FOUND = "003:O usuário não foi encontrado.",
  EMAIL_ALREADY_EXISTS = "004:O email fornecido já existe."
}

interface IErrorParam
{
  errorType: keyof typeof ErrorTypes;
  details: string;
}

class AppError 
{
  readonly code: string;
  readonly type: string;
  readonly message: string;
  readonly details: string;

  constructor({ errorType, details }: IErrorParam)
  {
    const [code, message] = ErrorTypes[errorType].toString().split(":");

    this.code = code;
    this.type = errorType;
    this.message = message;
    this.details = details;
    Object.freeze(this);
  }

  public toString(): string
  {
    return `{
      code: "${this.code}",
      type: "${this.type}",
      message: "${this.message}",
      details: "${this.details}",
    }`
  }
}

export default AppError;
