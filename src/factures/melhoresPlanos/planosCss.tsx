import styled from "styled-components"

export default {
 PageContainer:styled.div`
  font-family: 'Segoe UI', sans-serif;
  background-color: #fffaf3;
  color: #333;
`,


 Section: styled.section`
  padding: 60px 40px;
  max-width: 1200px;
  margin: 0 auto;
`,

 SectionTitle: styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #ff5722;
`,

 PlansGrid: styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
  gap: 20px;
`,

 PlanCard: styled.div<{ featured?: boolean }>`
  background: white;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.08);
  padding: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
   background: white;
  border-radius: 15px;
  box-shadow: ${({ featured }) => featured 
    ? '0px 20px 35px rgba(0,0,0,0.25)' 
    : '0px 10px 20px rgba(0,0,0,0.08)'};
  padding: 25px;
  width: ${({ featured }) => featured ? '300px' : '250px'};
  transform: ${({ featured }) => featured ? 'scale(1.05)' : 'scale(1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease, width 0.3s ease;

  &:hover {
        box-shadow: 0px 15px 25px rgba(0,0,0,0.15);

    transform: ${({ featured }) => featured ? 'scale(1.08)' : 'translateY(-10px)'};
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 15px 25px rgba(0,0,0,0.15);
  }
`,

 PlanTitle: styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`,

 PlanPrice: styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #ff7f50;
  margin-bottom: 15px;
`,

 PlanFeatures: styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
  }
`,

 Button: styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #ff7f50;
  color: white;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0673d;
  }
`,

 PartnersGrid: styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`,

 PartnerCard: styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 8px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    height: 60px;
    object-fit: contain;
  }
`,

 Footer: styled.footer`
  background-color: #ff7f50;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
`,

}