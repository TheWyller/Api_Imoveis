import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Schedules } from "./schedules.entity";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  email: string;

  @Column({ type: "boolean", nullable: false })
  isAdm: boolean;

  @Column({ type: "boolean", nullable: false, default: "true" })
  isActive: boolean;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @CreateDateColumn({ type: "date", nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: "date", nullable: false })
  updatedAt: Date;

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
