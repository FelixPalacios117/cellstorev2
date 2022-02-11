const mongoose = require("mongoose");

const databaseSetUp = async () => {
    const connected = await connectToDatabase();
    if (!connected) {
        process.exit(1);
    }
};

const connectToDatabase = async () => {
    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    };
    try {
        console.log(process.env.MONGO_URL);
        await mongoose.connect(`${process.env.MONGO_URL}`, connectionOptions);
        console.log("Base conectada");
        return true;
    } catch (error) {
        console.log("No se pudo conectar"+error);
    }
};
module.exports = { connectToDatabase, databaseSetUp };