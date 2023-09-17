function Container({ children }) {
  return (
    <main className="grid grid-rows-[70px,1fr,60px] sm:px-4 min-h-screen max-w-screen-lg m-auto">
      {children}
    </main>
  )
}

export default Container
