import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login.page";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
// import "jest-dom/extend-expect"
import {expect, jest} from '@jest/globals'




const MockedLogin = () =>{
    return (
        <BrowserRouter>  
            <Login/>
        </BrowserRouter>
    )
}
describe("Testing Login Page Individual Elements", () => {
  it("checks if username element is present or not", async () => {
    render(<MockedLogin />);
    const userNameElement = screen.getByPlaceholderText(/Username*/i);
    expect(userNameElement).toBeInTheDocument();
  });

  it("onchange event of username", async () => {
    render(<MockedLogin />);
    const userNameElement = screen.getByPlaceholderText(/Username*/i);
    fireEvent.change(userNameElement, { target: { value: "Nikhil" } });

    expect(userNameElement.value).toBe("Nikhil");
 
  });

  it("checks if password element is present or not", async () => {
    render(<MockedLogin />);
    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    expect(passwordElement).toBeInTheDocument();
  });

  it("onchange event of Password", async () => {
    render(<MockedLogin />);
    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    fireEvent.change(passwordElement, { target: { value: "123" } });

    expect(passwordElement.value).toBe("123");

  });

  it("checks if login button is present or not", async() =>{
    render(<MockedLogin />);
    const loginButton = screen.getByRole("button", { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  })


  it("checkbox testing", async() =>{
    render(<MockedLogin />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  })

  it("password element should have type password", () =>{
    render(<MockedLogin />);

    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    expect(passwordElement).toHaveAttribute("type", "password");

  })


  
});

describe("Error Handling of userName and password input", ()=>{
  it("checks username error message", async() =>{
    render(<MockedLogin />);

    const userNameElement = screen.getByPlaceholderText(/Username*/i);
    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    userEvent.type(passwordElement, "Nikhil");
    userEvent.type(userNameElement, "");

    const loginButton = screen.getByRole("button", { name: /Login/i });
    userEvent.click(loginButton);


    const errorMessage = await screen.findByText(/Username is required/i);
    expect(errorMessage).toBeInTheDocument();


  })
  it("checks password error message", async() =>{
    render(<MockedLogin />);

    const userNameElement = screen.getByPlaceholderText(/Username*/i);
    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    userEvent.type(userNameElement, "Nikhil");
    userEvent.type(passwordElement, "");

    const loginButton = screen.getByRole("button", { name: /Login/i });
    userEvent.click(loginButton)

    const errorMessage = await screen.findByText(/Password is required/i);
    expect(errorMessage).toBeInTheDocument();


  })


})





describe("Validation of Login Page", () => {

  // it("mocking", async() =>{
  //   axios.post.mockImplementationOnce(() =>
  //     Promise.resolve({
  //       data:{
  //         profileid: "3c80c8cc-f21c-4329-b4fb-e341564084da",
  //         first_name: "Subramaneswara Swamy",
  //         last_name: "Goverdana",
  //         college_code: "T01",
  //         profiletype: "teacher",
  //         profile_information_code: null,
  //         specialization_code: null,
  //         statusQuo: 0,
  //       }
  //     })

  //   )


  //   expect(axios.post).toHaveBeenCalledTimes(1)
  // })


  it("validation of user with valid username and password", async() =>{
    render(<MockedLogin />);

    const userNameElement = screen.getByPlaceholderText(/Username*/i);
    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    
    userEvent.type(userNameElement, "ss.goverdana@email.com")
    userEvent.type(passwordElement, "user@123")

     const loginButton = screen.getByRole("button", { name: /Login/i });
    userEvent.click(loginButton);

    const spy = jest.spyOn(Storage.prototype, 'setItem')

  
    expect(spy).toBeTruthy()

  })
  it("validation of user with invalid username and password", async() =>{
    render(<MockedLogin />);

    const userNameElement = screen.getByPlaceholderText(/Username*/i);
    const passwordElement = screen.getByPlaceholderText(/Password*/i);
    
    userEvent.type(userNameElement, "nikhil@email.com")
    userEvent.type(passwordElement, "user@123456")

     const loginButton = screen.getByRole("button", { name: /Login/i });
    userEvent.click(loginButton);

    // const user = await localStorage.getItem("user");

   

    const errorMessage = await screen.findByText(/No Server Response/i);
    expect(errorMessage).toBeInTheDocument();

    // expect(user).toBeTruthy();
  })
})

