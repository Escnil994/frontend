
export class Post {
    constructor(
      public _id: string,
      public title: string,
      public intro: string,
      public content: string,
      public github?: string,
      public url?: string,
      public video?: string,
      public more?: string,
      public image?: {
        public_id: string, secure_url: string
      }
    ) {
    }
  }
  