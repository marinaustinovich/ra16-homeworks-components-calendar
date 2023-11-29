export class Now {
  constructor(entity) {
    if (!(entity instanceof Date)) {
      throw new Error("Entity must be an instance of Date");
    }
    this.date = entity;
  }
}
