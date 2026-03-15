import WfcHeader from "../../components/WhyFarmcult/WfcHeader.jsx";
import ContactSection from "../../components/ContactSection.jsx";
import Footer from "../../components/Footer.jsx";
import { useParams } from "react-router-dom";
// import casestudies from "../assets/docs/blogs.js";
import caseStudies from "../../assets/docs/case_studies.js";

const CaseStudy = () => {
  const { id } = useParams();

  const caseStudy = caseStudies.find((c) => c.id === Number(id));

  if (!caseStudy) {
    return <div>Case Study not found</div>;
  }

  return (
    <div className="case-study-page">
      <WfcHeader
        tag="CASE STUDY"
        title={caseStudy.title}
        subtitle={caseStudy.description}
      />
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${caseStudy.image})`,
        }}
      />
      <section className="flex justify-center px-16 py-16">
        <div className="max-w-[1280px] flex gap-16">
          {/* LEFT SIDEBAR */}
          <div className="w-[300px] h-min bg-[#ECECEC] rounded-[16px] p-[30px] flex flex-col gap-6">
            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">Location</h3>
              <p className="text-[16px] leading-[29px]">
                {caseStudy.location}
              </p>
            </div>

            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">
                Project Size
              </h3>
              <p className="text-[16px] leading-[29px]">{caseStudy.projectSize}</p>
            </div>

            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">
                Client Profile
              </h3>
              <p className="text-[16px] leading-[29px]">
                {caseStudy.clientProfile}
              </p>
            </div>

            <div>
              <h3 className="text-[#8DC83A] font-bold text-[18px]">
                Project Type
              </h3>
              <p className="text-[16px] leading-[29px]">
                {caseStudy.projectType}
              </p>
            </div>
          </div>
          {/* Article */}
          <div className="flex-1 max-w-[424px] text-[15px] leading-[29px] text-[#343434] space-y-6">
            {caseStudy.content.map((p, i) => (
              <p key={i} className="mb-6 leading-[29px]">
                {p}
              </p>
            ))}
          </div>

          {/* Sidebar */}
          <div className="w-[300px] h-min border-x border-[#DEDEDE] px-5 flex flex-col gap-6">
            <h3 className="text-lg font-bold">Our Farms in Action</h3>

            <p className="text-sm leading-7">
              Follow real projects, site updates, and behind-the-scenes farm
              progress.
            </p>

            <div className="flex gap-4 text-[#8DC83A]">
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC] px-16 py-16 flex justify-center">
        <div className="max-w-[1152px] flex gap-16">
          {/* Left text */}
          <div className="w-[300px] flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] font-medium">
                Real Farms.Real Results.
              </h2>

              <p className="text-sm leading-7">
                Every project is built with planning, technology, and long-term viability in mind. Explore how Farmcult transforms land into structured operations across India.
              </p>
            </div>

            <button className="bg-[#343434] text-white px-6 py-3 rounded-full w-fit">
              View All Case Studies
            </button>
          </div>

          {/* Cards */}
          <div className="flex gap-6">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 w-[382px] flex flex-col gap-6"
              >
                <span className="bg-[#8DC83A40] px-3 py-1 rounded-full text-sm w-fit">
                  Case Study
                </span>

                <img
                  src={blog.img}
                  className="rounded-xl h-[250px] object-cover"
                />

                <h3 className="font-bold text-lg">{blog.title}</h3>

                <p className="text-sm leading-7">
                  Why hydroponic farming systems deliver faster cycles, stable
                  output, and higher annual yield.
                </p>

                <span className="text-[#8DC83A] font-bold">Jan 2025</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CaseStudy;
