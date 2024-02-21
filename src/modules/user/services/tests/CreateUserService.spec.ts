import FakeUserRepository from "@modules/user/domain/repositories/fakes/FakeUserRepository";
import CreateUserService from "../CreateUserService";

describe("CreateUser", () =>
{
  it("should be able to create a new user", async () =>
  {
    const fakeUserRepository = new FakeUserRepository();

    const createUser = new CreateUserService(fakeUserRepository);

    const user = await createUser.execute(
    {
      name: "Caio Couto", 
      email: "caio@email.com", 
      password: "caio123", 
      phone: "75981560050"
    });

    expect(user.getValue()).toHaveProperty("id");
  });
});
