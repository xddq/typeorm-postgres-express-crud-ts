// for database
import "reflect-metadata";
import {createConnection} from "typeorm"

// for webserver
import express from "express"
import itemsRouter from "./route/items"
import authenticate from "./middleware/checkAuthenticated"


// Need to do this to ensure "top level await".
const main = async () => {
    // creates connection to postgres instance.
    try {
        // NOTE: this uses the config specified in ormconfig.json.
        await createConnection();
        console.log("Connected to postgres instance!")
    }
    catch (e) {
        console.error("Could not connect to postgres instance!")
        console.error(e)
        return
    }

    // creates an express app.
    const app = express()

    // NOTE(pierre): the order of app.use actually does matter. It is fifo applied
    // to our app.
    // this will run the authenticated middleware on every route!
    app.use(authenticate)

    // adds json middleware to express. enables us to get json data from the
    // request. Parses request to json.
    app.use(express.json())

    // used to get our shopping cart items.
    app.use("/items", itemsRouter)

    // starting the serve and listening on port 3001.
    app.listen(3001, () => console.log("Listening on port 3001!"))
}

main()

