import React from "react";

// Card 有兩個區塊，拿來共用
function Card({ children,className }) {
  return (
    <div className={clsx("rounded-lg w-full p-4 text-center shadow",className)}>{children}</div>
  );
}
// 避免 Card className 的空格
function clsx(...str){
  return str.join(" ");
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
          <p className="px-8"><b>Try it free 7 days</b> then $20/mo. thereafter</p>
        </Card>
        <Card className="bg-white">

        </Card>
      </section>
    </div>
  );
}

export default App;
