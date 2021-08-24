import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videosRouter";

const PORT = 4000;
const app = express();

const logger = morgan("dev");
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(logger);
app.use(express.urlencoded({extended : true}));

app.use("/", globalRouter); // 주소("/")의 요청이 있을 경우에만 설정한 미들웨어를 실행(express를 인자로 받는다.). // 
app.use("/users", userRouter); 
app.use("/videos", videoRouter); // "/video" url로 들어가는 요청이 있을 떄 videoRouter를 실행한다.

const handleListening = () => {
    console.log(`server Listening on port http://localhost:${PORT}`);
}

// 요청을 실제로 처리하기 위해 server에 listen 메서드를 호출해야한다.
// 사용하고자 하는 포트 번호를 listen에 전달하고 함수 실행.
app.listen(PORT, handleListening)