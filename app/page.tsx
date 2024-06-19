import { Container } from "@mui/material";
import BridgeForm from "./components/BridgeForm";

export default function Home() {

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <BridgeForm/>
    </Container>
  );
}
