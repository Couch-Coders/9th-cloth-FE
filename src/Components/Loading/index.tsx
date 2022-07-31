import ReactLoading from "react-loading";
import styled from "styled-components";

const Loading = () => {
  const Base = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Base>
      <ReactLoading type="bars" color="#000" height={150} width={150} />
    </Base>
  );
};

export default Loading;
