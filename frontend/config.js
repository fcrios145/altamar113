
/*const ip = Object.values(require("os").networkInterfaces())
        .flat()
        .filter((item) => !item.internal && item.family === "IPv4")
        .find(Boolean).address; */

export const IP = "192.168.15.4"
export const PORT = "8000"
export const ADDRESS = `http://${IP}:${PORT}`;
