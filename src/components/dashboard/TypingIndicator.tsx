const TypingIndicator = () => (
  <div className="flex justify-start mb-4 animate-fade-in">
    <div className="bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-dot-bounce" style={{ animationDelay: "0s" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-dot-bounce" style={{ animationDelay: "0.16s" }} />
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-dot-bounce" style={{ animationDelay: "0.32s" }} />
    </div>
  </div>
);

export default TypingIndicator;
