import Result from "@shared/erros/Result";
import FakeHashProvider from "./FakeHashProvider";
import AppError from "@shared/erros/AppError";

describe("Fake HashProvider", () =>
{
  const fakeHashProvider: FakeHashProvider = new FakeHashProvider();  

  it("should be possible to create a hashed password from a string", async () => 
  {
    const hashedPassword: Result<string, AppError> = await fakeHashProvider.generateHash("password");
    expect(hashedPassword.isSuccess).toBe(true);    
  });

  it("should be possible to compare a string with a hased password", async () => 
  {
    const copare: Result<boolean, AppError> = await fakeHashProvider.compareHash("password", "passwordHased");
    expect(copare.isSuccess).toBe(true);    
  });

  it("should be possible to return true when comparing an valid passwords", async () => 
  {
    const copare: Result<boolean, AppError> = await fakeHashProvider.compareHash("password", "passwordHased");
    expect(copare.getValue()).toBe(true);    
  });

  it("should not be possible to return true when comparing invalid passwords", async () => 
  {
    const copare: Result<boolean, AppError> = await fakeHashProvider.compareHash("invalid-password", "passwordHased");
    expect(copare.getValue()).toBe(false);    
  });

});
