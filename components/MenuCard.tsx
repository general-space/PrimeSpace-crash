type Props = {
  title: string;
};

export default function MenuCard({
  title,
}: Props) {
  return (
    <div
      style={{
        background: "#111827",
        padding: "20px",
        borderRadius: "16px",
        marginTop: "15px",
      }}
    >
      {title}
    </div>
  );
}
