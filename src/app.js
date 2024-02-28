import * as dotenv from 'dotenv';
dotenv.config();
import express from "express"
import path from 'path';
import url from 'url';
import { connectDB } from './db/index.js';
import cookieParser from 'cookie-parser';
import { authenticatedUser } from './middleware/authentication.js';
import { Blog } from './models/blog.model.js';

const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"))
app.use(express.urlencoded({extended: false})); 
app.use(authenticatedUser("token"));

import {router as userRouter} from './routes/user.route.js';
import { router as blogRouter } from './routes/blog.route.js';
//Routes

app.get("/",async(req,res)=>{
    const blogData = await Blog.find({}).sort({createdAt:-1});
    return res.render("home",{user:req.user,blog:blogData});
 });
 app.use("/api/users",userRouter)
 app.use("/api/blogs",blogRouter)

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is Running on ${port}`)
    })
})
.catch((err)=>{
    console.log(`Database connection failed`,err)
})
