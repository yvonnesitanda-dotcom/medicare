import React from "react";
import "../css/Myhealthcenter.css";

const diseases = [
  {
    name: "HIV/AIDS",
    image: "https://healthbusiness.co.ke/wp-content/uploads/2026/01/IMG-20260119-WA0026.jpg",
    link:"https://www.who.int/news-room/fact-sheets/detail/hiv-aids"
  },
  {
    name: "Tuberculosis (TB)",
    image: "https://content.presspage.com/uploads/1873/c2abe159-2ac5-43ce-b28e-e58e08d820d7/1920_shutterstock-2418062813.jpg?10000",
    link: "https://www.who.int/news-room/fact-sheets/detail/tuberculosis"
  },
  {
    name: "Malaria",
    image: "https://scitechdaily.com/images/Zika-Malaria-Mosquito-Virus-Concept.jpg",
    link: "https://www.who.int/news-room/fact-sheets/detail/malaria"
  },
  {
    name: "Diabetes",
    image: "https://cells4life.com/wp-content/uploads/2024/06/diabetes_-scaled.jpg",
    link: "https://www.who.int/health-topics/diabetes"
  },
  {
    name: "Hypertension",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZSMx8CB5L81tqP6CNa_NAbNQda_ybkL2VQ&s",
    link: "https://www.who.int/news-room/fact-sheets/detail/hypertension"
  },
  {
    name: "Cancer",
    image: "data:image/jpeg;base64,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",
    link: "https://www.who.int/health-topics/cancer"
  },
  {
    name: "Asthma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOjp45_5bw5huNRPaLP0YQHMhA0dslGE5Ew&s",
    link: "https://www.who.int/news-room/fact-sheets/detail/asthma"
  },
  {
    name: "Cholera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSu0ErFSSkjqvM9espbA1rOtYYZS1kR5aHCQ&s",
    link: "https://www.who.int/news-room/fact-sheets/detail/cholera"
  },
  {
    name: "Pneumonia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYpnLUpIvU8lYjVXGLM_0WJDTMKZOYx_5Jw&s",
    link: "https://www.who.int/news-room/fact-sheets/detail/pneumonia"
  },
  {
    name: "Measles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZHHL_a24VnRgRQfk7XBZEBh3buLyHzVL1g&s",
    link: "https://www.mayoclinic.org/diseases-conditions/measles/symptoms-causes/syc-20374857"
  },
  {
    name: "Typhoid",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTECp5ILmv3CF8AoNZIZXFRzuaVcvFbqVByiw&s",
    link: "https://en.wikipedia.org/wiki/Typhoid_fever"
  },
  {
    name: "Hepatitis",
    image: "https://mdsearchlight.com/wp-content/uploads/2025/01/22794-1731618949775-728x420.jpg",
    link: "https://www.who.int/health-topics/hepatitis"
  },
  {
    name: "Heart Disease",
    image: "https://images.ctfassets.net/ut7rzv8yehpf/1DhC3uX3EeKnjU02LWyTXH/9c82e6ae82662ed5903eafb40d888d90/8_Main_Types_of_Heart_Disease.jpg?w=1800&h=900&fl=progressive&q=50&fm=jpg",
    link: "https://www.who.int/health-topics/cardiovascular-diseases"
  },
  {
    name: "Stroke",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zPDrAOtEBqSxMIgHXlkIuJ0pxXzS7RH56A&s",
    link: "https://www.who.int/news-room/fact-sheets/detail/the-top-10-causes-of-death"
  },
  {
    name: "Chronic Kidney Disease",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZcTnaolnhFGg4TzOuceTcuje2q2ZVLL4MA&s",
    link: "https://www.who.int/news-room/fact-sheets/detail/kidney-disease"
  },
  {
    name: "COPD",
    image: "https://www.froedtert.com/sites/default/files/styles/large_300px_wide_/public/image/2025-10/copd-illustration-lung.jpg?itok=iNGcZYSe",
    link: "https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)"
  },
  {
    name: "Skin Infections",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u1gXEF_2LpVRgC1f6Ddtg-7XXwfey2k-RA&s",
    link: "https://www.healthline.com/health/skin-infections"
  },
  {
    name: "Eye Diseases",
    image: "https://dj3im2gm3txew.cloudfront.net/pub/media/wysiwyg/image-folder/glasses/eye/health/Understanding-Eye-Diseases-and-Eye-Health-Mobile-Banner-770x900.jpg",
    link: "https://www.who.int/health-topics/blindness-and-vision-loss"
  },
  {
    name: "Respiratory Disease",
    image: "https://www.news-medical.net/images/Article_Images/ImageForArticle_22740_16564268624824428.jpg",
    link: "https://www.who.int/news-room/fact-sheets/detail/infectious-diseases"
  },
  {
    name: "Neglected Tropical Diseases",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRJ8ywmzdAETSoU8feqLcAuPfX3VTujrj_w&s",
    link: "https://www.who.int/teams/control-of-neglected-tropical-diseases"
  }
];

const HealthCenter = () => {
  return (
    <div className="health-center-page">
      <h1>Health Awareness — Common Diseases</h1>
      <div className="disease-grid">
        {diseases.map((dis, idx) => (
          <a
            key={idx}
            href={dis.link}
            target="_blank"
            rel="noopener noreferrer"
            className="disease-card"
          >
            <img src={dis.image} alt={dis.name} />
            <div className="overlay">
              <h3>{dis.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HealthCenter;