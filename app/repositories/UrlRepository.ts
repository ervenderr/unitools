import URL from "../models/URL";
import connectDB from "../config/db";

export class UrlRepository {
    private urlModel;

    constructor() {
        connectDB();
        this.urlModel = URL;
    }

    async getUrlById(id: string) {
        return this.urlModel.findById(id).lean();
    }
    
}
