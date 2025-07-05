
import React, { useState, useRef, useEffect } from 'react';
import Section from './Section';
import { PROFILE_INFO, PROJECTS, RESEARCH_PAPERS } from '../constants';


const BotIcon = ({ className }: {className?: string}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 1.12-1.69 1.93-2.31.2-.15.25-.42.1-.63-.15-.2-.42-.25-.63-.1-.9.68-1.68 1.56-2.18 2.6C6.1 17.57 6 17.22 6 16.85c0-1.18.25-2.29.69-3.32.16-.39-.04-.84-.44-1-.39-.16-.84.04-1 .44C4.6 14.1 4 15.45 4 16.85c0 .99.19 1.93.53 2.79.23.58.83.94 1.44.84.1-.02.19-.05.28-.1zM12 20c-2.08 0-3.92-1.19-4.79-3h9.58A5.46 5.46 0 0 1 12 20zm7.93-1.72c-.5-1.04-1.28-1.92-2.18-2.6-.21-.15-.48-.1-.63.1s-.15.48.05.63c.81.62 1.5 1.41 1.93 2.31.1.22.31.35.53.35.08 0 .17-.02.25-.06.61-.23.91-.85.68-1.43zm.54-3.49c-.4-.4-.96-.56-1.35-.35-.31.16-.5.49-.41.82.51 1.09.83 2.28.83 3.54 0 .37-.01.72-.1 1.07-.06.23.07.47.3.58.07.03.15.05.22.05.16 0 .32-.08.41-.23.35-.59.54-1.28.54-2 .01-1.4-.6-2.75-1.67-3.88zM12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
);

const SendIcon = ({ className }: {className?: string}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

const MessageContent = ({ text }: {text: string}) => {
    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, mailto: string) => {
        e.preventDefault();
        window.location.href = mailto;
    };
    const linkRegex = /\[(.*?)\]\((mailto:.*?)\)/g;
    const parts = text.split(linkRegex);
    return (
        <>
            {parts.map((part, i) => {
                if (i % 3 === 1) { // Link text
                    const mailto = parts[i + 1];
                    return (
                        <a key={i} href={mailto} onClick={(e) => handleEmailClick(e, mailto)} className="text-[var(--color-primary)] font-semibold underline hover:brightness-110 transition-all">
                            {part}
                        </a>
                    );
                }
                if (i % 3 === 2) return null; // Mailto URL, already used
                return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
        </>
    );
};

const TypingIndicator = () => (
    <div className="flex items-center space-x-1.5 p-3">
        <div className="w-2 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce"></div>
    </div>
);

export default function Contact() {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);
    
    const [messages, setMessages] = useState([
        { 
            role: 'assistant', 
            content: "Hello! I'm KTA's AI assistant. I can answer questions about his projects, research, or skills. How may I help you?"
        }
    ]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        const currentInput = input.trim();
        if (!currentInput || isLoading) return;

        const userMessage = { role: 'user', content: currentInput };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const projectsSummary = PROJECTS.map(p => `- '${p.title}': ${p.description}`).join('\n');
            const researchSummary = RESEARCH_PAPERS.map(r => `- '${r.title}' in ${r.journal}.`).join('\n');

            const systemInstruction = `You are a friendly, witty, and highly professional AI assistant for ${PROFILE_INFO.name}'s personal portfolio. Your primary audience is admissions officers from top-tier universities like MIT and Harvard. Your goal is to impress them by showcasing KTA's capabilities and facilitating contact.

**KTA's Profile:**
- **Aspiration:** ${PROFILE_INFO.aspiration}
- **Goal:** ${PROFILE_INFO.goal}
- **Key Skills:** ${PROFILE_INFO.keySkills.join(', ')}.
- **Projects:**
${projectsSummary}
- **Research:**
${researchSummary}

**Your Core Instructions:**
1.  **Tone:** Maintain a smart, engaging, and slightly formal tone. Be impressive.
2.  **Answer Concisely:** Provide accurate, concise answers based ONLY on the profile information provided.
3.  **Contact Protocol:** If a user expresses any interest in contacting KTA (e.g., "how can I email him?", "I'd like to talk to him"), you MUST respond with the following message verbatim: "Of course. I can help with that. You can reach out to him directly through this link:" followed by this exact markdown link: [Click here to send an email](mailto:${PROFILE_INFO.email}). Do not ask for the user's email or attempt to compose a message for them.
4.  **Handle Unknowns:** If you don't know the answer to a question, respond with: "That's an excellent question. I would recommend emailing KTA directly for more specific details." and then immediately provide the markdown link as specified in the Contact Protocol.
5.  **Initial Greeting:** You have already greeted the user. Do not repeat the greeting.
`;

            const history = [...messages, userMessage].slice(1).map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.content }],
            }));
            
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ history, systemInstruction })
            });

            if (!response.ok || !response.body) {
                const errorText = await response.text();
                throw new Error(`API request failed with status ${response.status}: ${errorText}`);
            }
            
            setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullResponse = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                fullResponse += decoder.decode(value, { stream: true });
                
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].content = fullResponse;
                    return newMessages;
                });
            }

        } catch (error) {
            console.error("AI chat error:", error);
            const errorMessageContent = `My apologies, I seem to be having some technical difficulties. You can contact Khan Tahsin Abrar directly by [clicking here](mailto:${PROFILE_INFO.email}).`;
            setMessages(prev => [...prev, { role: 'assistant', content: errorMessageContent }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <Section id="contact" title="Chat with My AI Assistant">
            <div className="max-w-2xl mx-auto bg-[var(--color-card-bg)] rounded-xl shadow-lg border border-[var(--color-border)] flex flex-col h-[60vh] overflow-hidden">
                <div className="flex-grow p-4 md:p-6 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                            {msg.role === 'assistant' && (
                                <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex-shrink-0 flex items-center justify-center">
                                    <BotIcon className="w-5 h-5 text-white" />
                                </div>
                            )}
                            <div className={`max-w-md p-3 rounded-lg text-base ${msg.role === 'user' ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-border)] text-[var(--color-text-primary)]'}`}>
                                <MessageContent text={msg.content} />
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                       <div className="flex items-start gap-3">
                           <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex-shrink-0 flex items-center justify-center">
                               <BotIcon className="w-5 h-5 text-white" />
                           </div>
                           <div className="max-w-md p-3 rounded-lg bg-[var(--color-border)]">
                               <TypingIndicator />
                           </div>
                       </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <div className="p-4 bg-[var(--color-card-bg)] border-t border-[var(--color-border)]">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-grow w-full px-4 py-2 bg-[var(--color-border)] text-[var(--color-text-primary)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={isLoading || !input.trim()} className="p-3 rounded-full bg-[var(--color-primary)] text-white disabled:bg-gray-400 disabled:cursor-not-allowed hover:brightness-110 transition-all transform hover:scale-105">
                            <SendIcon className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};