import { Col, Row } from 'react-bootstrap'
import PagesTitle from '../../component/pagesTitle/PagesTitle'
import './signup.css'
import img from './../../assets/signup.svg'
import {useState, useRef, useEffect } from 'react';


const E_mail_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
const Signup = () => {
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
  const [matchPwdFocus, seteMatchPwdFocus] = useState(false);

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
  setValidEmail(result);
  const match = pwd === matchPwd;
  setMatchPwd(match);
}, [pwd, matchPwd]);

  //error message
  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);
  return (
    <div>
    < PagesTitle title='signup'/>

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
            <label htmlFor="email">email address</label>
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
              onFocus={() => seteEmailFocus(true)}
              onBlur={() => seteEmailFocus(false)}

            />
            <br />
            {/* passwrd */}
            <label htmlFor="password">password</label>
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
              className={pwdFocus && !validPwd ? "instructoins" : "offscreen"}
            ></p>
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
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <button type="submit">login</button>
          </form>
        </Col>
      </Row>

    </div>
  )
}

export default Signup