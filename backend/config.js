module.exports = {
    port: 3000,
    db: {
        development: "mongodb://127.0.0.1:27017/iNoteBook?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0",
    },
    authentication: {
        JWT_SECRET: "SECRET_STRING"
    }
}