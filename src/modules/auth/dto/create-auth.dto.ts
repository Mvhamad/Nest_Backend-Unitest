import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { RolesEnum } from 'src/enums/roles.enum';

export class SignUpAuthDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEnum(RolesEnum)
  role: string;

  @IsNotEmpty()
  salt: string;
}

export class SignInAuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
