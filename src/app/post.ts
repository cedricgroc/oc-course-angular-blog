export class Post {
  created_at: Date;

  constructor(public title:string,
      public content : string,
      public loveIts:number, public created_at = new Date())
      {
      }

}
