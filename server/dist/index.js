"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const envConfig_1 = require("./config/envConfig");
const connection_1 = require("./db/connection");
// Connection
const port = envConfig_1.PORT || 4000;
(0, connection_1.connectToDatabase)()
    .then(() => {
    app_1.default.listen(port, () => {
        console.log(`Server is running on Port ${port}`);
    });
})
    .catch((err) => {
    console.error("Error connecting to database:", err);
});
//# sourceMappingURL=index.js.map