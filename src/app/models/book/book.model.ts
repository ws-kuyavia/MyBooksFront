export class Book {
  constructor(
    public id: number,
    public name: string,
    public category: string
  ){}

  public toObject(): object {
    return {
      id: this.id,
      name: this.name,
      category: this.category,
    };
  }
}
