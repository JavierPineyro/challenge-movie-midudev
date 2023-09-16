function Container({ children }) {
  return (
    <main className="grid grid-rows-[70px,1fr,60px] min-h-screen max-w-screen-lg m-auto">
      {children}
    </main>
  )
}

export default Container
