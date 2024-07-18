import { Label } from "@radix-ui/react-label"
import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { Input } from "../components/ui/input"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useRegisterMutation } from "../slices/usersApiSlice"
import { setCredentials } from "../slices/authSlice"

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state: any) => state.auth)

  const [register, { isLoading }] = useRegisterMutation()

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [userInfo])


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    try {
      const res = await register({ name, email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate('/')
    } catch (error: any) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <FormContainer>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Create a new account and lorem ipsum dolor sit amet...</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="What's your name?" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="What's your email?" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="What's your secret? 🙈" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="Hold on, what's your secret again? 🙉" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-[#8e2de2] text-white hover:bg-[#7c25c9]"
            onClick={(e) => handleSubmit(e)}
            disabled={isLoading}
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </FormContainer>
  )
}

export default RegisterScreen