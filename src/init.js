import "./db";
import "./models/Video";
import app from "./server";

const PORT = 3400;

const handleListening = () => {
    console.log(`✅ server Listening on port http://localhost:${PORT}`);
}

// 요청을 실제로 처리하기 위해 server에 listen 메서드를 호출해야한다.
// 사용하고자 하는 포트 번호를 listen에 전달하고 함수 실행.
app.listen(PORT, handleListening);