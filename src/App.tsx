import { useEffect, useState } from "react";
import lunisolar from "lunisolar";
import nzh from "nzh";
function App() {
  const [d, setD] = useState(lunisolar(new Date()));
  useEffect(() => {
    setInterval(() => {
      setD(lunisolar(new Date()));
    }, 1000);
  }, []);
  return (
    <div className={"w-screen h-screen relative"}>
      <div
        id={"wallpaper"}
        className="absolute left-0 top-0 right-0 bottom-0 bg-cover z-0"
        style={{
          backgroundImage:
            'url("https://files.codelife.cc/wallpaper/wallspic/168026.jpg?x-oss-process=image/resize,limit_0,m_fill,w_2560,h_1440/quality,Q_92/format,webp")',
          backgroundPosition: "50%",
        }}
      />
      <div className="relative w-full h-full">
        <div className="h-[10vh]"></div>
        <div className="">
          <div className="text-center text-white">
            <div
              className={"text-[150px] font-bold drop-shadow-lg"}
              style={{
                lineHeight: "150px",
              }}
            >
              {d.format("HH:mm:ss")}
            </div>
            <div
              className={
                "flex gap-x-2 mt-2 justify-center text-zinc-100 tracking-wider"
              }
            >
              <span>{d.format("MM月DD日")}</span>
              <span>周{nzh.cn.encodeS(new Date().getDay())}</span>
              <span>{d.format("lMlD")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
