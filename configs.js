const MongoStore = require('connect-mongo')

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/toDoApp'
const secret = process.env.SECRET || 'thisshouldbeabettersecret'

const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    secret,
})

store.on('error', (e) => {
    console.log('Session store error', e)
})

if (process.env.NODE_ENV === "production") {
    module.exports.sessionConfig = {
        store,
        secret,
        name: 'session',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: true,
            expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        }
    }
}
if (process.env.NODE_ENV !== "production") {
    module.exports.sessionConfig = {
        store,
        secret,
        name: 'session',
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        }
    }
}