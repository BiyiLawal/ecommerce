import React from 'react';

function Login() {
  return (
    <div>
        <section id="login">
        <h2 style="text-align: center;">Login</h2>
        <form action="" class="form">
            <div class="container3">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
            
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>
                
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me </input>
                </label>

                <button type="button">Login</button>
            </div>
        </form>
    </section>
    </div>
  )
}

export default Login