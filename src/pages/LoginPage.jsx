import React, { useState } from 'react';

export default function LoginPage() {
  const [isEmailCorrect, setIsEmailCorrect] = useState(true);

  const handleLogin = () => {
    const emailInput = document.getElementById('emailInput').value;

    // 이메일 유효성 검사 로직을 구현합니다
    if (!validateEmail(emailInput)) {
      setIsEmailCorrect(false);
    } else {
      // 로그인 성공 시 다음 로직을 구현합니다
      // ...
    }
  };


  const validateEmail = (email) => {
    // 이메일 유효성 검사 로직을 구현합니다
    // 예시로 간단하게 이메일 형식을 검사하는 정규식을 사용합니다
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h2 style={{ fontFamily: 'serif' }}>이메일과 비밀번호를<br />입력해주세요</h2>
      <form>
        <div style={{ margin: '10px' }}>
          이메일 주소<br />
          <input
            id="emailInput"
            style={{
              width: '40vw',
              height: '30px',
              borderRadius: '10px',
              borderColor: 'lightgrey',
              borderStyle: 'solid'
            }}
          />
        </div>
        <div
        style={{
          fontFamily: 'serif',
          color: 'red',
          fontSize: 'small'
        }}>
          {isEmailCorrect ? '' : '올바른 이메일을 입력해주세요'}
          </div>
        <div style={{ margin: '10px' }}>
          비밀번호<br />
          <input
            type='password'
            style={{
              width: '40vw',
              height: '30px',
              borderRadius: '10px',
              borderColor: 'lightgrey',
              borderStyle: 'solid'
            }}
          />
        </div>
        <button
          className='confirm_btn'
          type='button'
          onClick={handleLogin}
          style={{
            width: '40vw',
            height: '40px',
            backgroundColor: '#22254b',
            color: 'white',
            borderRadius: '20px',
            border: 'none'
          }}
        >
          확인
        </button>
      </form>
    </div>
  );
}