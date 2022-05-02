import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Here!!!!</h3>
            <form >
                <input type="text" name=""  placeholder='Enter Your name' id="" />
                <br />
                <input type="email" name="" placeholder='Input Your Email' id="" />
                <br />
                <input type="password" name="" placeholder='Enter Your password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;