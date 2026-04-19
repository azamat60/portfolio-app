"use client";

import { useEffect, useState } from "react";

const LINES = [
  { type: "cmd" as const, text: "whoami" },
  { type: "output" as const, text: "Azamat Altymyshev" },
  { type: "cmd" as const, text: "echo $ROLE" },
  { type: "output" as const, text: "Senior Fullstack Developer" },
  { type: "cmd" as const, text: "echo $LOCATION" },
  { type: "output" as const, text: "Bishkek, Kyrgyzstan · UTC+6" },
  { type: "cmd" as const, text: "echo $TECHSTACK" },
  { type: "output" as const, text: "React, TypeScript, Next.js, Node.js" },
];

function Prompt() {
  return (
    <span style={{ userSelect: "none" }}>
      <span className="term-user">azamat</span>
      <span className="term-at">@</span>
      <span className="term-host">portfolio</span>
      <span className="term-at">:</span>
      <span className="term-path">~</span>
      <span className="term-at">$ </span>
    </span>
  );
}

function useTyping(lines: typeof LINES, charDelay = 16, linePause = 200) {
  const [done, setDone] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (done >= lines.length) return;
    const line = lines[done];
    const lineLen = line.text.length;
    if (charCount >= lineLen) {
      const t = setTimeout(() => {
        setDone((d) => d + 1);
        setCharCount(0);
      }, linePause);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCharCount((c) => c + 1), charDelay);
    return () => clearTimeout(t);
  }, [charCount, done, lines, charDelay, linePause]);

  return { done, charCount };
}

export default function Terminal() {
  const { done, charCount } = useTyping(LINES);
  const allDone = done >= LINES.length;

  return (
    <div className="terminal-wrap">
      <div className="terminal">
        <div className="terminal-chrome">
          <div className="chrome-dots">
            <span className="chrome-dot r" />
            <span className="chrome-dot y" />
            <span className="chrome-dot g" />
          </div>
          <div className="chrome-title">azamat@portfolio: ~ — zsh</div>
          <div className="chrome-meta">80×24</div>
        </div>
        <div className="terminal-body">
          {LINES.map((line, idx) => {
            const isPast = idx < done;
            const isActive = idx === done;
            if (!isPast && !isActive) return null;

            if (line.type === "cmd") {
              const shown = isPast ? line.text : line.text.slice(0, charCount);
              return (
                <span className="term-line" key={idx}>
                  <Prompt />
                  {shown}
                  {isActive && <span className="cursor" />}
                </span>
              );
            }

            if (line.type === "output") {
              const shown = isPast ? line.text : line.text.slice(0, charCount);
              return (
                <span
                  className="term-line"
                  key={idx}
                  style={{ color: "var(--text-muted)", paddingLeft: 2 }}
                >
                  {shown}
                  {isActive && <span className="cursor" />}
                </span>
              );
            }

            return null;
          })}

          {allDone && (
            <span className="term-line">
              <Prompt />
              <span className="cursor" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
