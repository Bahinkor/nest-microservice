import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { UserDocument } from "apps/auth/src/users/models/user.schema";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserDocument, res: Response) {
    const tokenPayload = { userId: user._id.toHexString() };

    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + this.configService.get("JWT_EXPIRATION"));

    const token = this.jwtService.sign(tokenPayload);

    res.cookie("Authentication", token, {
      httpOnly: true,
      expires,
    });
  }
}
