import styled from "styled-components";
import {motion} from "framer-motion";

const Success = () => {
  return (
    <Container>
      <Text> <motion.h2 initial={{color: "white",opacity: 0}} animate={{color: "#787878",opacity: 1}} transition={{ duration: 3.0 }}>
        Your Payment is successful! Shop again soon!
      </motion.h2>
      </Text>    
    </Container>

  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.3)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text  =styled.h1`
  font-weight: 500;
  color: 	#585858;
`;
export default Success;
