import Result from "@shared/erros/Result";
import User from "./User"
import AppError from "@shared/erros/AppError";

describe("User Entity", () =>
{
  it("should be able to create a new User with an valid email and phone number", () =>
  {
    const userData =
    {
      id: "1",
      name: "Caio Couto",
      email: "caio@email.com",
      password: "caio123",
      phone: "75981560050",
    };

    const user: Result<User, AppError> = User.create(userData.id, userData.name, userData.email, userData.password, userData.phone);

    expect(user.isSuccess).toBe(true);
  });

  it("should not be able to create a new User with an invalid email", () =>
  {
    const userData =
    {
      id: "1",
      name: "Caio Couto",
      email: "caio#email.con",
      password: "caio123",
      phone: "75981560050",
    };

    const user: Result<User, AppError> = User.create(userData.id, userData.name, userData.email, userData.password, userData.phone);

    expect(user.isFailure).toBe(true);
  });

  it("should not be able to create a new User with an invalid phone", () =>
  {
    const userData =
    {
      id: "1",
      name: "Caio Couto",
      email: "caio@email.com",
      password: "caio123",
      phone: "7581560050",
    };

    const user: Result<User, AppError> = User.create(userData.id, userData.name, userData.email, userData.password, userData.phone);

    expect(user.isFailure).toBe(true);
  });
});
