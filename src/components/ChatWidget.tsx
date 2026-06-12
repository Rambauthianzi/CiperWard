"use client";
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="glass mb-3 w-72 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald" />
            CipherWard Support
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Hi — a security specialist is online. How can we help protect your
            business today?
          </p>
          <input
            placeholder="Type a message..."
            className="mt-3 w-full rounded-full border border-border bg-input px-4 py-2 text-xs text-foreground outline-none"
          />
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground glow-cyan transition hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>
    </div>
  );
}
