import ReactMarkdown from "react-markdown";
import { formatTime } from "@/lib/formatters";
import { Paperclip } from "lucide-react";

interface Props {
  message: {
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
    fileName?: string;
  };
}

const ChatMessage = ({ message }: Props) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fade-in mb-4`}>
      <div className={`max-w-[85%] ${isUser ? "order-1" : ""}`}>
        {message.fileName && (
          <div className="flex items-center gap-1.5 mb-1 text-xs text-muted-foreground">
            <Paperclip className="h-3 w-3" />
            {message.fileName}
          </div>
        )}
        <div
          className={`rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
            isUser
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-foreground"
          }`}
        >
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <div className="prose-nara">
              <ReactMarkdown
                components={{
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-xs border-collapse">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="border-b border-border">{children}</thead>
                  ),
                  th: ({ children }) => (
                    <th className="text-left px-3 py-1.5 text-muted-foreground font-medium">{children}</th>
                  ),
                  td: ({ children }) => (
                    <td className="px-3 py-1.5 border-b border-border/50">{children}</td>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                  ul: ({ children }) => <ul className="list-disc ml-4 my-2 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal ml-4 my-2 space-y-1">{children}</ol>,
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>
        <p className={`text-[10px] text-muted-foreground mt-1 ${isUser ? "text-right" : "text-left"}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
