// import logo from '../assets/lws-logo-en.svg'
import logo from '../assets/task-manager-logo.png'
export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-40 px-20">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <div className="flex items-center gap-2">
        <a href="/">
          <img className="h-[45px] rounded-full" src={logo} alt="Lws" />
        </a>
        <h3 className='text-xl font-serif'>Task Manager</h3>
        </div>
      </div>
    </nav>
  );
}
