import { Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";

import { AuthService } from "./auth.service";
import { CurrentUser } from "./current-user.decorator";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { UserDocument } from "./users/models/user.schema";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@CurrentUser() user: UserDocument, @Res({ passthrough: true }) res: Response) {
    await this.authService.login(user, res);
    res.send(user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUser(@CurrentUser() user: UserDocument) {
    return user;
  }
}
