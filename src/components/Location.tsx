import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
  cursor: "pointer", // This makes the mouse cursor change to a hand
});

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>მდებარეობა</Title> 
      </Divider>
      
      {/* Replace the URL below with your actual Google Maps link */}
      <a 
        href="https://maps.app.goo.gl/3W5iUm95NeHgUAgB6" 
        target="_blank" 
        rel="noreferrer"
      >
        <Image src="./assets/Location.png" />
      </a>
    </Wrapper>
  );
}
