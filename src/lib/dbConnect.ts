import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Db is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DB_URL || "", {});

    connection.isConnected = db.connections[0].readyState;
    console.log("Db is connected");
  } catch (error) {
    console.log("DB connection failed ", error);
    process.exit(1);
  }
};

export default dbConnect;
