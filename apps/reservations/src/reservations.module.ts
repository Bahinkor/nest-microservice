import { Module } from "@nestjs/common";

import { DatabaseModule } from "../../../libs/common/src/database";
import { LoggerModule } from "../../../libs/common/src/logger/logger.module";
import { ReservationDocument, ReservationSchema } from "./models/reservation.schema";
import { ReservationsController } from "./reservations.controller";
import { ReservationsRepository } from "./reservations.repository";
import { ReservationsService } from "./reservations.service";

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([{ name: ReservationDocument.name, schema: ReservationSchema }]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
