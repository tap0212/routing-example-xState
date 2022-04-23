const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-4">
      <div className=" w-96 flex flex-col items-center justify-between h-full border-2 border-white p-4 rounded-xl">
        {children}
      </div>
    </div>
  )
}

export default Layout