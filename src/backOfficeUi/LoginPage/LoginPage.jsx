import React from 'react'

const LoginPage = () => {
  return (
    <>
      <div>
        <div>
            <img src="" alt="" />
        </div>
        <form action="" method="POST">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div>
            <button 
                type="submit"
                id='FormSubmit'
                className=''>
                    Submit
            </button>
            </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage
