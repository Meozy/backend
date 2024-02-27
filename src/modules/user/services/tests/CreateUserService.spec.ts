import FakeUserRepository from "@modules/user/domain/repositories/fakes/FakeUserRepository";
import CreateUserService from "../CreateUserService";
import Result from "@shared/erros/Result";
import User from "../../domain/models/User";
import AppError from "@shared/erros/AppError";

describe("CreateUser", () =>
{
  it("should be able to create a new user", async () =>
  {
    const fakeUserRepository: FakeUserRepository = new FakeUserRepository();

    const createUser: CreateUserService = new CreateUserService(fakeUserRepository);

    const user: Result<User, AppError> = await createUser.execute(
    {
      name: "Caio Couto",
      email: "caio@email.com",
      password: "caio123",
      phone: "75981560050"
    });

    expect(user.getValue()).toHaveProperty("id");
  });

  it("It should not be possible to create a new User with an invalid email", async () =>
  {
    const fakeUserRepository: FakeUserRepository = new FakeUserRepository();

    const createUser: CreateUserService = new CreateUserService(fakeUserRepository);

    const user: Result<User, AppError> = await createUser.execute(
    {
      name: "Caio Couto",
      email: "caio#email.com",
      password: "caio123",
      phone: "75981560050"
    });

    expect(user.isFailure).toBe(true);
  });

  it("It should not be possible to create a new User with an invalid phone number", async () =>
  {
    const fakeUserRepository: FakeUserRepository = new FakeUserRepository();

    const createUser: CreateUserService = new CreateUserService(fakeUserRepository);

    const user: Result<User, AppError> = await createUser.execute(
    {
      name: "Caio Couto",
      email: "caio@email.com",
      password: "caio123",
      phone: "75081560050"
    });

    console.log(user.error.toString());

    expect(user.isFailure).toBe(true);
  });

  it("It should not be possible to create a new User with an email already registered", async () =>
  {
    const fakeUserRepository: FakeUserRepository = new FakeUserRepository();

    const createUser: CreateUserService = new CreateUserService(fakeUserRepository);

    await fakeUserRepository.create(
    {
      name: "Caio Couto",
      email: "caio@email.com",
      password: "caio123",
      phone: "75981560050"
    });

    const user: Result<User, AppError> = await createUser.execute(
    {
      name: "Kazumyo",
      email: "caio@email.com",
      password: "kazumyo123",
      phone: "75981560050"
    });

    console.log(user.error.toString());

    expect(user.isFailure).toBe(true);
  });
});
