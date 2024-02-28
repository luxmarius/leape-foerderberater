import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

function Chatbot() {
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hallo, ich bin dein Fördernavigator!",
      sender: "ChatGPT",
    },
  ]);

  // This function should be outside of handleUserMessage
  async function processUserMessageToYourChatbot(userMessage) {
    try {
      const response = await fetch(`https://us-central1-foerderpilot.cloudfunctions.net/foerderpilot?text=${encodeURIComponent(userMessage)}`);
      const contentType = response.headers.get('Content-Type');
      if (contentType.includes('application/json')) {
        const data = await response.json();
        // Update chat messages with your chatbot's response
        setChatMessages(currentMessages => [
          ...currentMessages,
          {
            message: data.answer, // Adjust based on actual data structure
            sender: "ChatGPT",
          },
        ]);
      } else {
        const textResponse = await response.text();
        // Handle text/plain or other non-JSON responses
        setChatMessages(currentMessages => [
          ...currentMessages,
          {
            message: textResponse, // Directly display the plain text response
            sender: "ChatGPT",
          },
        ]);
      }
    } catch (error) {
      console.error('Error fetching from custom API:', error);
      setChatMessages(currentMessages => [
        ...currentMessages,
        {
          message: `Sorry, there was an error processing your request: ${error.message}`,
          sender: "ChatGPT",
        },
      ]);
    } finally {
      // Ensure the typing indicator is turned off after the operation completes
      setIsChatbotTyping(false);
    }
  }

  const handleUserMessage = async (userMessage) => {
    // Create a new user message object
    const newUserMessage = {
      message: userMessage,
      sender: "user",
      direction: "outgoing",
    };

    // Update chat messages state with the new user message
    const updatedChatMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedChatMessages);
 
    // Set the typing indicator for the chatbot
    setIsChatbotTyping(true);
 
    // Process user message with your chatbot
    await processUserMessageToYourChatbot(userMessage);
  };

  return (
    <div className="chatbot-container">
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={isChatbotTyping ? <TypingIndicator content="ChatGPT is thinking" /> : null}>
            {chatMessages.map((message, i) => (
              <Message
                key={i}
                model={{
                  message: message.message,
                  direction: message.sender === "ChatGPT" ? "incoming" : "outgoing",
                }}
              />
            ))}
          </MessageList>
          <MessageInput placeholder='Beschreibe dein Vorhaben...' onSend={handleUserMessage}/>
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default Chatbot;
