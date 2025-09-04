export default function OurImpact() {
  return (
    <div className="bg-green-50 py-7 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Our Impact</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        {OurImpactData.map((data) => (
          <div className="text-center  p-4" key={data.id}>
            <p className="text-6xl font-bold text-green-700">{data.title}</p>
            <span className="text-2xl font-semibold">{data.subtitle}</span>
            <p>{data.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const OurImpactData = [
  {
    id: 1,
    title: "15+",
    subtitle: "LAC",
    discription: "children and their families are impacted every year",
  },
  {
    id: 2,
    title: "2000+",
    subtitle: "VILLAGES",
    discription: "and slums are reached out to across the country",
  },
  {
    id: 3,
    title: "400+",
    subtitle: "PROJECTS",
    discription: "focused on education, healthcare, and women empowerment",
  },
  {
    id: 4,
    title: "25+",
    subtitle: "STATES",
    discription: "across India are impacted by our projects",
  },
];
