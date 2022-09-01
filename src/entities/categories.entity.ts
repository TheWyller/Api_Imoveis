import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Properties } from "./properties.entity";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  name: string;

  @OneToMany(() => Properties, (property) => property.category)
  property: Properties[];
}
