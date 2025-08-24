import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return (
      <div className="center">
        <div className="box">
          <h1 className="" style={{color:'green'}}>Your message is Sent to Your Special One!</h1>
        </div>
      </div>
    );
  }

  // count words (ignores extra spaces)
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="center">
      <div className="box">
        <h2 className="heading" style={{color:'blue'}}>Message Your Someone</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
          }}
        >
          <textarea
            placeholder="Type Something !!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea"
          />
          <br />
          <button
            type="submit"
            className={`btn ${wordCount >= 2 ? "visible" : "hidden"}`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

function sendMessage(message) {
  console.log("Message sent:", message);
  alert(`📩 Your Message:\n\n${message}`);
}
