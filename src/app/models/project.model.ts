

export class Project {
  constructor(
    public _id: string,
    public title: string,
    public subtitle: string,
    public content: string,
    public image?: {
      public_id: string, secure_url: string
    }
  ) {
  }
}
