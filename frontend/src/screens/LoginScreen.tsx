import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Label } from "@radix-ui/react-label"
import { Input } from "../components/ui/input"

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log("Submit")
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-r from-[#8e2de2] to-[#4a00e0]">
      <header className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="#">
            <span className="sr-only">MERN Auth</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              to="#"
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
            <Card className="w-full max-w-md">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email and password to access your account.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="#" className="text-sm font-medium text-[#8e2de2] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#8e2de2] text-white hover:bg-[#7c25c9]">Login</Button>
              </CardFooter>
            </Card>
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

export default LoginScreen