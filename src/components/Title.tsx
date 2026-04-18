import { styled } from "@stitches/react";
import data from "../data.json";

// The overall wrapper that holds the background animation and the new photo content.
const Wrapper = styled("div", {
  background: "#e0f2f1", // A very soft teal/green to blend with the bokeh.
  backgroundImage: "url(./assets/bokeh_sparkle.gif)", // The existing background animation.
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh", // Makes it take up the full screen height.
  display: "flex",
  justifyContent: "center", // Horizontal centering.
  alignItems: "center", // Vertical centering.
});

const ContentWrapper = styled("div", {
  textAlign: "center",
  padding: "20px",
  background: "rgba(255, 255, 255, 0.4)", // A very transparent white overlay.
  borderRadius: "15px", // Optional: Softens the corners.
  backdropFilter: "blur(5px)", // Optional: Blurs the background only under the content for readability.
});

// Styeld component for your new photo.
const CouplePhoto = styled("img", {
  width: "60%", // Adjust this value to change the size.
  maxWidth: "350px", // Prevents it from getting too large on big screens.
  height: "auto",
  borderRadius: "50%", // Optional: Makes the photo circular. Use 'borderRadius: "15px"' for a rounded rectangle.
  border: "5px solid rgba(255, 255, 255, 0.6)", // Adds a soft white border.
  marginBottom: "30px", // Spacing between the photo and the names.
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)", // Optional: Adds a subtle shadow.
});

const Label = styled("p", {
  fontSize: "1.7vh",
  fontWeight: "bold",
  opacity: 0.8,
  textTransform: "uppercase",
  marginBottom: "8px",
});

const Names = styled("p", {
  fontSize: "4vh",
  fontWeight: "bold",
  lineHeight: 1.3,
  marginBottom: "16px",
});

const SubTitle = styled("p", {
  fontSize: "2vh",
  opacity: 0.8,
  lineHeight: 1.5,
});

export default function Title() {
  return (
    <Wrapper>
      <ContentWrapper>
        {/* Replace this with your photo. Ensure the file 'couple.png' is in your public/assets folder. */}
        <CouplePhoto src="./assets/couple.png" alt="Giorgi & Kristine" />
        
        <Label>Wedding Invitation</Label>
        <Names>
          {data.groom.name} & {data.bride.name}
        </Names>
        <SubTitle>
          {data.date} <br />
          {data.location}
        </SubTitle>
      </ContentWrapper>
    </Wrapper>
  );
}
