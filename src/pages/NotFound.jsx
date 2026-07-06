import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col justify-center px-8 md:px-24 py-16 font-sans">
      <div className="max-w-md space-y-8">
        <span className="block text-xs font-bold uppercase tracking-widest text-black">
          ERROR: PAGE NOT FOUND
        </span>
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-black leading-none">
          404
        </h1>
        <p className="text-lg md:text-xl text-slate-800 font-medium">
          This page isn’t available.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full font-semibold bg-black hover:bg-slate-800 text-white transition-colors cursor-pointer text-sm"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
