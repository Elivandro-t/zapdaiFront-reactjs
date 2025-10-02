import styled, { keyframes } from "styled-components";
 const fadeIn=keyframes`
  from { opacity: 0; transform: translateY(20px) translateX(-50%); }
  to { opacity: 1; transform: translateY(0) translateX(-50%); }
`
 export default {
  Section:styled.div`
    width: 100%;
    left: 0;
    right: 0;
   position: fixed;
   top: 0;
   z-index: 9999;
   background-color: rgba(0,0,0,0.6);
  height: 100vh;
  align-items: center;
  justify-content: flex-end;
  `,

 Banner: styled.div`
 position: fixed;
  width: 100%;
  background: #fff;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 16px;
  display: flex;
  gap: 12px;
  animation: ${fadeIn} 0.4s ease-out;
  align-items: center;
  bottom: 0;
`,

 Text: styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
`,

 Buttons: styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`,

 Button :styled.button<{ variant?: "accept" | "decline" }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  ${({ variant }) =>
    variant === "accept"
      ? `
        background: #2563eb;
        color: white;
        &:hover { background: #1e4db7; }
      `
      : `
        background: #e5e7eb;
        color: #333;
        &:hover { background: #d1d5db; }
      `}
`
 }
