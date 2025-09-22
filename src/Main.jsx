import Image from "next/image";
import Button from "@/src/Button";
const Main = () => {
  return (
    <section className="h-screen container mx-auto">
      <Image src={"/anapo_main.jpg"} alt={""} fill />
      <Button />
    </section>
  );
};

export default Main;
