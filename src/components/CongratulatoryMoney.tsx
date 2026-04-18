import { CopyToClipboard } from "react-copy-to-clipboard";
import { styled } from "@stitches/react";
import { Button, Divider, message, Modal } from "antd";
import { useState } from "react";
import data from "../data.json";

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

const Content = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

export default function CongratulatoryMoney() {
  const [isGroomVisible, setIsGroomVisible] = useState<boolean>(false);
  const [isBrideVisible, setIsBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>საჩუქრები</Title>
      </Divider>
      <Content>
        თუ გსურთ სიხარული საჩუქრით გამოხატოთ, <br />
        შეგიძლიათ ისარგებლოთ საბანკო რეკვიზიტებით.
      </Content>
      <Button
        onClick={() => setIsGroomVisible(true)}
        style={{ background: "#829fe0", border: "none", color: "white" }}
      >
        სიძის მხარე
      </Button>
      <Button
        onClick={() => setIsBrideVisible(true)}
        style={{ background: "#e082b1", border: "none", color: "white", marginLeft: 8 }}
      >
        პატარძლის მხარე
      </Button>
      <Modal
        title="სიძის მხარის საბანკო რეკვიზიტები"
        open={isGroomVisible}
        onOk={() => setIsGroomVisible(false)}
        onCancel={() => setIsGroomVisible(false)}
        footer={null}
      >
        <div>
          <b>{data.groom.name}</b>
          <Description>{data.groom.account_number}</Description>
          <CopyToClipboard
            text={data.groom.account_number}
            onCopy={() => message.success("ანგარიშის ნომერი დაკოპირებულია")}
          >
            <Button type="primary" size="small" style={{ marginBottom: 16 }}>
              კოპირება
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>დედა: {data.groom.parents.mother.name}</b>
          <Description>{data.groom.parents.mother.account_number}</Description>
          <CopyToClipboard
            text={data.groom.parents.mother.account_number}
            onCopy={() => message.success("ანგარიშის ნომერი დაკოპირებულია")}
          >
            <Button type="primary" size="small" style={{ marginBottom: 16 }}>
              კოპირება
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>მამა: {data.groom.parents.father.name}</b>
          <Description>{data.groom.parents.father.account_number}</Description>
          <CopyToClipboard
            text={data.groom.parents.father.account_number}
            onCopy={() => message.success("ანგარიშის ნომერი დაკოპირებულია")}
          >
            <Button type="primary" size="small">
              კოპირება
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title="პატარძლის მხარის საბანკო რეკვიზიტები"
        open={isBrideVisible}
        onOk={() => setIsBrideVisible(false)}
        onCancel={() => setIsBrideVisible(false)}
        footer={null}
      >
        <div>
          <b>{data.bride.name}</b>
          <Description>{data.bride.account_number}</Description>
          <CopyToClipboard
            text={data.bride.account_number}
            onCopy={() => message.success("ანგარიშის ნომერი დაკოპირებულია")}
          >
            <Button type="primary" size="small" style={{ marginBottom: 16 }}>
              კოპირება
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>დედა: {data.bride.parents.mother.name}</b>
          <Description>{data.bride.parents.mother.account_number}</Description>
          <CopyToClipboard
            text={data.bride.parents.mother.account_number}
            onCopy={() => message.success("ანგარიშის ნომერი დაკოპირებულია")}
          >
            <Button type="primary" size="small" style={{ marginBottom: 16 }}>
              კოპირება
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>მამა: {data.bride.parents.father.name}</b>
          <Description>{data.bride.parents.father.account_number}</Description>
          <CopyToClipboard
            text={data.bride.parents.father.account_number}
            onCopy={() => message.success("ანგარიშის ნომერი დაკოპირებულია")}
          >
            <Button type="primary" size="small">
              კოპირება
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
    </Wrapper>
  );
}
