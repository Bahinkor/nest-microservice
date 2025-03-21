import { Injectable } from "@nestjs/common";

import type { CreateReservationDto } from "./dto/create-reservation.dto";
import type { UpdateReservationDto } from "./dto/update-reservation.dto";
import type { ReservationsRepository } from "./reservations.repository";

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationsRepository: ReservationsRepository) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationsRepository.create({
      ...createReservationDto,
      timestamp: new Date(),
      userId: "123",
    });
  }

  findAll() {
    return this.reservationsRepository.find({});
  }

  findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationsRepository.findOneAndUpdate({ _id }, { $set: updateReservationDto });
  }

  remove(_id: string) {
    return this.reservationsRepository.findOneAndDelete({ _id });
  }
}
