import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    setFormData(function (prev) {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/accounts/api/register/", formData);

      if (response.status === 201 || response.status === 200) {
        alert("verification email sent!");

        setFormData({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || "Registration failed.");
      } else {
        alert("Something went wrong.");
      }

      console.error(error);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="h-fit w-fit flex flex-col shadow-lg p-4 rounded">
        <div className="font-semibold flex items-center justify-center mb-3">
          Register
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="first_name">First Name</Label>
            <Input id="first_name" type="text" placeholder="First Name" value={formData.first_name}
              onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="text" placeholder="Last Name" value={formData.last_name}
              onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Username" value={formData.username}
              onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={formData.email}
              onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" value={formData.password}
              onChange={handleChange} />
          </div>
          {/* <div className="flex items-center justify-center mt-5">
          <Checkbox id="terms" className="mr-2" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
          </div> */}
          <Button type="submit" className="w-full mt-5">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;
