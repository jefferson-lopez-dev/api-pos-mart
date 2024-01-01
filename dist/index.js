"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const libs_1 = require("./libs");
(0, libs_1.ConnectionDB)();
const PORT = 1204;
app_1.app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
