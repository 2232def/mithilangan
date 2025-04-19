const express = require('express');
const cors = require('cors');
const { default: userRouter } = require('./routes/userRouter');
const { default: cartRouter } = require('./routes/cartRoute');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json())

connectDB(process.env.MONGO_URL);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})