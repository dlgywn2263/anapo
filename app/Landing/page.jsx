import Image from "next/image";
import StartOption from "@/src/StartOption";

const Page = () => {
  return (
    <section className="relative h-screen w-screen   flex items-center justify-center">
      <Image src={"/anapo_main.jpg"} alt={""} fill className="object-cover" />
      <div className="relative z-10">
        <StartOption />
      </div>
    </section>
  );
};

export default Page;
