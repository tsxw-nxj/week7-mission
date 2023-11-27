import React from 'react'
import { useState } from 'react'

export default function LoginControl () {
    const[isLogin, setisLogin] = useState(false);
    const handleLogin= () => {
        setisLogin(!isLogin);
    }
  return (
    <div style={{
        color: "white",
    }}>
        <button
        onClick={handleLogin}
        style={{
            borderRadius:'20px',
            width:'70px',
            height:'30px',
            border:'none',
            marginLeft:"10px",
            marginRight:"10px"
        }}>
            {isLogin ? "로그아웃" : "로그인"}
        </button>
        {isLogin ?  "환영합니다" : "로그인해주세요"}
    </div>
  )
}
