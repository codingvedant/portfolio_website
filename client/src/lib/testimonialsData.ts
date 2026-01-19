export interface BlogPost {
  title: string;
  description: string;
  date: string;
  url: string;
  platform: string;
  readTime?: string;
}

export const testimonialsData: BlogPost[] = [
  {
    title: "Wiz x Cloud Security Championship — Perimeter Leak Walkthrough",
    description: "A complete Hack The Box Dog machine walkthrough covering reconnaissance, exploiting exposed Git directories, RCE on Backdrop CMS, and privilege escalation via misconfigured binaries.",
    date: "January 18, 2026",
    url: "https://medium.com/@codingvedant/wiz-x-cloud-security-championship-perimeter-leak-c59b18bdbb17",
    platform: "Medium",
    readTime: "4 min read"
  },
  {
    title: "Domain Join an Ubuntu Machine to an Active Directory",
    description: "A step-by-step guide to joining an Ubuntu machine to a Windows Server Active Directory domain, based on a hands-on multi-VM lab setup. The walkthrough covers common issues, required configurations, and the exact steps that worked in practice.",
    date: "December 19, 2025",
    url: "https://medium.com/@codingvedant/domain-join-an-ubuntu-machine-to-an-active-directory-34ea0a6b37bb",
    platform: "Medium",
    readTime: "3 min read"
  },
  {
    title: "Exploiting the CloudGoat EC2 SSRF Scenario: From SSRF to Full AWS Compromise",
    description: "A hands-on walkthrough of exploiting a vulnerable EC2 SSRF scenario in the CloudGoat AWS lab environment to chain from SSRF through metadata service abuse, credential harvesting, and ultimately full AWS cloud compromise.",
    date: "November 21, 2025",
    url: "https://medium.com/@codingvedant/exploiting-the-cloudgoat-ec2-ssrf-scenario-from-ssrf-to-full-aws-compromise-904b3d64e0b5",
    platform: "Medium",
    readTime: "4 min read"
  },
  {
    title: "Goodbye Port 22 — Understanding AWS SSM’s Secure Access Mechanism",
    description: "A deep dive into how AWS Systems Manager (SSM) allows secure, port-less access to EC2 instances. Learn why SSM is safer than traditional SSH and how to implement it with IAM roles, logging, and session manager.",
    date: "November 4, 2025",
    url: "https://medium.com/@codingvedant/goodbye-port-22-understanding-aws-ssms-secure-access-mechanism-28ec1fa54a1b",
    platform: "Medium",
    readTime: "5 min read"
  },
  {
    title: "TryHackMe — Res Walkthrough",
    description: "A complete walkthrough of the Res machine on TryHackMe. Covers enumeration, SSH access on unusual ports, password cracking, privilege escalation, and attacker methodology.",
    date: "September 27, 2025",
    url: "https://medium.com/@codingvedant/tryhackme-jack-of-all-trades-walkthrough-write-up-0f630d67e361",
    platform: "Medium",
    readTime: "5 min read"
  },
  {
    title: "TryHackMe — Jack-of-All-Trades Walkthrough",
    description: "A complete walkthrough of the Jack-of-All-Trades TryHackMe walkthrough with improved methodology, covering Nmap scanning, Hydra brute force, SSH tunneling, and root privilege escalation.",
    date: "September 19, 2025",
    url: "https://medium.com/@codingvedant/tryhackme-jack-of-all-trades-walkthrough-write-up-a56cb9bf2ec6",
    platform: "Medium",
    readTime: "7 min read"
  },
  {
    title: "TryHackMe — Brains Lab Walkthrough Guide",
    description: "A beginner-friendly guide to the Brains lab on TryHackMe. Learn enumeration, web analysis, credential extraction, and privilege escalation techniques in an easy-to-follow format.",
    date: "September 18, 2025",
    url: "https://medium.com/@codingvedant/tryhackme-brains-lab-walkthrough-guide-55a43ea9f19c",
    platform: "Medium",
    readTime: "6 min read"
  },
  {
    title: "Hack The Box: Dog — Full Walkthrough",
    description: "A complete Hack The Box Dog machine walkthrough covering reconnaissance, exploiting exposed Git directories, RCE on Backdrop CMS, and privilege escalation via misconfigured binaries.",
    date: "September 8, 2025",
    url: "https://medium.com/@codingvedant/hack-the-box-dog-htb-lab-walkthrough-guide-b603fb68204c",
    platform: "Medium",
    readTime: "4 min read"
  }
  

];

