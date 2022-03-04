import { useState, useEffect } from "react";

export default function Login() {
  const [userform, setuserform] = useState({
    useremail: "remo#",
    userpass: "21545",
  });
  const [userformerr, setformerr] = useState({
    emailerr: null,
    passerr: null,
  });

  useEffect(() => {
    console.log(userform);
  }, [userform]);

  const handelchange = (e) => {
    if (e.target.type === "email") {
      setuserform({
        ...userform,
        useremail: e.target.value,
      });

      setformerr({
        ...userform,
        emailerr: e.target.value.length === 0 ? "this field is required" : null,
      });
    } else if (e.target.type === "password") {
      setuserform({
        ...userform,
        userpass: e.target.value,
      });

      setformerr({
        ...userform,
        passerr:
          e.target.value.length < 8
            ? "password must be more than 8 characters "
            : null,
      });
    }
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(userform);
  };

  return (
    <div className="container" style={{ width: "40vw" }}>
      <form onSubmit={(e) => handelsubmit(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${userformerr.emailerr? "border-danger":" "} `}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userform.useremail}
            onChange={(e) => handelchange(e)}
          />
          <div id="emailHelp" className="text-danger form-text">
            {userformerr.emailerr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${userformerr.passerr?"border-danger":""}`}
            id="exampleInputPassword1"
            aria-describedby="passHelp"
            value={userform.userpass}
            onChange={(e) => handelchange(e)}
          />
          <div id="passHelp" className="text-danger form-text">
            {userformerr.passerr}
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
