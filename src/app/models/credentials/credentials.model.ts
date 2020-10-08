export class Credentials {
  constructor(private email: string, private password: string) {

  }

  public toObject(): object {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
