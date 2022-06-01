import * as dotenv from "dotenv";
import path from "path";

let subfix = "";
if (process.env.ENV == "test") {
    subfix = "_test";
}

export class CollectionNames {
    public static USER = "user" + subfix;    
    public static ROLE = "role" + subfix;    
}


