import express from "express";
const app = express();
import morgan from "morgan";
import bodyParser from "body-parser";
import { ConnectMongoose } from "./connection.js";
import blogRoutes from "./api/routes/blog.js";
import portfolioRoutes from "./api/routes/portfolio.js";
import testimonialRoutes from "./api/routes/testimonial.js";
import userRoutes from "./api/routes/user.js";
import contactRoutes from "./api/routes/contact.js";
import authRoutes from "./api/routes/auth.js";
import statsRoutes from "./api/routes/stats.js";
import careerRoutes from "./api/routes/career.js";

ConnectMongoose();

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/blog", blogRoutes);
app.use("/testimonial", testimonialRoutes);
app.use("/portfolio", portfolioRoutes);
app.use("/user", userRoutes);
app.use("/contact", contactRoutes);
app.use("/auth", authRoutes);
app.use("/stats", statsRoutes);
app.use("/career", careerRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
