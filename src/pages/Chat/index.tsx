import React, { useState, useEffect } from "react";
import { Layout } from "../../components/Layout";
import { IconCloudComputingFilled, IconMessageUser, IconMicrophone, IconPlus, IconSend2, IconUser, IconUserHexagon } from "@tabler/icons-react";

const initialMessages = [
  { id: 1, sender: "bot", text: "Hello! How can I assist you today?", reactions: [], time: "3:00 PM" },
  { id: 2, sender: "user", text: "I need help with my account.", reactions: [], time: "3:02 PM" },
  { id: 3, sender: "bot", text: "Sure! Please tell me the issue.", reactions: [], time: "3:05 PM" },
];

const initialChats = [
  { id: 1, name: "Support Bot", lastMessage: "Want help from one of our buying advisors?" },
  { id: 2, name: "Sales Bot", lastMessage: "How can I help you today?" },
  { id: 3, name: "HR Bot", lastMessage: "Your leave request has been approved." },
  { id: 4, name: "IT Helpdesk", lastMessage: "Please restart your computer." },
  { id: 5, name: "Finance Bot", lastMessage: "Your expense report is under review." },
  { id: 6, name: "Marketing Bot", lastMessage: "New campaign launched successfully!" },
  { id: 7, name: "Admin Bot", lastMessage: "Your password will expire soon." },
  { id: 8, name: "Project Bot", lastMessage: "Project deadline is next week." },
];
const suggestions = [
  "Account Recovery",
  "Change Password",
  "Billing Issues",
  "Technical Support",
  "Other",
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [chats, setChats] = useState(initialChats);
  const [search, setSearch] = useState("");
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "user", text: newMessage, reactions: [], time: timestamp },
      ]);
      setNewMessage("");
      setShowQuickReplies(true);
    }
  };

  // Handle quick reply click (suggestions)
  const handleQuickReply = (reply: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: "user", text: reply, reactions: [], time: timestamp },
      { id: messages.length + 2, sender: "bot", text: `You selected: ${reply}`, reactions: [], time: "3:10 PM" },
    ]);
    setShowQuickReplies(false);
  };

  const handleNewChat = () => {
    const newId = chats.length + 1;
    const newChat = { id: newId, name: `New Chat ${newId}`, lastMessage: "" };
    setChats([newChat, ...chats]);
    setSelectedChatId(newId);
    setMessages([]);
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  // Responsive: Hide sidebar on mobile, show toggle button
  // Sidebar is shown on md+ screens, toggled on mobile
  return (
    <Layout title="Chat">
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        {/* Sidebar toggle button for mobile */}
        <button
          className="md:hidden fixed top-4 left-4 z-30 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 rounded-full shadow-md"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open chat list"
        >
          <IconMessageUser />
        </button>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar: Chat History */}
        <div
          className={`
            fixed z-30 inset-y-0 left-0 transform md:static md:translate-x-0
            transition-transform duration-200 ease-in-out
            w-72 sm:w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 md:flex
          `}
          style={{ maxWidth: "90vw" }}
        >
          {/* Close button for mobile */}
          <div className="md:hidden flex justify-end p-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close chat list"
            >
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search chats"
              className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            />
            <button
              onClick={handleNewChat}
              className="mt-3 w-full flex gap-2 justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              <IconPlus /> New Chat
            </button>
          </div>
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            {filteredChats.map(chat => (
              <div
                key={chat.id}
                onClick={() => {
                  setSelectedChatId(chat.id);
                  setMessages(initialMessages);
                  setSidebarOpen(false); // close sidebar on mobile after selecting
                }}
                className={`p-4 text-start justify-start cursor-pointer border-b border-gray-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900 ${
                  selectedChatId === chat.id ? "bg-purple-100 dark:bg-purple-900" : ""
                }`}
              >
                <div className="font-semibold text-gray-900 dark:text-gray-100">{chat.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{chat.lastMessage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col p-2 sm:p-4 md:p-6" style={{ minWidth: 0 }}>
          {/* Chat History */}
          <div className="flex-1 overflow-y-auto mb-4 bg-white dark:bg-gray-800 p-2 sm:p-4 rounded-lg shadow-md space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}  ${message.sender === "user" ? "items-end" : "items-start"}`}
              >
                {message.sender === "bot" && (
                  <IconUserHexagon className="text-black dark:text-white mr-2" />
                )}
                <div
                  className={`max-w-[80vw] sm:max-w-xs p-3 sm:p-4 rounded-lg ${
                    message.sender === "bot"
                      ? "bg-purple-100 dark:bg-purple-900"
                      : "bg-blue-100 dark:bg-blue-900"
                  }`}
                  style={
                    message.sender === "bot"
                      ? { borderRadius: "1px 20px 20px 20px" }
                      : message.sender === "user"
                      ? { borderRadius: "20px 20px 1px 20px" }
                      : undefined
                  }
                >
                  <p className="text-gray-900 dark:text-gray-100 text-sm sm:text-base">{message.text}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{message.time}</div>
                </div>
                {message.sender === "user" && (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full ml-2"
                    width={28}
                    height={28}
                    alt="Avatar"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Quick Reply Options */}
          {showQuickReplies && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleQuickReply(suggestion)}
                  className="bg-purple-600 text-white py-2 px-4 sm:px-6 rounded-full hover:bg-purple-700 text-sm sm:text-base"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="flex items-center space-x-2 sm:space-x-4 mt-4">
            {/* Attachment (+) button on the left */}
            <button
              className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center mr-1 sm:mr-2"
              aria-label="Attach"
              type="button"
            >
              <IconPlus />
            </button>
            {/* Input with mic and send arrow inside */}
            <div className="relative flex-1">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message"
                className="flex-1 w-full pl-10 pr-12 py-2 h-12 sm:h-20 border rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 text-sm sm:text-base"
              />
              <button
                className="absolute right-16 top-1/2 border-none -translate-y-1/2 text-gray-400 hover:text-purple-600 bg-transparent"
                type="button"
                aria-label="Mic"
                tabIndex={-1}
              >
                <IconMicrophone />
              </button>
              {/* Send arrow inside input, right */}
              <button
                onClick={handleSendMessage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 flex items-center justify-center"
                aria-label="Send"
                type="button"
              >
                <IconSend2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
