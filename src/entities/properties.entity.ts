import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Unique,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules.entity";

@Entity("properties")
@Unique(["address"])
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "boolean", default: "false" })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, nullable: false })
  value: number;

  @Column({ type: "integer", nullable: false })
  size: number;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt: Date;

  @OneToOne(() => Addresses, { eager: true, nullable: false })
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, { eager: true })
  category: Categories;

  @OneToMany(() => Schedules, (schedules) => schedules.property)
  schedules: Schedules[];
}
