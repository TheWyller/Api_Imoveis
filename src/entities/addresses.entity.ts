import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  district: string;

  @Column({ type: "varchar", nullable: false })
  zipCode: string;

  @Column({ type: "varchar", nullable: true })
  number: string;

  @Column({ type: "varchar", nullable: false })
  city: string;

  @Column({ type: "varchar", nullable: false })
  state: string;
}
