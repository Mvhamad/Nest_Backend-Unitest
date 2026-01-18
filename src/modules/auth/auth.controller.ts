import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInAuthDto, SignUpAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() payload: SignUpAuthDto) {
    return this.authService.signUp(payload);
  }

  @Post('signin')
  signIn(@Body() payload: SignInAuthDto) {
    return this.authService.signIn(payload);
  }
  
}
