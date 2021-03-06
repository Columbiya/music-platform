import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";
import * as mongoose from 'mongoose'
import { CreateCommentDto } from "./dto/create-comment.dto";

@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() dto: CreateTrackDto) {
        return this.trackService.create(dto)
    }
    
    @Get()
    getAll() {
        return this.trackService.getAll()
    }
    
    @Delete(':id')
    delete(@Param('id') id: mongoose.Schema.Types.ObjectId) {
        return this.trackService.delete(id)
    }
    
    @Get(':id')
    getOne(@Param('id') id: mongoose.Schema.Types.ObjectId) {
        return this.trackService.getOne(id)
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto)
    }

}