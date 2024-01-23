"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //midleware que transforma la req.body a json
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
app.use('/api/diaries', diaries_1.default);
