import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaComments } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import profile from "../../data/profile.json";
import projects from "../../utils/projects";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I am Hasinur's AI assistant 👋" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const buildPrompt = (question) => {
    const skillsText = profile.skills
      ? Object.entries(profile.skills)
          .map(([category, items]) => `${category}: ${items.join(", ")}`)
          .join("; ")
      : "";

    const educationText = profile.education
      ? profile.education
          .map(
            (edu) =>
              `${edu.degree} - ${edu.institution} (${edu.year})` +
              (edu.details ? `: ${edu.details}` : ""),
          )
          .join(" | ")
      : "";

    const strengthsText = profile.strengths ? profile.strengths.join("; ") : "";
    const goalsText = profile.goals ? profile.goals.join("; ") : "";
    const languagesText = profile.languages ? profile.languages.join("; ") : "";
    const interestsText = profile.interests ? profile.interests.join("; ") : "";

    const userProfile = `Name: ${profile.name}
Title: ${profile.title}
Tagline: ${profile.tagline || ""}
Bio: ${profile.bio}
Summary: ${profile.summary}
Experience Level: ${profile.experienceLevel}
Location: ${profile.locations}
Availability: ${profile.availability}
Skills: ${skillsText}
Education: ${educationText}
Strengths: ${strengthsText}
Working Style: approach: ${profile.workingStyle?.approach || ""}; teamwork: ${profile.workingStyle?.teamwork || ""}; learning: ${profile.workingStyle?.learning || ""}
Goals: ${goalsText}
Languages: ${languagesText}
Interests: ${interestsText}
Contact: email: ${profile.contact.email}; github: ${profile.contact.github}; portfolio: ${profile.contact.portfolio}; linkedin: ${profile.contact.linkedin}`;

    const projectSummaries = projects
      .map(
        (p) =>
          `- ${p.title}
  Live: ${p.liveLink}
  Description: ${p.description}
  Technologies: ${p.technologies.join(", ")}`,
      )
      .join("\n\n");

    return `
You are a professional AI portfolio assistant for Hasinur Rahman.

🎯 PURPOSE:
- Help visitors understand Hasinur Rahman's skills, experience, and projects.
- Act like a smart, friendly assistant on a personal portfolio website.

🧑‍💼 PERSONALITY & TONE:
- Friendly, conversational, and confident
- Professional but not robotic
- Clear and concise (avoid long paragraphs)
- Sounds like a real human, not an AI
- Slightly persuasive (help impress recruiters)

📌 STRICT RULES:
- ONLY answer using the provided portfolio data
- DO NOT make up information
- DO NOT answer unrelated/general questions
- If question is unrelated, respond EXACTLY with:
  "I can only answer questions about Hasinur Rahman and his portfolio."

📊 HOW TO ANSWER:
- Keep answers short and structured
- Use bullet points if helpful
- Highlight skills and technologies when relevant
- If asked about projects → explain clearly + mention tech stack
- If asked about skills → group them nicely
- If asked "why hire" → confidently summarize strengths

💡 SPECIAL BEHAVIOR:
- If user asks about contact → show email/github clearly
- If user asks vague question → interpret it in a portfolio context
- If multiple projects match → suggest best one

-----------------------
📁 PROFILE:
${userProfile}

-----------------------
🚀 PROJECTS:
${projectSummaries}

-----------------------
❓ USER QUESTION:
${question}

-----------------------
💬 ANSWER:
`;
  };

  const sendMessage = async () => {
    if (!input.trim()) {
      setError("Please type your question before sending.");
      return;
    }

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const rawPrompt = buildPrompt(input);
      const result = await model.generateContent(rawPrompt);
      const response = result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "bot", text }]);
    } catch (err) {
      setError("Something went wrong. Come back later or contact directly.");
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, I couldn't process that. Please retry." },
      ]);
      console.error("Chatbot error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-4 left-4 right-4 sm:bottom-24 sm:right-24 sm:left-auto z-[1000] max-w-[min(92vw,360px)] w-full sm:w-[min(92vw,360px)] h-[70vh] sm:h-[min(75vh,560px)] bg-white dark:bg-slate-900 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-blue-200 dark:border-blue-700 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <span className="font-bold text-sm">AI Assistant</span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded hover:bg-white/20 transition"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-auto p-3 space-y-3 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed break-words whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="text-xs text-slate-500 dark:text-slate-300">
                Typing...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {error && (
            <div className=" px-3 py-2 bg-red-50 border border-red-200 text-red text-xs">
              {error}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center border-t border-slate-200 dark:border-slate-700 p-2 gap-2 bg-white/90 dark:bg-slate-900/90">
            <input
              className="w-11/12 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        title="AI Assistant"
        className="fixed bottom-20 md:bottom-36 right-5 z-[100] w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl border border-white/50 transition-all duration-200"
        aria-label="Toggle chat"
      >
        {open ? <IoClose size={24} /> : <FaComments size={22} />}
      </button>
    </>
  );
};

export default Chatbot;
