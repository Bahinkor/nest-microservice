import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LoggerModule } from "nestjs-pino";

import { DatabaseModule } from "../../../libs/common/src/database";
import { ReservationDocument, ReservationSchema } from "./models/reservation.schema";
import { ReservationsController } from "./reservations.controller";
import { ReservationsRepository } from "./reservations.repository";
import { ReservationsService } from "./reservations.service";

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([{ name: ReservationDocument.name, schema: ReservationSchema }]),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
        },
      },
    }),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
