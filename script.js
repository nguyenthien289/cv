const saveButton = document.getElementById("save-pdf");
const langButtons = document.querySelectorAll("[data-lang-switch]");
const metaDescription = document.getElementById("meta-description");

const translations = {
  en: {
    pageTitle: "Nguyen Van Tinh Thien | IC Design / Embedded Systems Intern",
    metaDescription:
      "Portfolio CV of Nguyen Van Tinh Thien, an IC Design and Embedded Systems intern candidate with experience in RTL design, ASIC flow, FPGA, and STM32-based projects.",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navTraining: "Training",
    navEducation: "Education",
    navContact: "Contact",
    heroEyebrow: "Available for Internship",
    heroRole: "IC Design / Embedded Systems Intern",
    heroText:
      "IC Design student with hands-on experience in RTL design, FPGA prototyping, open-source ASIC flow, and STM32-based embedded systems. Looking for an internship where I can contribute to digital design, verification, or embedded development.",
    pillEmail: "Email",
    pillPhone: "Phone",
    pillStatus: "Status",
    pillStatusText: "Open to intern opportunities",
    focus1: "Digital Logic",
    focus2: "RTL Design",
    focus3: "Formal Verification",
    focus4: "OpenLane Flow",
    focus5: "FPGA",
    focus6: "STM32",
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",
    ctaPdf: "Save as PDF",
    metaUniversity: "University",
    metaDegree: "Degree",
    metaDegreeValue: "Bachelor of IC Design",
    metaStudyPeriod: "Study Period",
    metaInterests: "Core Interests",
    metaInterestsValue: "RTL Design, ASIC Flow, FPGA, Embedded Systems",
    highlight1Title: "RTL & Verification",
    highlight1Text:
      "Verilog HDL, SystemVerilog Assertions, bounded model checking, and simulation-oriented debugging.",
    highlight2Title: "Open-Source ASIC Flow",
    highlight2Text:
      "Experience with Yosys, OpenLane, Magic VLSI, KLayout, Ngspice, and physical verification checks.",
    highlight3Title: "FPGA & Prototyping",
    highlight3Text:
      "Practical exposure to Efinix Titanium boards and digital design exercises translated into working hardware.",
    highlight4Title: "Embedded Integration",
    highlight4Text:
      "Built sensor-driven systems with STM32, peripheral interfaces, and actuator control under real conditions.",
    aboutKicker: "Profile",
    aboutTitle: "Professional Summary",
    aboutCard1Title: "Who I Am",
    aboutCard1Text1:
      "Third-year IC Design student with a solid foundation in Digital Logic and ASIC Design Flow. My work so far combines theoretical understanding with practical implementation across RTL design, FPGA prototyping, and embedded systems.",
    aboutCard1Text2:
      "I am especially interested in digital design, verification, and hardware-software integration roles where I can keep improving my engineering discipline while contributing to real products.",
    aboutCard2Title: "What I Can Contribute",
    aboutList1: "RTL design and logic implementation using Verilog HDL.",
    aboutList2: "Basic formal verification using SVA and SymbiYosys.",
    aboutList3: "Open-source ASIC flow practice from synthesis to layout checks.",
    aboutList4:
      "STM32-based embedded development with sensors, displays, and communication interfaces.",
    skillsKicker: "Capabilities",
    skillsTitle: "Technical Skills",
    skill1Title: "Hardware Design & Verification",
    skill1Text:
      "Comfortable building RTL blocks, reasoning about logic behavior, and validating digital correctness.",
    skill1Tag3: "Bounded Model Checking",
    skill1Tag4: "RTL Simulation",
    skill2Title: "ASIC Toolchain",
    skill2Text:
      "Hands-on practice with open-source tools used across synthesis, layout, and checking flows.",
    skill3Title: "Embedded Development",
    skill3Text:
      "Builds firmware for microcontroller systems and integrates sensors, displays, and control logic.",
    skill4Title: "Interfaces & Control",
    skill4Text:
      "Familiar with peripheral communication and control-oriented logic used in digital and embedded projects.",
    skill4Tag5: "Debouncing",
    projectsKicker: "Selected Work",
    projectsTitle: "Project Experience",
    project1Type: "Embedded Systems Project",
    project1Title: "Smart Clothes Drying System",
    project1Item1:
      "Developed an automated drying system that responds to temperature, humidity, and rain conditions.",
    project1Item2:
      "Integrated STM32F103C8, DHT11, rain sensor, servo motor, buzzer, and I2C LCD into one control system.",
    project1Item3:
      "Implemented AUTO and MANUAL modes with real-time monitoring and actuator control.",
    project1Item4:
      "Achieved system response time under 500 ms while maintaining stable operation.",
    project1Chip5: "Servo Control",
    project2Type: "Digital Design Practice",
    project2Title: "RGB Color Mixer & Frequency Counter",
    project2Badge: "FPGA / Logic",
    project2Item1:
      "Built an RGB color mixer using PWM control, rotary encoder input, and debouncing logic.",
    project2Item2:
      "Designed a frequency counter using FSM-based control, edge detection, and a 7-segment display driver.",
    project2Item3:
      "Strengthened digital design fundamentals through modular RTL implementation and hardware-oriented debugging.",
    project2Chip4: "Edge Detection",
    project2Chip5: "7-Segment Driver",
    project3Type: "ASIC Flow & Verification Practice",
    project3Title: "OpenLane, Magic VLSI, and SymbiYosys Lab Work",
    project3Item1:
      "Designed MOSFET layouts in Magic VLSI using the Sky130 technology stack.",
    project3Item2:
      "Ran RTL-to-GDSII implementation flow with OpenLane and reviewed timing, DRC, and LVS results.",
    project3Item3:
      "Used SymbiYosys and SystemVerilog Assertions to build correctness checks and coverage models.",
    trainingKicker: "Learning Path",
    trainingTitle: "Training Highlights",
    training1Label: "GreenChip Program",
    training1Title: "ASIC & Digital Design Training",
    training1Text:
      "Participated in focused training covering digital design, open-source ASIC implementation flow, and practical engineering workflows.",
    training2Label: "Physical Design Practice",
    training2Title: "Layout, Timing, and Verification Checks",
    training2Text:
      "Worked through MOSFET layout tasks, OpenLane flow execution, and DRC/LVS review to understand backend implementation quality.",
    training3Label: "Formal Verification Practice",
    training3Title: "Assertion-Based Validation",
    training3Text:
      "Used SVA and SymbiYosys to reason about correctness, write assertions, and explore coverage-driven checking methods.",
    educationKicker: "Background",
    educationTitle: "Education & Strengths",
    educationCardTitle: "Education",
    educationDegree: "Bachelor of IC Design",
    strength1Title: "Problem Solving",
    strength1Text:
      "Enjoys breaking technical problems into smaller tasks and iterating toward stable solutions.",
    strength2Title: "Self Learning",
    strength2Text:
      "Actively studies tools and workflows outside class to build stronger practical engineering skills.",
    strength3Title: "Technical English",
    strength3Text:
      "Able to read English technical documentation and apply it to labs and project development.",
    footerKicker: "Contact",
    footerTitle: "Let's Build Something Useful",
    footerText:
      "I am looking for internship opportunities in IC Design, digital verification, FPGA prototyping, and embedded systems.",
    footerBackToTop: "Back to top"
  },
  vi: {
    pageTitle: "Nguyen Van Tinh Thien | Thuc tap sinh IC Design / He thong nhung",
    metaDescription:
      "CV portfolio cua Nguyen Van Tinh Thien, ung vien thuc tap IC Design va he thong nhung voi kinh nghiem ve RTL design, quy trinh ASIC, FPGA va cac du an STM32.",
    navAbout: "Gioi thieu",
    navSkills: "Ky nang",
    navProjects: "Du an",
    navTraining: "Dao tao",
    navEducation: "Hoc van",
    navContact: "Lien he",
    heroEyebrow: "San sang cho co hoi thuc tap",
    heroRole: "Thuc tap sinh IC Design / He thong nhung",
    heroText:
      "Sinh vien IC Design co kinh nghiem thuc hanh ve RTL design, prototype tren FPGA, quy trinh ASIC ma nguon mo va he thong nhung dung STM32. Dang tim kiem co hoi thuc tap de dong gop trong cac cong viec lien quan den digital design, verification hoac phat trien embedded.",
    pillEmail: "Email",
    pillPhone: "Dien thoai",
    pillStatus: "Trang thai",
    pillStatusText: "Dang tim co hoi thuc tap",
    focus1: "Logic so",
    focus2: "RTL Design",
    focus3: "Formal Verification",
    focus4: "Quy trinh OpenLane",
    focus5: "FPGA",
    focus6: "STM32",
    ctaProjects: "Xem du an",
    ctaContact: "Lien he toi",
    ctaPdf: "Luu thanh PDF",
    metaUniversity: "Truong hoc",
    metaDegree: "Bang cap",
    metaDegreeValue: "Cu nhan Thiet ke vi mach",
    metaStudyPeriod: "Thoi gian hoc",
    metaInterests: "Dinh huong chinh",
    metaInterestsValue: "RTL Design, ASIC Flow, FPGA, He thong nhung",
    highlight1Title: "RTL & Verification",
    highlight1Text:
      "Verilog HDL, SystemVerilog Assertions, bounded model checking va kha nang debug thong qua mo phong.",
    highlight2Title: "Quy trinh ASIC ma nguon mo",
    highlight2Text:
      "Co kinh nghiem voi Yosys, OpenLane, Magic VLSI, KLayout, Ngspice va cac buoc kiem tra physical verification.",
    highlight3Title: "FPGA & Prototype",
    highlight3Text:
      "Da thuc hanh tren board Efinix Titanium va chuyen cac bai tap digital design thanh mo hinh phan cung hoat dong duoc.",
    highlight4Title: "Tich hop he thong nhung",
    highlight4Text:
      "Xay dung he thong dieu khien dua tren STM32, ket noi ngoai vi va van hanh co che chap hanh trong dieu kien thuc te.",
    aboutKicker: "Tong quan",
    aboutTitle: "Tom tat chuyen mon",
    aboutCard1Title: "Toi la ai",
    aboutCard1Text1:
      "Toi la sinh vien nam 3 nganh IC Design, co nen tang kha vung ve Digital Logic va ASIC Design Flow. Qua trinh hoc tap va lam du an giup toi ket hop duoc kien thuc ly thuyet voi trien khai thuc te trong RTL design, FPGA va embedded systems.",
    aboutCard1Text2:
      "Toi dac biet quan tam den digital design, verification va cac vi tri ket hop giua phan cung va phan mem, noi toi co the tiep tuc ren luyen tu duy ky thuat dong thoi dong gop vao san pham thuc te.",
    aboutCard2Title: "Gia tri toi co the dong gop",
    aboutList1: "Thiet ke RTL va hien thuc logic bang Verilog HDL.",
    aboutList2: "Kiem chung hinh thuc co ban voi SVA va SymbiYosys.",
    aboutList3: "Thuc hanh quy trinh ASIC ma nguon mo tu synthesis den layout va kiem tra.",
    aboutList4:
      "Phat trien he thong nhung dua tren STM32 voi cam bien, man hinh va cac giao tiep ngoai vi.",
    skillsKicker: "Nang luc",
    skillsTitle: "Ky nang ky thuat",
    skill1Title: "Thiet ke phan cung & Kiem chung",
    skill1Text:
      "Co kha nang xay dung khoi RTL, phan tich hanh vi logic va xac thuc tinh dung dan cua thiet ke so.",
    skill1Tag3: "Bounded Model Checking",
    skill1Tag4: "Mo phong RTL",
    skill2Title: "Chuoi cong cu ASIC",
    skill2Text:
      "Da thuc hanh voi cac cong cu ma nguon mo duoc dung trong synthesis, layout va checking flow.",
    skill3Title: "Phat trien he thong nhung",
    skill3Text:
      "Xay dung firmware cho vi dieu khien va tich hop cam bien, man hinh cung nhu logic dieu khien.",
    skill4Title: "Giao tiep & Dieu khien",
    skill4Text:
      "Quen thuoc voi giao tiep ngoai vi va cac logic dieu khien thuong gap trong du an digital va embedded.",
    skill4Tag5: "Chong doi nut nhan",
    projectsKicker: "Du an tieu bieu",
    projectsTitle: "Kinh nghiem du an",
    project1Type: "Du an he thong nhung",
    project1Title: "He thong phoi do thong minh",
    project1Item1:
      "Phat trien he thong phoi do tu dong, co kha nang phan ung voi nhiet do, do am va dieu kien mua.",
    project1Item2:
      "Tich hop STM32F103C8, DHT11, cam bien mua, dong co servo, buzzer va LCD I2C thanh mot he thong dieu khien thong nhat.",
    project1Item3:
      "Trien khai hai che do AUTO va MANUAL voi kha nang giam sat thoi gian thuc va dieu khien co cau chap hanh.",
    project1Item4:
      "Dat thoi gian phan hoi duoi 500 ms va duy tri van hanh on dinh cho toan he thong.",
    project1Chip5: "Dieu khien servo",
    project2Type: "Thuc hanh digital design",
    project2Title: "Bo tron mau RGB & Bo dem tan so",
    project2Badge: "FPGA / Logic",
    project2Item1:
      "Xay dung bo tron mau RGB su dung dieu khien PWM, rotary encoder va logic chong doi nut nhan.",
    project2Item2:
      "Thiet ke bo dem tan so voi dieu khien dua tren FSM, edge detection va driver 7 doan.",
    project2Item3:
      "Cung co nen tang digital design thong qua viec hien thuc RTL theo module va debug huong phan cung.",
    project2Chip4: "Phat hien canh",
    project2Chip5: "Driver 7 doan",
    project3Type: "Thuc hanh ASIC Flow & Verification",
    project3Title: "Thuc hanh OpenLane, Magic VLSI va SymbiYosys",
    project3Item1:
      "Thiet ke layout MOSFET trong Magic VLSI dua tren cong nghe Sky130.",
    project3Item2:
      "Chay quy trinh RTL-to-GDSII voi OpenLane va danh gia ket qua timing, DRC va LVS.",
    project3Item3:
      "Su dung SymbiYosys va SystemVerilog Assertions de xay dung cac bo kiem tra tinh dung dan va coverage model.",
    trainingKicker: "Lo trinh hoc tap",
    trainingTitle: "Diem nhan dao tao",
    training1Label: "Chuong trinh GreenChip",
    training1Title: "Dao tao ASIC & Digital Design",
    training1Text:
      "Tham gia chuong trinh dao tao tap trung vao digital design, quy trinh ASIC ma nguon mo va quy trinh lam viec ky thuat thuc te.",
    training2Label: "Thuc hanh Physical Design",
    training2Title: "Layout, Timing va Kiem tra",
    training2Text:
      "Thuc hien cac bai tap layout MOSFET, chay OpenLane flow va xem xet DRC/LVS de hieu ro hon ve chat luong backend.",
    training3Label: "Thuc hanh Formal Verification",
    training3Title: "Kiem chung bang Assertion",
    training3Text:
      "Su dung SVA va SymbiYosys de phan tich tinh dung dan, viet assertions va tim hieu cach kiem tra dua tren coverage.",
    educationKicker: "Nen tang",
    educationTitle: "Hoc van & Diem manh",
    educationCardTitle: "Hoc van",
    educationDegree: "Cu nhan Thiet ke vi mach",
    strength1Title: "Giai quyet van de",
    strength1Text:
      "Thich chia nho bai toan ky thuat thanh cac buoc ro rang va lap lai de tim ra giai phap on dinh.",
    strength2Title: "Tu hoc",
    strength2Text:
      "Chu dong hoc them cong cu va quy trinh ngoai gio hoc de nang cao ky nang ky thuat thuc hanh.",
    strength3Title: "Tieng Anh ky thuat",
    strength3Text:
      "Co kha nang doc hieu tai lieu ky thuat bang tieng Anh va ap dung vao bai lab cung nhu du an.",
    footerKicker: "Lien he",
    footerTitle: "Cung xay dung dieu gi do huu ich",
    footerText:
      "Toi dang tim kiem co hoi thuc tap trong IC Design, digital verification, FPGA prototyping va he thong nhung.",
    footerBackToTop: "Len dau trang"
  }
};

if (saveButton) {
  saveButton.addEventListener("click", () => {
    window.print();
  });
}

const applyLanguage = (lang) => {
  const nextLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[nextLanguage];

  document.documentElement.lang = nextLanguage;
  document.title = dictionary.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem("cv-language", nextLanguage);
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

const savedLanguage = window.localStorage.getItem("cv-language");
applyLanguage(savedLanguage === "vi" ? "vi" : "en");
