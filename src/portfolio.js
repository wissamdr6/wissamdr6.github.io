
// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Wissam Draou Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Wissam Draou",
    type: "website",
    url: "https://github.com/wissamdr6",
  },
};
// modif

//Home Page
const greeting = {
  title: "Wissam Draou",
  logo_name: "Wissam Draou",
  nickname: "Data Scientist",
  subTitle:
    "Hands-on Data Scientist with experience designing, training and deploying Machine Learning, Deep Learning, and generative AI at scale. I enjoy solving complex business problems by combining mathematics, AI, and robust engineering practices.",
  resumeLink:
    "https://github.com/wissamdr6/portfolio/blob/572d7a2f203b07592ecad9b8e4202b4f758f454d/Wissam_Draou_Resume.pdf",
  portfolio_repository: "https://github.com/wissamdr6",
  githubProfile: "https://github.com/wissamdr6",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/wissamdr6",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/wissam-draou/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:wissam.draou.pro@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];


const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Classical Machine Learning for supervised tasks (regression, classification) and unsupervised methods (clustering, dimensionality reduction)",
        "⚡ Deep Learning architectures such as CNNs, RNNs, BERT, other architectures for text, image, regression & classification tasks",
        "⚡ Generative AI models: LLMs (GPT-like, Llama, Mistral), Sentence Transformers for embeddings and semantic search, RAG, and GANs",
      ],
      softwareSkills: [
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3", backgroundColor: "transparent" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#F9A03C",
          },
        },
        {
          skillName: "spaCy & NLTK",
          fontAwesomeClassname: "simple-icons:spacy",
          style: {
            color: "#09A3AC",
          },
        },
      ],
    },
    {
      title: "Data Engineering & Analytics",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Build, automate, and maintain data pipelines",
        "⚡ Data cleaning, transformation & feature engineering",
        "⚡ Create automated dashboards and reports for business teams",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "ion-logo-github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Airflow",
          fontAwesomeClassname: "simple-icons:apacheairflow",
          style: { color: "#017CEE" },
        },
      ],
    },
    {
      title: "Business Impact & Communication",
      fileName: "FullStackImg",
      skills: [
        "⚡ Translate technical results into clear insights for stakeholders",
        "⚡ Present findings and recommendations to business teams",
        "⚡ Ensure solutions are scalable and maintainable",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "Plotly / Dash",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3F4F75",
          },
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: {
            color: "#D24726",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Université Paris Cité (University of Paris Cité)",
      subtitle: "Master’s Degree in Machine Learning for Data Science",
      logo_path: "uparis.png",
      alt_name: "Uparis",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Advanced Machine Learning expertise: supervised/unsupervised learning, optimization, statistics, time series, and pattern recognition.",
        "⚡ Applied AI skills in NLP, computer vision, deep learning, multimodal systems, and recommendation algorithms.",
        "⚡ Strong foundations in Data Engineering: data pipelines, cloud computing, distributed systems, and containerization.",
        "⚡ Experience with large‑scale and unstructured data, including Big Data analytics, clustering, and dimensionality reduction.",
        "⚡ Hands‑on industry experience through apprenticeship, multidisciplinary projects, and research‑driven work.",
      ],
      website_link: "https://biomedicale.u-paris.fr/master-informatique/master-informatique-mlsd/",
    },
     {
      title: "Université Paris Cité (University of Paris Cité)",
      subtitle: "Bachelor’s Degree in Data Mining",
      logo_path: "uparis.png",
      alt_name: "Uparis",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Collected, validated, and structured large datasets, building data warehouses and preparing data for analytical and decision‑making processes.",
        "⚡ Applied statistical analysis and data mining techniques, including segmentation, decision trees, generalized linear models, and introductory Machine Learning.",
        "⚡ Used major analytical and BI tools, working with databases, statistical programming, reporting systems, and Big Data fundamentals.",
        "⚡ Communicated insights effectively, delivering analyses, marketing scoring models, and business‑oriented recommendations through projects, case studies, and a professional internship.",
      ],
      website_link: "https://odf.u-paris.fr/fr/offre-de-formation/licence-professionnelle-DP/sciences-technologies-sante-STS/metiers-du-decisionnel-et-de-la-statistique-K2NDIRMZ/licence-professionnelle-metier-du-decisionnel-et-de-la-statistique-parcours-data-mining-JT8PXJQ8.html",
    },
     {
      title: "Université Paris Cité (University of Paris Cité)",
      subtitle: "Bachelor’s Degree in Applied Mathematics",
      logo_path: "uparis.png",
      alt_name: "Uparis",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Developed strong foundations in applied mathematics, including linear algebra, functional analysis, differential equations, Fourier analysis, and numerical methods.",
        "⚡ Built solid statistical expertise, covering probability theory, statistical inference, regression models, multivariate analysis, classification methods, and data analysis on real datasets.",
        "⚡ Gained practical experience with statistical software and programming, especially R and SAS, for data manipulation, modeling, simulation, and applied statistical studies.",
        "⚡ Experience with large‑scale and unstructured data, including Big Data analytics, clustering, and dimensionality reduction.",
        "⚡ Applied mathematical and statistical tools to real‑world problems, through case studies, and applications in economics, biology and signal processing.",
      ],
      website_link: "https://math-info.u-paris.fr/licence-de-mathematiques/parcours-techniques-statistiques/#:~:text=Le%20parcours%20Techniques%20statistiques%20(TS,%C3%A9tude%20statistique%20en%20situation%20r%C3%A9elle.",
    },
     {
      title: "Université Paris Cité (University of Paris Cité)",
      subtitle: "University Diploma of Technology (DUT) in Computer Science",
      logo_path: "uparis.png",
      alt_name: "Uparis",
      duration: "2019 - 2021",
       descriptions: [
      "⚡ Solid foundations in data collection, validation, structuring, and statistical analysis for data-driven decision making.",
      "⚡ Skills in statistical modeling, data mining, and visualization: developing quantitative indicators, dashboards, and reports to extract actionable insights.",
      "⚡ Cross-disciplinary expertise: project management, business understanding, scientific English, teamwork, and effective communication with stakeholders."
      ],
      website_link: "https://iutparis-seine.u-paris.fr/metiers-de-la-data/bachelor-universitaire-de-technologie-stid/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ML Engineer Certificat (in progress)",
      subtitle: "- AWS Training",
      status: "In progress",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://aws.amazon.com/fr/certification/certified-machine-learning-engineer-associate/",
      alt_name: "AWS",
      color_code: "white",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I am a business-oriented Data Scientist with expertise in Machine Learning, Deep Learning, NLP,generative AI, and data engineering. I have developed solutions that drastically reduce processing time, automate workflows, and facilitate data-driven decision-making. I collaborate closely with business teams to ensure solutions are practical, scalable, and impactful.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Scientist",
          company: "Urssaf Caisse Nationale",
          company_url: "https://www.urssaf.fr/accueil.html",
          logo_path: "urssaf_logo.png",
          duration: "Sept 2024 - Sept 2025",
          location: "Montreuil, France",
          description:
            "Designed a time series model to forecast regional production with an average accuracy of 95%. Developed an NLP model automating semantic search between audit objectives and report contents, reducing a one-week task to 4 minutes. Created and automated Python dashboards, reducing weekly reporting time from 2 hours to 46 seconds.",
          color: "#000000",
        },
        {
          title: "Data Analyst",
          company: "Air France",
          company_url: "https://corporate.airfrance.com/fr/propos-dair-france",
          logo_path: "af.png",
          duration: "Sept 2023 - Sept 2024",
          location: "Roissy en France, France",
          description:
            "Developed an unsupervised Machine Learning model to support cabin crew selection, standardizing scoring and achieving 95% manager satisfaction. Reduced a one-week selection process to 3 minutes. Built Power BI dashboards to visualize performance and support decision-making, and automated SQL queries to streamline data workflows.",
          color: "#0879bf",
        },
        {
          title: "Statistical Research Officer",
          company: "Urssaf ile de France",
          company_url: "https://iledefrance.urssaf.fr/accueil.html",
          logo_path: "urssaf_logo.png",
          duration: "Sept 2022 - Sept 2023",
          location: "Dammarie les Lys, France",
          description:
            "Developed a Machine Learning model identifying three distinct profiles of repeat contributors with 94% accuracy, enabling proactive targeted actions that reduced recurring requests by 22%. Implemented and automated dashboards, created SQL queries, and performed data cleaning and feature engineering to ensure high-quality analysis.",
          color: "#9b1578",
        },
        {
          title: "Expert Data",
          company: "Geodis",
          company_url: "https://geodis.com/fr/propos-de-nous",
          logo_path: "geodis.webp",
          duration: "Apr 2022 - Jun 2022",
          location: "Roissy en France, France",
          description:
            "Managed databases, conducted statistical analyses, and automated dashboards for operational performance. Designed KPIs and data visualizations to support business decisions, improving efficiency and reporting accuracy.",
          color: "#fc1f20",
        },
        {
          title: "Process and Performance Analyst",
          company: "Orange",
          company_url: "https://www.orange.com/fr/groupe/nous-connaitre/qui-sommes-nous",
          logo_path: "logo_orange.png",
          duration: "Sept 2020 - Sept 2021",
          location: "Issy les Moulineaux, France",
          description:
            "Implemented and automated dashboards tracking service technicians' performance. Developed data visualizations and presented weekly reports to department managers, enabling informed decision-making and operational improvements.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I specialize in Data Science projects, transforming models into scalable web applications deployed on the cloud.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [/*
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  */],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "photo_wissam_draou.jpg",
    description:
      "I’m available on most professional platforms. Feel free to reach out, I usually reply within 24 hours. I can help with Machine Learning, NLP, Data Engineering, Automation, and AI‑driven solutions.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
