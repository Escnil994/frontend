

export class Comment {
  constructor(
    public name: string,
    public email: string,
    public comment: string,
    public id?: string,
    public allowed?: boolean
) {
  }
}
