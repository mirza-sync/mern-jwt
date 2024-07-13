import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Label } from "@radix-ui/react-label"
import { Input } from "../components/ui/input"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()
  const { userInfo } = useSelector((state: any) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [userInfo])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await login({email, password }).unwrap()
      dispatch(setCredentials({...res}))
    } catch (error: any) {
      console.log(error?.data?.message || error.error)
    }
  }

  return (
    <FormContainer>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email and password to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-[#8e2de2] text-white hover:bg-[#7c25c9]" onClick={(e) => handleSubmit(e)}>Login</Button>
        </CardFooter>
      </Card>
    </FormContainer>
  )
}

export default LoginScreen