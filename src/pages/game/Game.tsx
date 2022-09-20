import { Box, Card, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../../components/Header";

const StyledBox = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  height: 90vh;
  justify-content: space-between;
  background-color: ${theme.palette.primary.main};
`
);

const StyledCard = styled(Card)`
  flex-basis: 50%;
`;

const Game = () => {
  return (
    <>
      <Header />
      <StyledBox>
        <StyledCard>article</StyledCard>
        <StyledCard>guess list</StyledCard>
      </StyledBox>
      <footer>search bar</footer>
    </>
  );
};

export default Game;
