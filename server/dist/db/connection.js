"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
exports.disconnectToDatabase = disconnectToDatabase;
const mongoose_1 = require("mongoose");
const envConfig_1 = require("../config/envConfig");
async function connectToDatabase() {
    try {
        await (0, mongoose_1.connect)(envConfig_1.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not connect to DB");
    }
}
async function disconnectToDatabase() {
    try {
        await (0, mongoose_1.disconnect)();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disscont to DB");
    }
}
//# sourceMappingURL=connection.js.map