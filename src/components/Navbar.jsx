import TryHackMeBadge from "./TryHackMeBadge"

const Navbar = () => {
  return (
    <nav className="bg-transparent text-green-300 text-xl p-5 sticky top-0">
      <div className="container flex justify-between mx-auto items-center">
        <div className="nav_left text-red-400">root@portfolio:~ #</div>
        <div className="nav_right flex">
          <div className="nav_right_item">./home</div>
          <div className="nav_right_item">./skills</div>
          <div className="nav_right_item">./education</div>
          <div className="nav_right_item">./contact</div>
          <div className="nav_right_item">./view source</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
