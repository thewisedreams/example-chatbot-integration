import "./App.css";
import { useEffect } from "react";

function App() {
  const originUrl = import.meta.env.VITE_URL_CHATBOT;
  useEffect(() => {
    const handler = (event: {
      origin: string;
      data: { type: string; open: boolean };
    }) => {
      if (event.origin !== import.meta.env.VITE_URL_CHATBOT) return;
      if (event.data.type === "resize") {
        const iframe = document.getElementById("chatbot");
        const buttonHeight = "68px";
        const buttonWidth = "68px";
        const modalHeiight = 600 + "px";
        const modalWidth = 407 + "px";

        if (!iframe) {
          return;
        }

        if (event.data.open) {
          iframe.style.height = modalHeiight;
          iframe.style.width = modalWidth;
        } else {
          iframe.style.height = buttonHeight;
          iframe.style.width = buttonWidth;
        }
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <>
      <div>
        <h1 style={{ color: "green" }}>The Wise Dreams</h1>
      </div>

      <div
        style={{
          width: "clamp(0px, 95%, 600px)",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <p>
          This is an example of how one of our chatbots can be integrated into a
          client's website, for instance, using an iframe in a modern React
          application
        </p>
      </div>
      <div className="card">
        <p>
          Example by{" "}
          <a href="thewisedreams.com" className="read-the-docs">
            The Wise Dreams
          </a>
        </p>
      </div>

      <iframe
        id="chatbot"
        title="chatbot"
        style={{ position: "absolute", right: 0, bottom: 0, border: "none" }}
        src={originUrl + "/thewisedreams"}
      ></iframe>
    </>
  );
}

export default App;
