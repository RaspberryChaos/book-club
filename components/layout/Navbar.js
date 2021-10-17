import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div>Book club</div>
      <nav>
        <ul>
          <li>
            <Link href="/meetings">All Meetings</Link>
          </li>
          <li>
            <Link href="/new-meeting">Add New Meeting</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
