import ProjectItem from "../components/ProjectItem";
import SectionHeading from "../ui/SectionHeading";

import project1Image from "../assets/project-4.png";
import project0Image from "../assets/project-0.png";
import project2Image from "../assets/project-img-1.png";
import project3Image from "../assets/project-2.png";

const projectData = [
  {
    image: project0Image,
    heading: "Enterprise Multi-Site Network Design",
    desc: "Designed and simulated a multi-office enterprise network interconnecting Head Office (Coimbatore) with branches in Chennai, Bangalore, and Delhi using Cisco Packet Tracer. Implemented VLANs, OSPF, DHCP, and NAT/PAT with centralized servers (Web & File Server) at Head Office. Configured subnetting for scalability and ensured secure departmental segmentation with ACLs.",
    liveLink: "https://drive.google.com/file/d/1WWb9hotPfzODiEDzLHlChYOsTw_L__aO/view?usp=drive_link",
    linkLinkText: "View Network Design Report",
    isScrollAble: false,
  },
  {
    image: project2Image,
    heading: "Linux Multi-Service Server Deployment",
    desc: "A Linux-based multi-service server setup integrating web hosting, MariaDB, Samba/NFS file sharing, LVM + LUKS encrypted storage, SSH security hardening, SELinux enforcement, and automated monitoring. Designed to replicate a production-like environment with secure, reliable, and scalable server operations.",
    liveLink: "https://drive.google.com/file/d/186DqHPq-J8Zy5km0w6YEIK7-oE1wdGhY/view?usp=sharing",
    linkLinkText: "View Linux Server Deployment Report",
    isScrollAble: false,
  },
  {
    image: project3Image,
    heading: "Secure Linux Server Configuration and Automation",
    desc: "Worked on Secure Linux Server Configuration and Automation, focusing on hardening Linux servers with SSH key authentication, SELinux policies, and firewall rules. Automated backups, user management, and log rotation using Bash scripts and cron jobs, while implementing basic monitoring to enhance security, reliability, and reduce manual effort.",
    liveLink: "https://drive.google.com/file/d/1tC3AB1r8UBNLCyHRENaCj1tcH0lRiQsk/view?usp=sharing",
    linkLinkText: "Secure Linux Server Configuration Report",
    isScrollAble: false,
  },
  {
   image: project1Image,
    heading: "Secure Multi-AZ Web Application Deployment with Private Backend on AWS",
    desc: "Deployed a scalable web application in AWS using a VPC with public web servers and private backend servers across multiple Availability Zones. Implemented Elastic Load Balancer for traffic distribution, Auto Scaling for demand-based scaling, EFS/EBS for shared and persistent storage, and IAM for secure access, ensuring high availability and strong security.",
    liveLink: "https://drive.google.com/file/d/14LaFV5WDvEnHLW-tHidKM3BWjF7Q-_Vx/view?usp=sharing",
    linkLinkText: "Multi-AZ Web Application Deployment Report",
    isScrollAble: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="z-10 mt-10 flex flex-col gap-5 px-5 py-10 font-nunito-sans text-white  md:px-10 lg:px-20"
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="mt-12 flex w-full flex-col gap-12">
        {projectData.map((project, index) => (
          <ProjectItem
            key={index}
            image={project.image}
            heading={project.heading}
            desc={project.desc}
            liveLink={project.liveLink}
            linkLinkText={project.linkLinkText}
            isScrollAble={project.isScrollAble}
          />
        ))}
      </div>
    </section>
  );
}
