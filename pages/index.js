import styled from 'styled-components';
import { FontSizes, Colors } from '../styles/theme';

const Div = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Text = styled.span`
	${FontSizes.display1}
	color: ${Colors.blue[500]};
`

const Home = () => {
    return (
        <Div>
            <Text>Home 메인화면</Text>
        </Div>
    );
};

export default Home;
