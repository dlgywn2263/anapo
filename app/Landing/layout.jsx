import StartHeader from "@/src/StartHeader";

export default function StartLayout({ children }) {
  return (
    <div>
      <StartHeader />
      <main>{children}</main>
    </div>
  );
}
