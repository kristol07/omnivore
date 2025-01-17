import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user'

@Entity({ name: 'user_personalization' })
export class UserPersonalization {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User

  @Column('text', { nullable: true })
  fontFamily?: string | null

  @Column('integer', { nullable: true })
  fontSize?: number | null

  @Column('text', { nullable: true })
  margin?: number | null

  @Column('text', { nullable: true })
  theme?: string | null

  @Column('text', { nullable: true })
  libraryLayoutType?: string | null

  @Column('text', { nullable: true })
  librarySortOrder?: string | null

  @Column('text', { nullable: true })
  speechVoice?: string | null

  @Column('text', { nullable: true })
  speechSecondaryVoice?: string | null

  @Column('text', { nullable: true })
  speechRate?: string | null

  @Column('text', { nullable: true })
  speechVolume?: string | null

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt!: Date
}
