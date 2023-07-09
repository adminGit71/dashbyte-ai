import React, { useEffect } from 'react';

function ChatList({ messages }) {
  // Log the messages prop when it changes
  useEffect(() => {
    console.log('Messages:', messages);
  }, [messages]);

  return (
    <div className="space-y-4 bg-gray-200 h-96 overflow-auto p-4">
    {messages.length > 0 ? messages.filter(message => message.role !== 'system').map((message, index) => (
      <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mx-2`}>
        <div className={`inline-block ${message.role === 'user' ? 'bg-user-blue text-white rounded-br-none' : 'bg-middle-gradient text-white rounded-bl-none'} rounded-md p-2`}>
          {message.content}
        </div>
      </div>
    )) : (
      <div className="max-w-xs mx-2 bg-white text-gray-800 rounded-md p-2">
        Start a conversation by typing a message below...
      </div>
    )}
    </div>
  );
}

export default ChatList;
