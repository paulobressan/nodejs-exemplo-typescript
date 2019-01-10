import * as mongoose from 'mongoose'
import { environment } from './environment';

export abstract class BaseRepository<D extends mongoose.Document> {
    pageSize: number
    constructor(protected model: mongoose.Model<D>) {
        this.pageSize = parseInt(environment.server.pageSize)
    }

    prepareOne(query: mongoose.DocumentQuery<D, D>): mongoose.DocumentQuery<D, D> {
        return query;
    }

    prepareAll(query: mongoose.DocumentQuery<D[], D>): mongoose.DocumentQuery<D[], D> {
        return query;
    }

    findAll(page: number): mongoose.DocumentQuery<D[], D> {
        let skip = this.pageSize * (page - 1);
        return this.prepareAll(this.model.find())
            .skip(skip)
            .limit(this.pageSize)
    }

    countDocuments(): Promise<number> {
        return this.model.countDocuments({})
            .exec()
    }

    documentName(): string {
        return this.model.collection.name
    }
}