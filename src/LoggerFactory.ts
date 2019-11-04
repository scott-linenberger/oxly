import { nullLiteral } from "@babel/types";

class LoggerFactory {
    public getLogger(): null {
        return null;
    }
}

export default new LoggerFactory();
