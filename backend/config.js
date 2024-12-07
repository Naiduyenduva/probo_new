const MongoURL = process.env.MongoURL
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET
const JWT_USER_SECRET = process.env.JWT_USER_SECRET

module.exports = {
    MongoURL,
    JWT_ADMIN_SECRET,
    JWT_USER_SECRET
}