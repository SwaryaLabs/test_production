"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/api', (req, res) => {
    res.send('API is up and running! 🚀');
});
const staticPath = node_path_1.default.resolve('public');
app.use('/static', express_1.default.static(staticPath));
app.get(`/{*splat}`, (req, res) => {
    res.sendFile(`${staticPath}/index.html`);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
