import React from "react";

// Type for Message Props
interface MessageProps {
  message: {
    id: number;
    sender: string;
    text: string;
    reactions: string[];
  };
  onReaction: (messageId: number, reaction: string) => void;
}

const ChatMessage: React.FC<MessageProps> = ({ message, onReaction }) => {
  const handleReactionClick = (reaction: string) => {
    onReaction(message.id, reaction);
  };

  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      } mb-4 group`} // Add 'group' here to control hover effect
    >
      <div
        className={`p-4 max-w-xs bg-gray-200 rounded-lg ${
          message.sender === "bot" ? "bg-blue-100" : "bg-green-100"
        }`}
      >
        <p>{message.text}</p>

        {/* Reactions */}
        <div
          className="mt-2 flex space-x-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {["👍", "👎", "❤️", "😂"].map((reaction) => (
            <button
              key={reaction}
              onClick={() => handleReactionClick(reaction)}
              className="hover:text-blue-500"
            >
              {reaction}
            </button>
          ))}
        </div>

        {/* Display Reactions */}
        {message.reactions.length > 0 && (
          <div className="mt-2 text-xs text-gray-600">
            Reactions: {message.reactions.join(", ")}
          </div>
        )}

        {/* Options (Delete, Reply) */}
        <div className="mt-2 text-xs text-gray-500">
          <button className="mr-2 hover:text-blue-500">Reply</button>
          <button className="hover:text-red-500">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
