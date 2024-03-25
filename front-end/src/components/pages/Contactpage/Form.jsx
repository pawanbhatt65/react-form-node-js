import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

// css
import classes from "./Form.module.css";

const Form = () => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const [isInput, setIsInput] = useState({
    enterName: "",
    enterPhone: "",
    enterEmail: "",
    enterSubject: "",
  });
  const [isError, setIsError] = useState({
    nameError: "",
    phoneError: "",
    emailError: "",
    subjectError: "",
  });

  const nameChangeHandler = (event) => {
    const nameValue = event.target.value;
    const nameAndSpace = /^[a-zA-Z\s]*$/;
    setIsInput({
      ...isInput,
      enterName: nameValue,
    });

    if (nameValue.trim().length === 0) {
      setIsError({
        ...isError,
        nameError: "Please enter your name!",
      });
    } else if (!nameAndSpace.test(nameValue)) {
      setIsError({
        ...isError,
        nameError: "Please enter only letter!",
      });
    } else {
      setIsError({
        ...isError,
        nameError: "",
      });
    }
  };

  const phoneChangeHandler = (event) => {
    const phoneValue = event.target.value;
    const onlyNumber = /^[0-9]+$/;
    setIsInput({
      ...isInput,
      enterPhone: phoneValue,
    });

    if (phoneValue.trim().length === 0) {
      setIsError({
        ...isError,
        phoneError: "Please enter your phone number without country code!",
      });
    } else if (!onlyNumber.test(phoneValue)) {
      setIsError({
        ...isError,
        phoneError: "Please enter only number!",
      });
    } else if (phoneValue.trim().length > 10) {
      setIsError({
        ...isError,
        phoneError: "Please enter only 10 digits!",
      });
    } else {
      setIsError({
        ...isError,
        phoneError: "",
      });
    }
  };

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setIsInput({
      ...isInput,
      enterEmail: emailValue,
    });

    if (emailValue.trim().length === 0) {
      setIsError({
        ...isError,
        emailError: "Please enter your email address!",
      });
    } else if (!emailRegEx.test(emailValue)) {
      setIsError({
        ...isError,
        emailError: "Please enter your valid email address!",
      });
    } else {
      setIsError({
        ...isError,
        emailError: "",
      });
    }
  };

  const subjectChangeHandler = (event) => {
    const subjectValue = event.target.value;
    setIsInput({
      ...isInput,
      enterSubject: subjectValue,
    });

    if (subjectValue.trim().length === 0) {
      setIsError({
        ...isError,
        subjectError: "Please enter your subject!",
      });
    } else {
      setIsError({
        ...isError,
        subjectError: "",
      });
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (isInput.enterName.trim().length === 0) {
      setIsError({
        ...isError,
        nameError: "Please enter your name!",
      });
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    } else if (isError.nameError) {
      setIsError({
        ...isError,
        nameError: "Please enter your valid name!",
      });
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    } else if (isInput.enterPhone.trim().length === 0) {
      setIsError({
        ...isError,
        phoneError: "Please enter your phone number without country code!",
      });
      if (phoneInputRef.current) {
        phoneInputRef.current.focus();
      }
    } else if (isError.phoneError) {
      setIsError({
        ...isError,
        phoneError:
          "Please enter your valid phone number without country code!",
      });
      if (phoneInputRef.current) {
        phoneInputRef.current.focus();
      }
    } else if (isInput.enterEmail.trim().length === 0) {
      setIsError({
        ...isError,
        emailError: "Please enter your email address!",
      });
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
    } else if (isError.emailError) {
      setIsError({
        ...isError,
        emailError: "Please enter your valid email address!",
      });
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
    } else if (isInput.enterSubject.trim().length === 0) {
      setIsError({
        ...isError,
        subjectError: "Please enter your subject!",
      });
      if (subjectInputRef.current) {
        subjectInputRef.current.focus();
      }
    } else if (isError.subjectError) {
      setIsError({
        ...isError,
        subjectError: "Please enter your valid subject!",
      });
      if (subjectInputRef.current) {
        subjectInputRef.current.focus();
      }
    } else {
      let result = await fetch("http://localhost:3000/contact-me", {
        method: "post",
        body: JSON.stringify({
          name: isInput.enterName,
          phone: isInput.enterPhone,
          email: isInput.enterEmail,
          subject: isInput.enterSubject,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      if (result) {
        setIsInput({
          enterName: "",
          enterPhone: "",
          enterEmail: "",
          enterSubject: "",
        });
        navigate("/");
      } else {
        console.log("something wants wrong!");
      }
    }
  };
  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          placeholder="Name"
          label="Name"
          labelId="name"
          value={isInput.enterName}
          onChange={nameChangeHandler}
          errorValue={isError.nameError}
          maxLength=""
          inputRef={nameInputRef}
        />
        <Input
          type="text"
          placeholder="Phone"
          label="Phone"
          labelId="phone"
          value={isInput.enterPhone}
          onChange={phoneChangeHandler}
          errorValue={isError.phoneError}
          maxLength="10"
          inputRef={phoneInputRef}
        />
        <Input
          type="email"
          placeholder="Email"
          label="Email"
          labelId="email"
          value={isInput.enterEmail}
          onChange={emailChangeHandler}
          errorValue={isError.emailError}
          maxLength=""
          inputRef={emailInputRef}
        />
        <Input
          type="text"
          placeholder="Subject"
          label="Subject"
          labelId="subject"
          value={isInput.enterSubject}
          onChange={subjectChangeHandler}
          errorValue={isError.subjectError}
          maxLength=""
          inputRef={subjectInputRef}
        />
        <Button type="submit" className={classes["form-btn"]}>
          Send
        </Button>
      </form>
    </Fragment>
  );
};

export default Form;
