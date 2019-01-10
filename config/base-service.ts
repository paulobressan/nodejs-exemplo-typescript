export abstract class BaseService {
    constructor(protected basePath: string) { }

    envelope(document: any): any {
        let resource = Object.assign({ _links: {} }, document.toJSON());
        resource._links.self = `${this.basePath}/${resource._id}`;
        return resource;
    }

    envelopeAll(documents: any[], options: any = {}): any {
        console.log(options);

        const resource: any = {
            _links: {
                self: options.url
            },
            items: documents
        }
        if (options.page && options.count && options.pageSize) {
            if (options.page > 1) {
                resource._links.previous = `/${this.basePath}?page=${options.page - 1}`
            }
            const remaing = options.count - (options.page * options.pageSize)
            console.log(remaing);

            if (remaing > 0)
                resource._links.next = `/${this.basePath}?page=${options.page + 1}`
        }
        return resource;
    }
}