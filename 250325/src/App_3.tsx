import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//스타일
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVarients = {
  hover: { scale: 2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46,204,113)", transition: { duration: 3 } },
};

// variants
// const myVars = {
//   start: { scale: 0 },
//   end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
// };

//컨텐츠
function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVarients}
        whileHover={"hover"}
        whileTap={"click"}
        whileDrag={"drag"}
      />
    </Wrapper>
  );
}

export default App;
