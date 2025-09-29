import PrimaryButton from "../ui/PrimaryButton";
import SecondaryPara from "../ui/SecondaryPara";
import SparklesIconButton from "../ui/SparklesIconButton";

export default function MainContent() {
  return (
    <div className="flex flex-col gap-10 lg:gap-12">
      <SparklesIconButton>
        Hey I'm <span className="font-semibold">Jai Adithiya</span>
      </SparklesIconButton>

      <div className="text-center font-sen text-[28px] font-bold leading-tight text-white xs:text-[34px] sm:text-left sm:text-4xl md:text-[38px] md:leading-[1.3]  lg:text-[54px]">
        <span className="gradient-text">Aspiring Cloud and Devops Engineer</span>
        <span className="block text-[22px] xs:text-[26px] md:text-[28px] lg:text-[38px]">
          I build reliable and automated systems.
        </span>
      </div>

      <SecondaryPara classname="md:max-w-sm md:text-base lg:max-w-md lg:text-[18px]">
        I'm a Aspiring Cloud and Devops Engineer
        Check out my projects below.
      </SecondaryPara>

      <PrimaryButton
        btn={false}
        href="https://www.linkedin.com/in/jaiadithiya11/"
        classname="lg:-mt-5 text-center"
      >
        Let's Connect
      </PrimaryButton>
    </div>
  );
}
