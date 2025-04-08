import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"

function Register() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-fit w-fit flex flex-col shadow-lg p-4 rounded">
        <h1 className="font-semibold">Register</h1>
        <form action="">
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input id="first_name" type="text" placeholder="First Name" />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="text" placeholder="Last Name" />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Username" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" />
          </div>
          <div className="flex items-center justify-center mt-5">
          <Checkbox id="terms" className="mr-2" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
          </div>
          <Button type="submit" className="w-full mt-5">Register</Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
