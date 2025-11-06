import { ChatMessage } from "../ChatMessage";

export default function ChatMessageExample() {
  return (
    <div className="p-6 max-w-2xl">
      <ChatMessage
        id="1"
        sender="Aarav Gupta"
        message="Hey everyone! Ready for today's study session?"
        timestamp={new Date(Date.now() - 3600000)}
        isOwnMessage={false}
      />
      <ChatMessage
        id="2"
        sender="You"
        message="Yes! I have some questions about the last lecture."
        timestamp={new Date(Date.now() - 3000000)}
        isOwnMessage={true}
      />
      <ChatMessage
        id="3"
        sender="Diya Reddy"
        message="Same here. Can we go over the recursion examples?"
        timestamp={new Date(Date.now() - 1800000)}
        isOwnMessage={false}
      />
    </div>
  );
}
