class Result<T, E>
{
  public isSuccess: boolean;
  public isFailure: boolean;
  public error: E;
  private _value: T;

  private constructor (isSuccess: boolean, error?: E, value?: T)
  {
    if (isSuccess && error)
    {
      throw new Error(`InvalidOperation: A result cannot be successful and contain an error`);
    }
    else if (!isSuccess && !error)
    {
      throw new Error(`InvalidOperation: A failing result needs to contain an error message`);
    }

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error!;
    this._value = value!;

    Object.freeze(this);
  }

  public getValue () : T
  {
    if (!this.isSuccess)
    {
      throw new Error(`Cant retrieve the value from a failed result.`);
    }

    return this._value;
  }

  public static Ok<U, E> (value?: U) : Result<U, E>
  {
    return new Result<U, E>(true, undefined, value);
  }

  public static Err<U, E> (error: E): Result<U, E>
  {
    return new Result<U, E>(false, error);
  }

  public static combine (results: Result<any, any>[]) : Result<any, any>
  {
    for (let result of results)
    {
      if (result.isFailure) return result;
    }
    return Result.Ok<any, any>();
  }
}

export default Result;
