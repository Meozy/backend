import Phone from "./Phone";

describe("PhoneVO", () =>
{
  const godFormats: string[] = ["(11)99000-3777", "11-99000-3777", "11990003777"];
  const badFormats: string[] = ["1111111111", "(01)3444-4444", "(01)43444-4444"];

  godFormats.forEach((phone) => 
  {
    it(`should be able to create a new Phone with number ${phone}`, () => 
    {
      const validatePhone: boolean = Phone.validade(phone);
      expect(validatePhone).toBe(true);
    });
  });

  badFormats.forEach((phone) => 
  {
    it(`should not be able to create a new Phone with number ${phone}`, () => 
    {
      const validatePhone: boolean = Phone.validade(phone);
      expect(validatePhone).toBe(false);
    });
  });
});
