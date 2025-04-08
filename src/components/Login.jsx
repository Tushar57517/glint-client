import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form action="" className="h-auto w-[300px] p-4 rounded-lg shadow-2xl flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="password" />
      </div>

      <Button type="submit" className="w-full mt-5">Login</Button>

      <p className="text-sm">New here? <span className="underline cursor-pointer">Register</span></p>
      </form>
    </div>
  );
}

export default Login;
