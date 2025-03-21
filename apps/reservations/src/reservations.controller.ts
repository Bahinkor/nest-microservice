import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

import type { CreateReservationDto } from "./dto/create-reservation.dto";
import type { UpdateReservationDto } from "./dto/update-reservation.dto";
import type { ReservationsService } from "./reservations.service";

@Controller("reservations")
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.reservationsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateReservationDto: UpdateReservationDto) {
    return this.reservationsService.update(id, updateReservationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reservationsService.remove(id);
  }
}
