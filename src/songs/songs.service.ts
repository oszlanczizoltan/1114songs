import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {

  readonly db: PrismaService;

  constructor (db: PrismaService){
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return 'This action adds a new song';
  }

  findAll() {
    return this.db.songs.findMany();
  }

  findOne(id: number) {
    return this.db.songs.();
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    const index = this.songs.findIndex(song => song.id == id);
    if (index == -1) {
      return false;
    }
    this.songs.splice(index, 1);
    return true;
  }

  freesong() {
    const fs = this.songs.find(song => song.price == 0);
    if 
  }
}
