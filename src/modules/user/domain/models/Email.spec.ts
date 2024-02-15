import Email from "./Email"

describe("EmailVO", () =>
{
  const godFormats: string[] = ["user@example.com", "user123@email.co.uk", "john.doe@company.org", "user_name1234@email-provider.net", "info@sub.domain.com"];
  const badFormats: string[] = ["user@invalid-tld.123", "user#domain.com", "user#domain.con", "user&name@email-provider.net", "spaced user@domain.info", "double..dots@email.org", "@.com", "user@domain with space.com", "user@domain..com"];

  godFormats.forEach((email) => 
  {
    it(`should be able to create a new Email with email ${email}`, () => 
    {
      const validateEmail = Email.create(email);
      expect(validateEmail.isSuccess).toBe(true);
    });
  });

  badFormats.forEach((email) => 
  {
    it(`should not be able to create a new Email with email ${email}`, () => 
    {
      const validateEmail = Email.create(email);
      expect(validateEmail.isFailure).toBe(true);
    });
  });
});
