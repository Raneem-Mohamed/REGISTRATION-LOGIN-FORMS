

import { useState, useEffect } from "react";

export default function Register() {
  const [userform, setuserform] = useState({
    userfname: "raneem",
    userlname: "mo",
    useremail: "remo#",
    userpass: "21545",
  });
  const [userformerr, setformerr] = useState({
    userfnameerr: null,
    userlnameerr: null,
    emailerr: null,
    passerr: null,
  });

  useEffect(() => {
    console.log(userform);
  }, [userform]);

  const handelchange = (e) => {
    if (e.target.id === "exampleInputEmail1") {
      setuserform({
        ...userform,
        useremail: e.target.value,
      });

      setformerr({
        ...userform,
        emailerr: e.target.value.length === 0 ? "this field is required" : null,
      });
    } else if  (e.target.id === "exampleInputPassword1") {
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
     else if (e.target.id === "exampleInputuserfname") {
        setuserform({
          ...userform,
          userfname: e.target.value,
        
        });
    
        setformerr({
          ...userform,
          userfnameerr:
            e.target.value.length === 0
              ? "this field is required "
              : null,
           
        }); }

        else if (e.target.id === "exampleInputuserlname") {
            setuserform({
              ...userform,
              userlname: e.target.value,
            });
        
            setformerr({
              ...userform,
                  userlnameerr:
                e.target.value.length === 0
                  ? "this field is required "
                  : null,
            }); }
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(userform);
  };

  return (

    

    <div className="container" style={{ width: "40vw" }}>
      <form onSubmit={(e) => handelsubmit(e)}>

      <div className="mb-3">
          <label htmlFor="exampleInputuserfname" className="form-label">
            First Name 
          </label>
          <input
            type="text"
            className={`form-control ${userformerr.userfname? "border-danger":" "} `}
            id="exampleInputuserfname"
            aria-describedby="userfnameHelp"
            value={userform.userfname}
            onChange={(e) => handelchange(e)}
          />
          <div id="userfnameHelp" className="text-danger form-text">
            {userformerr.userfnameerr}
          </div>
        </div>

      <div className="mb-3">
          <label htmlFor="exampleInputuserlname" className="form-label">
            Last Name 
          </label>
          <input
            type="text"
            className={`form-control ${userformerr.userlname? "border-danger":" "} `}
            id="exampleInputuserlname"
            aria-describedby="userlnameHelp"
            value={userform.userlname}
            onChange={(e) => handelchange(e)}
          />
          <div id="userfnameHelp" className="text-danger form-text">
            {userformerr.userlnameerr}
          </div>
        </div>


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
          Register
        </button>
      </form>
    </div>
  );
}
