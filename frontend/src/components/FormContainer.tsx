import { Link } from "react-router-dom"

type FormContainerProps = {
  children: React.ReactNode
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]">
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/">
            <span className="sr-only">MERN Auth</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#8e2de2] hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#8e2de2] hover:bg-gray-100"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="lg:w-0 lg:flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Authentication Deep Dive
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-gray-300">
              Authenticate with a secure HTTP cookie JWT token, Single Sign-On (SSO) and 2-Factor Authentication (2FA).
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-auto">
            {children}
          </div>
        </div>
      </main>
      <footer className="bg-[#4a00e0] py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-gray-400">
          <p>&copy; 2024 Lawyer Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default FormContainer