import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionTransition() {
  return (
    <div>
      {AccordionData.map((data) => (
        <Accordion key={data.id} className="border border-green-100">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">
              <div className="font-bold">{data.title}</div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const AccordionData = [
  {
    id: 1,
    title: "Making Policies & Decisions",
    description:
      "At Shika Foundation Trust, we ensure transparent and ethical decision-making by following well-defined policies that align with our mission. Our leadership team carefully evaluates every initiative, considering community needs, sustainability, and impact. We prioritize fairness, inclusivity, and accountability, ensuring that our policies drive positive and meaningful change in society.",
  },
  {
    id: 2,
    title: "Credibility Norms",
    description:
      "At Shika Foundation Trust, we uphold the highest standards of integrity, transparency, and accountability. Our financial transactions, resource allocations, and program implementations follow strict ethical guidelines. Regular audits, public disclosures, and compliance with legal norms ensure that our work remains trustworthy and impactful. We are committed to serving society with honesty and dedication.",
  },
  {
    id: 3,
    title: "Project Management & Monitoring system",
    description:
      "At Shika Foundation Trust, we follow a structured Project Management & Monitoring System to ensure that our initiatives are effectively planned, implemented, and evaluated for maximum impact. Our approach involves strategic planning, efficient execution, continuous assessment, and transparent reporting to uphold the highest standards of accountability and effectiveness.Each project begins with comprehensive research and needs assessment to understand the challenges and requirements of the target beneficiaries. Based on this analysis, we develop detailed project plans, allocate resources efficiently, and set measurable goals and timelines. Our dedicated team, along with local stakeholders and volunteers, ensures smooth execution while maintaining cost-effectiveness and sustainability. To track progress, we implement a robust monitoring system that includes regular field visits, performance reviews, and data collection. We use advanced technology and feedback mechanisms to assess the success of our programs, identify challenges, and make necessary improvements. Transparency is a key element of our system, and we ensure that stakeholders, donors, and the community remain informed through detailed reports and impact assessments. By maintaining a structured Project Management & Monitoring System, we strive to maximize social impact, optimize resource utilization, and ensure long-term sustainability in all our initiatives.",
  },
  {
    id: 4,
    title: "Audit System",
    description:
      "At Shika Foundation Trust, we believe in maintaining the highest standards of financial transparency and accountability. Our Audit System is designed to ensure that all funds and resources are utilized effectively and ethically, in alignment with our mission and objectives. We conduct regular internal and external audits to monitor financial transactions, project expenditures, and overall fund utilization. A qualified Chartered Accountant (CA), appointed by the organization, performs an independent financial audit annually to verify compliance with legal and regulatory requirements. Additionally, our internal audit team reviews financial records, ensures adherence to budget allocations, and detects any discrepancies. To maintain transparency, all income, expenses, grants, and donations are documented systematically and presented in financial reports. These reports are shared with our board members, donors, and stakeholders, ensuring complete openness in our financial operations. Our Audit System not only strengthens the financial integrity of the trust but also enhances donor confidence and credibility. By implementing strict financial controls and maintaining a well-documented financial reporting system, we ensure that every contribution is used effectively for the welfare of the communities we serve.",
  },
  {
    id: 5,
    title: "Use of Technology for Good Governance",
    description:
      "At Shika Foundation Trust, we leverage technology to enhance transparency, efficiency, and accountability in governance. Our digital systems streamline fund management, project tracking, and real-time reporting, ensuring effective decision-making. We use cloud-based data storage, digital communication platforms, and online monitoring tools to maintain transparency. By integrating technology-driven audits, automated financial records, and secure digital transactions, we ensure compliance with governance norms. Additionally, data analytics and AI-driven insights help in assessing project impact and optimizing resource allocation. Our commitment to e-governance fosters trust, improves accessibility, and strengthens our mission of community development.",
  },
  {
    id: 6,
    title: "People Management",
    description:
      "At Shika Foundation Trust, we value our team as our greatest asset. We ensure transparent communication, skill development, and leadership growth to foster a motivated workforce. Through training, mentorship, and fair HR policies, we promote teamwork, inclusivity, and accountability, ensuring a dedicated team committed to our mission.",
  },
];
