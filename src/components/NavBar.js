const Navbar = () => {
   return (
      <nav className="flex justify-between items-center gap-5 my-3">
         <h1>The Dojo Blog</h1>
         <div className="flex-1 justify-center items-center flex gap-3">
            <a href="/">Home</a>
            <a href="/create" className="text-white p-2 border-2 bg-red-600 border-red-600 rounded-md" >New Blog</a>
         </div>
      </nav>
   );
}

export default Navbar;