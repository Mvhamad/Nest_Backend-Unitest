import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { RolesEnum } from 'src/enums/roles.enum';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true, unique: true })
  profilePhoto: string;

  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String, required: true })
  lastName: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  email: string;

  @Prop({ type: String, required: true, unique: true, index: true })
  phoneNumber: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String, enum: RolesEnum, required: true })
  role: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true })
  salt: string;

  @Prop({ type: Boolean, default: false })
  isAccountVerified: boolean;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
