import { Col, Row } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import PagesTitle from "../../component/pagesTitle/PagesTitle";
import "./login.css";
import img from "./../../assets/login.svg";
import { MdInfoOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleXmark, FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { HiOutlineXMark } from "react-icons/hi2";

const E_mail_REGEX = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, seteEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  //focus after loading
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //email check validation
  useEffect(() => {
    const result = E_mail_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  //check password matching and validaition
  useEffect(() => {
    const result = PASSWORD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setMatchPwd(match);
    // setValidMatchPwd(match);
  }, [pwd, matchPwd]);

  //error message
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);
  return (
    <section className="login">
      <PagesTitle title="login" />

      <Row>
        <Col lg={6} md={6} sm={12}>
          <img src={img} alt="" />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form>
            <label htmlFor="email">email address:
            
            {/* if the input incorrect */}
            {/* <FaRegCircleXmark fill="red" /> */}

            {/* if the input correct */}
            {/* <GiCheckMark fill="green" /> */}
            
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              autoComplete="off"
              placeholder="enter email address"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="idnote"
              onFocus={() => seteEmailFocus(true)}
              onBlur={() => seteEmailFocus(false)}
            />
            <p
              id="idnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <MdInfoOutline />
              example@sum.any
            </p>
            {/* passwrd */}
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              // ref={emailRef}
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={
                pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"
              }
            >
              <MdInfoOutline />
              8 to 20 charachters <br />
              must includes uppercase and lowercase letters, anumber, and a
              special charachter.
            </p>
            {/* confirm password */}
            <label htmlFor="confirmPassword">
              confirm password:
              {/* <span></span> */}
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="retype password"
              onChange={(e) => setMatchPwd(e.target.value)}
              required
              aria-invalid={validMatchPwd ? "false" : "true"}
              aria-describedby="mpwdnote"
              onFocus={() => setMatchPwdFocus(true)}
              onBlur={() => setMatchPwdFocus(false)}
            />
            <p
              id="mpwdnote"
              className={
                matchPwdFocus && !matchPwd ? "instructions" : "offscreen"
              }
            >
              <MdInfoOutline />
              Must match the first password input field
            </p>
            <button type="submit" disabled={!validEmail || !validPwd || !validMatchPwd ? true : false}>login</button>
          </form>
          <p>
            doesn't have account ? <br/>
            <span className="line">
              <Link to='/signup'>
              sign up
              </Link>
            </span>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Login;
