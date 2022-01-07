import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent></Mycomponent>
    </div>
  );
}

function Mycomponent() {
  const [message, setMessage] = useState("type here");
  const [messagelist, setMessagelist] = useState(["Hello World"]);

  const addMessage = (e) => {
    const newList = [message, ...messagelist];

    setMessagelist(newList);
    setMessage("");
  };

  const newMessage = (e) => {
    const updateMessage = e.target.value;
    setMessage(updateMessage);
  };

  return (
    <div>
      <div className="bg-secondary">
        <h1>MyChatApp</h1>
        <p>by Kishor Lahade</p>
      </div>
      <div>
        <input
          type="text"
          value={message}
          placeholder="Let's chat here..."
          onChange={newMessage}
        />
        <input type="button" value="SEND" onClick={addMessage} />
      </div>
      <div>
        {messagelist.map((item) => (
          <div className="bg-success mt-2 p-2">{item}</div>
        ))}
      </div>
    </div>
  );
}
