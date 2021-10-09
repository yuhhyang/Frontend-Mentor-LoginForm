import React, { useState } from "react";

// Card 有兩個區塊，拿來共用
function Card({ children, className }) {
  return (
    <div
      className={clsx("rounded-lg w-full p-4 text-center shadow", className)}
    >
      {children}
    </div>
  );
}
// 避免 Card className 的空格
// 判斷布林值
function clsx(...str) {
  return str.filter(Boolean).join(" ");
}
// input
function TextField({ id, label }) {
  const [value, setValue] = useState("");
  return (
    <div className="relative flex items-center">
      <label
        htmlFor={id}
        className={
          // 打字的時候讓文字提示變透明F
          clsx("absolute px-3", value !== "" && "opacity-0")
        }
      >
        {label}
      </label>
      <input
        className="border w-full p-3 rounded"
        type="text"
        name={id}
        id={id}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

function App() {
  return (
    <div className="text-white px-6 space-y-16">
      <article className="pt-24 text-center space-y-6">
        <h1 className="font-bold text-2xl">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>
      <section className="grid gap-6">
        <Card className="bg-blue">
          <p className="px-8">
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </p>
        </Card>
        <Card className="bg-white text-blue-dark">
          <form className="space-y-4">
            <TextField id="first-name" label="Fist Name" />
            <TextField id="last-name" label="Last Name" />
            <TextField id="email" label="Email" />
            <TextField id="password" label="Password" />
          </form>
        </Card>
      </section>
    </div>
  );
}

export default App;
