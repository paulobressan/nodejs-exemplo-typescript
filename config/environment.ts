export const environment = {
    server: {
        port: process.env.SERVER_PORT || 4000,
        pageSize: process.env.PAGE_SIZE || '5'
    },
    db: {
        url: 'mongodb://localhost/quake'
    }
}