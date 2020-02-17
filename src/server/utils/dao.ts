import "reflect-metadata";
import { createConnection, Connection, Entity, ObjectType } from "typeorm";
import Item from "../models/Item";

export default class DAO {
  connect: Promise<Connection>;

  constructor() {
    this.connect = this._connect();
  }

  _connect() {
    return createConnection({
      type: "mysql",
      host: "db",
      port: 3306,
      username: "root",
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: "bucketlist",
      entities: [Item],
      synchronize: true,
      logging: false
    })
  }

  async save(entityClass: ObjectType<Entity>): void {
    const connection = await this.connect;
    return await connection.manager.save(entityClass);
  }

  async findOne(entityClass: ObjectType<Entity>, id: number): Promise<Entity> {
    const connection = await this.connect;
    return await connection.manager.findOne(entityClass);
  }

  async find(entityClass: ObjectType<Entity>): Promise<Entity[]> {
    const connection = await this.connect;
    return await connection.manager.find(entityClass);
  }
}
