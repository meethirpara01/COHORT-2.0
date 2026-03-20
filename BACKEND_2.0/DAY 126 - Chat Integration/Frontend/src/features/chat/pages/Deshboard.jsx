import { useSelector } from "react-redux"
import { useChat } from "../hook/useChat";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Deshboard = () => {

  const chat = useChat()
  const [chatInput, setChatInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const messagesEndRef = useRef(null)
  const user = useSelector((state) => state.auth.user)
  const chats = useSelector((state) => state.chat.chats)
  const currentChatId = useSelector((state) => state.chat.currentChatId)

  console.log(user);

  useEffect(() => {
    chat.initializeSocketConnection()
    chat.handleGetChat()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chats[currentChatId]?.messages])

  const handleSubmitMessage = (event) => {
    event.preventDefault()

    const trimmedMessage = chatInput.trim()
    if (!trimmedMessage) {
      return
    }

    chat.handleSendMessage({ message: trimmedMessage, chatId: currentChatId })
    setChatInput('')
  }

  const openChat = (chatId) => {
    chat.handleOpenChats(chatId, chats)
    setSidebarOpen(false)
  }

  return (
    <main className='h-screen w-full bg-gradient-to-br from-black via-[#0b0b0b] to-[#131313] text-white flex flex-col overflow-hidden'>
      {/* Background decorative elements */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl'></div>
      </div>

      <div className='relative flex flex-1 h-full overflow-hidden'>
        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div
            className='md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-all'
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside className={`
          fixed md:relative md:flex flex-col h-screen md:h-full w-64 md:w-72 shrink-0 z-40
          transition-all duration-300 ease-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          rounded-r-2xl md:rounded-2xl border border-zinc-700/50 
          bg-gradient-to-b from-[#0e0e0e]/98 to-[#0a0a0a]/98 
          p-4 sm:p-5 md:p-5 backdrop-blur-xl shadow-2xl shadow-black/40
          overflow-y-auto
        `}>
          {/* Header Badge */}
          <div className="mb-5 md:mb-6 flex items-center gap-3">
            <div className='w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10'>
              <div className='w-4 sm:w-5 h-4 sm:h-5 border-2 border-white/40 rounded-full'></div>
            </div>
            <div>
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Your</span>
              <p className="text-xs sm:text-sm font-semibold text-white">Conversations</p>
            </div>
          </div>

          {/* Logo */}
          <h1 className='mb-6 sm:mb-8 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent'>
            Perplexity
          </h1>

          {/* New Chat Button */}
          <button className='w-full mb-4 sm:mb-5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 active:scale-95'>
            + New Chat
          </button>

          {/* Chat List */}
          <div className='space-y-2 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700'>
            {Object.values(chats).length > 0 ? (
              Object.values(chats).map((chat, index) => (
                <button
                  onClick={() => { openChat(chat.id) }}
                  key={index}
                  type='button'
                  className='w-full cursor-pointer rounded-lg border border-zinc-700/40 bg-zinc-900/30 hover:bg-zinc-800/60 px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-600 hover:text-white active:scale-95 group'
                >
                  <div className='flex items-start gap-2'>
                    <span className='text-xs mt-0.5 text-zinc-500 group-hover:text-zinc-400'>•</span>
                    <span className='line-clamp-2 flex-1'>{chat.title}</span>
                  </div>
                </button>
              ))
            ) : (
              <div className='text-center py-8'>
                <p className='text-xs sm:text-sm text-zinc-500'>No conversations</p>
                <p className='text-xs text-zinc-600 mt-1'>Start a new chat</p>
              </div>
            )}
          </div>

          {/* User Info at bottom */}
          {user && (
            <div className='mt-4 sm:mt-6 pt-4 border-t border-zinc-700/30'>
              <div className='rounded-lg bg-zinc-900/50 p-3 border border-zinc-700/30'>
                <p className='text-xs font-semibold text-zinc-400 uppercase tracking-wider'>Account</p>
                <p className='text-xs sm:text-sm font-medium text-white mt-1 truncate'>{user?.name || user?.email || 'User'}</p>
              </div>
            </div>
          )}
        </aside>

        {/* Main Chat Area */}
        <section className='relative flex flex-1 flex-col overflow-hidden'>

          {/* Header */}
          <div className='flex items-center justify-between px-3 sm:px-4 md:px-6 py-4 sm:py-3 md:py-4 border-b border-zinc-700/30 bg-gradient-to-r from-transparent via-white/5 to-transparent flex-shrink-0'>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='md:hidden w-8 h-8 mr-3 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all'
            >
              <div className='flex flex-col gap-1'>
                <div className='w-4 h-0.5 bg-white/60'></div>
                <div className='w-4 h-0.5 bg-white/60'></div>
                <div className='w-4 h-0.5 bg-white/60'></div>
              </div>
            </button>

            <div className='flex items-center gap-2 md:gap-3 flex-1 md:flex-none'>
              <div className='w-6 md:w-8 h-6 md:h-8 rounded-lg bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center border border-white/10 flex-shrink-0'>
                <div className='w-3 md:w-4 h-3 md:h-4 border-2 border-white/30 rounded-full'></div>
              </div>
              <div className='min-w-0'>
                <h2 className='text-sm md:text-base font-bold text-white truncate'>
                  {chats[currentChatId]?.title || 'New Chat'}
                </h2>
                <p className='text-xs text-zinc-500'>AI Assistant</p>
              </div>
            </div>

            <span className='w-2 h-2 rounded-full bg-green-500/80 animate-pulse flex-shrink-0'></span>
          </div>

          {/* Messages Container */}
          <div className='messages flex-1 space-y-3 md:space-y-4 overflow-y-auto px-3 sm:px-4 md:px-6 py-4 md:py-6 pb-4 md:pb-6'>
            {chats[currentChatId]?.messages && chats[currentChatId].messages.length > 0 ? (
              chats[currentChatId].messages.map((message, idx) => (
                <div
                  key={message.id || idx}
                  className={`flex w-full animate-fade-in gap-2 md:gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {/* AI Avatar */}
                  {message.role !== 'user' && (
                    <div className='w-5 md:w-6 h-5 md:h-6 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex-shrink-0 flex items-center justify-center border border-white/10'>
                      <div className='w-2.5 md:w-3 h-2.5 md:h-3 border border-white/40 rounded-full'></div>
                    </div>
                  )}

                  <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`rounded-xl px-3 sm:px-4 md:px-5 py-2 md:py-3 text-xs sm:text-sm md:text-base leading-relaxed break-words max-w-xs sm:max-w-sm md:max-w-2xl ${message.role === 'user'
                        ? 'rounded-br-none bg-gradient-to-br from-white/15 to-white/5 text-white border border-white/20 shadow-lg shadow-white/10'
                        : 'rounded-bl-none border border-zinc-700/40 bg-zinc-900/40 text-zinc-100 shadow-lg shadow-black/20'
                        }`}
                    >
                      {message.role === 'user' ? (
                        <p className='leading-relaxed'>{message.content}</p>
                      ) : (
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className='mb-2 md:mb-3 last:mb-0 leading-relaxed'>{children}</p>,
                            ul: ({ children }) => <ul className='mb-2 md:mb-3 list-disc pl-4 md:pl-5 space-y-0.5 md:space-y-1'>{children}</ul>,
                            ol: ({ children }) => <ol className='mb-2 md:mb-3 list-decimal pl-4 md:pl-5 space-y-0.5 md:space-y-1'>{children}</ol>,
                            li: ({ children }) => <li className='text-zinc-100'>{children}</li>,
                            code: ({ children }) => <code className='rounded bg-black/40 px-1.5 md:px-2 py-0.5 md:py-1 font-mono text-xs text-emerald-300 border border-emerald-500/30'>{children}</code>,
                            pre: ({ children }) => <pre className='mb-2 md:mb-3 overflow-x-auto rounded-lg bg-black/60 border border-zinc-700/60 p-2 md:p-4 text-xs text-emerald-300'>{children}</pre>,
                            h1: ({ children }) => <h1 className='text-base md:text-lg font-bold mt-2 md:mt-3 mb-1 md:mb-2 text-white'>{children}</h1>,
                            h2: ({ children }) => <h2 className='text-sm md:text-base font-bold mt-2 md:mt-3 mb-1 md:mb-2 text-white'>{children}</h2>,
                            h3: ({ children }) => <h3 className='text-xs md:text-sm font-bold mt-1 md:mt-2 mb-0.5 md:mb-1 text-white'>{children}</h3>,
                          }}
                          remarkPlugins={[remarkGfm]}
                        >
                          {message.content}
                        </ReactMarkdown>
                      )}
                    </div>
                  </div>

                  {/* User Avatar */}
                  {message.role === 'user' && (
                    <div className='w-5 md:w-6 h-5 md:h-6 rounded-lg bg-gradient-to-br from-white/30 to-white/10 flex-shrink-0 flex items-center justify-center border border-white/20'>
                      <div className='w-2 md:w-2.5 h-2 md:h-2.5 bg-white/60 rounded-full'></div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className='h-full flex items-center justify-center flex-col gap-4'>
                <div className='w-10 md:w-12 h-10 md:h-12 rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center'>
                  <div className='w-5 md:w-6 h-5 md:h-6 border-2 border-white/20 rounded-full'></div>
                </div>
                <p className='text-zinc-400 text-center text-sm md:text-base'>Start a new conversation</p>
                <p className='text-zinc-600 text-xs md:text-sm'>Type a message below to begin</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmitMessage} className='px-3 sm:px-4 md:px-6 py-3 md:py-5 border-t border-zinc-700/30 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent flex-shrink-0'>
            <div className={`flex gap-2 md:gap-3 items-end transition-all duration-300 ${isFocused ? 'bg-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3 border border-white/10' : 'bg-transparent'}`}>
              <input
                type='text'
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder='Ask me anything...'
                className='w-full bg-transparent text-white outline-none placeholder-zinc-600 text-sm md:text-base'
              />
              <button
                type='submit'
                disabled={!chatInput.trim()}
                className='flex-shrink-0 rounded-lg border border-white bg-white hover:bg-zinc-50 active:bg-zinc-200 cursor-pointer px-3 md:px-5 py-2 md:py-2.5 font-semibold text-black transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white'
              >
                <span className='text-sm md:text-lg'>→</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Deshboard