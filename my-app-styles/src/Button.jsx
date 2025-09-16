import styled from "styled-components";

const Tag = styled.button`
  background: ${({ $color }) => ($color === "outline" ? "#fff1" : "#4f46e5")};
  color: ${({ $color }) => ($color === "outline" ? "#4f46e5" : "#fff")};
  border: 2px solid #4f46e5;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;

  &:hover { opacity: .9; }
`;

export default function App() {
  return (
    <div style={{ display: "flex", gap: 12, padding: 20 }}>
      <Tag>Primary</Tag>
      <Tag $color="outline">Outline</Tag>
    </div>
  );
}