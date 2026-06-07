import { useState, useRef, useEffect } from "react";
import { Send, Paperclip, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { starterMessages, mockAIResponses } from "@/lib/mockData";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  fileName?: string;
}

const AssistantTab = () => {
  const { user } = useAuth();
  const [sessionId] = useState(() => `session-${user?.id}-${Date.now()}`);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [attachedFile, setAttachedFile] = useState<{ name: string; base64: string } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim() && !attachedFile) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text, timestamp: new Date(), fileName: attachedFile?.name };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setAttachedFile(null);
    setIsTyping(true);

    try {
      const res = await fetch("https://kasperheron.app.n8n.cloud/webhook/nara-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_id: user?.id, message: text, session_id: sessionId,
          ...(attachedFile && { file_base64: attachedFile.base64, file_name: attachedFile.name }),
        }),
      });
      if (!res.ok) throw new Error("Webhook error");
      const data = await res.json();
      const reply = typeof data === "string" ? data : data.response || data.output || data.message || JSON.stringify(data);
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: reply, timestamp: new Date() }]);
    } catch {
      const mockReply = mockAIResponses[text] || `Jeg mottok meldingen din: "${text}". Webhook er ikke tilgjengelig akkurat nå.`;
      await new Promise((r) => setTimeout(r, 1200));
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: mockReply, timestamp: new Date() }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFileAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      setAttachedFile({ name: file.name, base64 });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const ta = textareaRef.current;
    if (ta) { ta.style.height = "auto"; ta.style.height = Math.min(ta.scrollHeight, 120) + "px"; }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-[20px] font-semibold mb-1" style={{ color: "#1D1D1F" }}>
              Hei 👋
            </h2>
            <p className="text-[14px] mb-8" style={{ color: "#8E8E93" }}>Hva kan jeg hjelpe deg med i dag?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full">
              {starterMessages.map((msg) => (
                <button
                  key={msg}
                  onClick={() => sendMessage(msg)}
                  className="text-left text-[13px] rounded-xl px-4 py-3.5 transition-colors hover:bg-[#F5F5F7]"
                  style={{ border: "1px solid #E8E8ED", color: "#6E6E73" }}
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-1">
            {messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      <div className="px-6 md:px-10 py-4" style={{ borderTop: "1px solid #F0F0F2" }}>
        <div className="max-w-3xl mx-auto">
          {attachedFile && (
            <div className="flex items-center gap-2 mb-2 px-3 py-1.5 rounded-lg text-[12px] w-fit" style={{ background: "#F5F5F7", color: "#6E6E73" }}>
              <Paperclip className="h-3 w-3" />
              {attachedFile.name}
              <button onClick={() => setAttachedFile(null)} className="hover:opacity-70"><X className="h-3 w-3" /></button>
            </div>
          )}
          <div className="flex items-end gap-2 rounded-xl px-3 py-2.5" style={{ border: "1px solid #E8E8ED", background: "#FAFAFA" }}>
            <button onClick={() => fileInputRef.current?.click()} className="shrink-0 mb-0.5 hover:opacity-70" style={{ color: "#8E8E93" }}>
              <Paperclip className="h-4 w-4" />
            </button>
            <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" onChange={handleFileAttach} className="hidden" />
            <textarea
              ref={textareaRef} value={input} onChange={handleTextareaChange} onKeyDown={handleKeyDown}
              placeholder="Skriv inn spørsmål eller last opp et Excel-ark..."
              rows={1}
              className="flex-1 resize-none bg-transparent text-[14px] placeholder:opacity-50 focus:outline-none"
              style={{ color: "#1D1D1F" }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() && !attachedFile}
              className="shrink-0 mb-0.5 rounded-lg p-1.5 transition-opacity disabled:opacity-30"
              style={{ background: "#0071E3", color: "#FFFFFF" }}
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantTab;
