import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";
import { Users } from "./users.entity";

@Entity("schedules")
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  date: Date;

  @Column({ type: "time", nullable: false })
  hour: Date;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => Users, { eager: true })
  user: Users;
}
