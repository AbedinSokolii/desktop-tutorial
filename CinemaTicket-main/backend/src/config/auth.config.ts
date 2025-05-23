export const AUTH_CONFIG = {
    jwtSecret: process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production",
    jwtExpiresIn: "24h",
    saltRounds: 10
}; 