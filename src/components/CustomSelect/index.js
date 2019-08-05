import React from "react";
import _ from "lodash";
import Select from "react-select";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const selectValue = (options, value) => _.find(options, { value });
const selectMultiValue = (options, values) => console.log(options,values) || 
  _.filter(options, c =>
    values.map(x => x.toLowerCase()).includes(c.value.toLowerCase())
  );

export function CategorySelect({ categories, isMulti = true, ...rest }) {
  const categoriesOptions = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Ayurved", label: "Ayurved" },
    { value: "Computer and IT", label: "Computer and IT" },
    { value: "Education", label: "Education" },
    { value: "Engineering", label: "Engineering" },
    {
      value: "Law, public safety and security",
      label: "Law, public safety and security"
    },
    { value: "Management", label: "Management" },
    { value: "Medicine and Health Care", label: "Medicine and Health Care" },
    { value: "Nursing", label: "Nursing" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Science and Technology", label: "Science and Technology" }
  ];
  return (
    <CustomSelect
      options={categoriesOptions}
      value={categories}
      valueName="categories"
      placeholder="Select Categories"
      isMulti={isMulti}
      {...rest}
    />
  );
}

export function DegreeSelect({ degree, ...rest }) {
  const degreesOptions = [
    { value: "Master", label: "Master" },
    { value: "Bachelor", label: "Bachelor" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "SLC/SEE", label: "SLC/SEE" },
    { value: "Other", label: "Other" },
    { value: "Ph. D.", label: "Ph. D." }
  ];
  return (
    <CustomSelect
      options={degreesOptions}
      value={degree}
      valueName="degree"
      placeholder="Select Degree"
      {...rest}
    />
  );
}

export function SkillsSelect({ skills, ...rest }) {
  const skillsOptions = [
    { value: "Agriculture", label: "Agriculture" },
    { value: "Ayurved", label: "Ayurved" },
    { value: "Education", label: "Education" },
    { value: "Engineering", label: "Engineering" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Java", label: "Java" },
    { value: "Javascript", label: "Javascript" },
    { value: "Law", label: "Law" },
    { value: "Management", label: "Management" },
    { value: "Nursing", label: "Nursing" },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Science", label: "Science" }
  ];
  return (
    <CustomSelect
      options={skillsOptions}
      value={skills}
      valueName="skills"
      placeholder="Select Skills"
      {...rest}
    />
  );
}

export function GenderSelect({ gender, ...rest }) {
  const gendersOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" }
  ];
  return (
    <CustomSelect
      options={gendersOptions}
      value={gender}
      valueName="gender"
      placeholder="Select Gender"
      {...rest}
    />
  );
}

export function StartEndDateSelect({
  start_date,
  end_date,
  handleChange,
  className,
  ...rest
}) {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={start_date}
          onChange={handleChange("start_date")}
          label="Start Date"
          inputVariant="outlined"
          format="yyyy/MM/dd"
          className={className}
          {...rest}
        />

        <KeyboardDatePicker
          value={end_date}
          onChange={handleChange("end_date")}
          label="End Date"
          className={className}
          inputVariant="outlined"
          format="yyyy/MM/dd"
          {...rest}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export function JobLevelSelect({ level, ...rest }) {
  const levelsOptions = [
    { value: "entry_level", label: "Entry Level" },
    { value: "mid_level", label: "Mid Level" },
    { value: "senior_level", label: "Senior Level" },
    { value: "top_level", label: "Top Level" }
  ];
  return (
    <CustomSelect
      options={levelsOptions}
      value={level}
      valueName="level"
      placeholder="Select Job Level"
      {...rest}
    />
  );
}

export function JobTypeSelect({ job_type, ...rest }) {
  const jobTypeOptions = [
    { value: "full_time", label: "Full Time" },
    { value: "contract", label: "Contract" },
    { value: "part_time", label: "Part Time" },
    { value: "internship", label: "Internship" }
  ];
  return (
    <CustomSelect
      options={jobTypeOptions}
      value={job_type}
      valueName="job_type"
      placeholder="Select Job"
      {...rest}
    />
  );
}

export default function CustomSelect({
  options,
  value,
  handleChange,
  isMulti = false,
  valueName,
  ...rest
}) {
  return (
    <Select
      style={{
        menuPortal: base => {
          const { zIndex, ...rest } = base; // remove zIndex from base by destructuring
          return { ...rest, zIndex: 9999 };
        }
      }}
      isMulti={isMulti}
      value={
        isMulti ? selectMultiValue(options, value) : selectValue(options, value)
      }
      onChange={
        isMulti
          ? data => handleChange(valueName)(data ? data.map(x => x.value) : [])
          : ({ value }) => handleChange(valueName)(value)
      }
      options={options}
      {...rest}
    />
  );
}

export function ProgramSelect({ program, ...rest }) {
  const programOptions = [
    { value: "B.Sc.", label: "B.Sc." },
    { value: "B.Tech.Ed.", label: "B.Tech.Ed." },
    {
      value: "Bachelor of Veterinary Science and Animal Husbandry",
      label: "Bachelor of Veterinary Science and Animal Husbandry"
    },
    { value: "B.Sc. Fisheries", label: "B.Sc. Fisheries" },
    { value: "BAMS", label: "BAMS" },
    { value: "BCA", label: "BCA" },
    { value: "B.Ed", label: "B.Ed" },
    { value: "B.Ed ICT", label: "B.Ed ICT" },
    {
      value:
        "Bachelor in Educational Sciences in Education, Planning and Management",
      label:
        "Bachelor in Educational Sciences in Education, Planning and Management"
    },
    {
      value: "Bachelor in Educational Sciences in English",
      label: "Bachelor in Educational Sciences in English"
    },
    {
      value:
        "Bachelor in Educational Sciences in Health and Physical Education",
      label: "Bachelor in Educational Sciences in Health and Physical Education"
    },
    {
      value: "Bachelor in Educational Sciences in Mathematics",
      label: "Bachelor in Educational Sciences in Mathematics"
    },
    {
      value: "Bachelor in Educational Sciences in Nepali",
      label: "Bachelor in Educational Sciences in Nepali"
    },
    { value: "B.Ed", label: "B.Ed" },
    {
      value: "Bachelor in English Education",
      label: "Bachelor in English Education"
    },
    {
      value: "Bachelor of Civil Engineering",
      label: "Bachelor of Civil Engineering"
    },
    {
      value: "Bachelor of Aerospace Engineering",
      label: "Bachelor of Aerospace Engineering"
    },
    {
      value: "Bachelor of Automobile Engineering",
      label: "Bachelor of Automobile Engineering"
    },
    {
      value: "Bachelor of Civil Engineering (Diploma holders)",
      label: "Bachelor of Civil Engineering (Diploma holders)"
    },
    {
      value: "Bachelor of Industrial Engineering",
      label: "Bachelor of Industrial Engineering"
    },
    {
      value: "Bachelor of Agriculture Engineering",
      label: "Bachelor of Agriculture Engineering"
    },
    {
      value: "Bachelor of Architecture (B. Arch)",
      label: "Bachelor of Architecture (B. Arch)"
    },
    {
      value: "Bachelor of Computer Engineering",
      label: "Bachelor of Computer Engineering"
    },
    {
      value: "Bachelor of Civil and Rural Engineering",
      label: "Bachelor of Civil and Rural Engineering"
    },
    {
      value: "Bachelor of Electrical and Electronics Engineering",
      label: "Bachelor of Electrical and Electronics Engineering"
    },
    {
      value: "Bachelor of Electrical Engineering",
      label: "Bachelor of Electrical Engineering"
    },
    {
      value: "Bachelor of Electronics and Communication Engineering",
      label: "Bachelor of Electronics and Communication Engineering"
    },
    {
      value:
        "Bachelor of Electronics, Communication and Information Engineering",
      label:
        "Bachelor of Electronics, Communication and Information Engineering"
    },
    {
      value: "Bachelor of Biomedical Engineering",
      label: "Bachelor of Biomedical Engineering"
    },
    {
      value: "Bachelor of Engineering in Information Technology",
      label: "Bachelor of Engineering in Information Technology"
    },
    {
      value: "Bachelor of Geometric Engineering",
      label: "Bachelor of Geometric Engineering"
    },
    {
      value: "Bachelor of Hydropower Engineering",
      label: "Bachelor of Hydropower Engineering"
    },
    {
      value: "Bachelor of Mechanical Engineering",
      label: "Bachelor of Mechanical Engineering"
    },
    {
      value: "Bachelor of Software Engineering",
      label: "Bachelor of Software Engineering"
    },
    {
      value: "Bachelor's Degree in Geomatics Engineering",
      label: "Bachelor's Degree in Geomatics Engineering"
    },
    {
      value: "Bachelor in Chemical Engineering",
      label: "Bachelor in Chemical Engineering"
    },
    {
      value: "Bachelor of Geomatic and Land Resources Management Engineering",
      label: "Bachelor of Geomatic and Land Resources Management Engineering"
    },
    {
      value: "B. Tech. Environmental Engineering",
      label: "B. Tech. Environmental Engineering"
    },
    { value: "B.Sc Forestry", label: "B.Sc Forestry" },
    {
      value: "Bachelor of Arts Bachelor of Laws (BALLB)",
      label: "Bachelor of Arts Bachelor of Laws (BALLB)"
    },
    {
      value: "Bachelor of Business Management and Bachelor of Law (BBM LLB)",
      label: "Bachelor of Business Management and Bachelor of Law (BBM LLB)"
    },
    {
      value: "Bachelor of Arts Bachelor of Laws (BALLB)",
      label: "Bachelor of Arts Bachelor of Laws (BALLB)"
    },
    { value: "Bachelor of Law (LLB)", label: "Bachelor of Law (LLB)" },
    {
      value: "Bachelor of Business Administration (BBA)",
      label: "Bachelor of Business Administration (BBA)"
    },
    {
      value: "Bachelor of Business Management (BBM)",
      label: "Bachelor of Business Management (BBM)"
    },
    {
      value: "Bachelor of Business Studies (BBS)",
      label: "Bachelor of Business Studies (BBS)"
    },
    {
      value: "Bachelor in Development Finance",
      label: "Bachelor in Development Finance"
    },
    {
      value: "Bachelor in Development Studies",
      label: "Bachelor in Development Studies"
    },
    {
      value: "Bachelor in Hospitality and Tourism Management (BHTM)",
      label: "Bachelor in Hospitality and Tourism Management (BHTM)"
    },
    {
      value: "Bachelor in Travel and Tourism Management (BTTM)",
      label: "Bachelor in Travel and Tourism Management (BTTM)"
    },
    {
      value: "​Bachelor of Business Administration (BBA)",
      label: "​Bachelor of Business Administration (BBA)"
    },
    {
      value:
        "Bachelor of Business Administration in Banking and Insurance (BBA-BI)",
      label:
        "Bachelor of Business Administration in Banking and Insurance (BBA-BI)"
    },
    {
      value: "Bachelor of Business Administration in Finance (BBA-Finance)",
      label: "Bachelor of Business Administration in Finance (BBA-Finance)"
    },
    {
      value:
        "Bachelor of Business Administration - Travel and Tourism (BBA-TT)",
      label: "Bachelor of Business Administration - Travel and Tourism (BBA-TT)"
    },
    {
      value: "Bachelor of Business Information System (BBIS)",
      label: "Bachelor of Business Information System (BBIS)"
    },
    {
      value: "Bachelor of Commerce Studies",
      label: "Bachelor of Commerce Studies"
    },
    {
      value: "Bachelor of Health Care Management (BHCM)",
      label: "Bachelor of Health Care Management (BHCM)"
    },
    {
      value: "Bachelor of Hospitality and Catering Management (BHCM)",
      label: "Bachelor of Hospitality and Catering Management (BHCM)"
    },
    {
      value: "Bachelor of Hotel Management (BHM)",
      label: "Bachelor of Hotel Management (BHM)"
    },
    {
      value: "Bachelor of Information Management (BIM)",
      label: "Bachelor of Information Management (BIM)"
    },
    {
      value: "Bachelor of Mountaineering Studies (BMS)",
      label: "Bachelor of Mountaineering Studies (BMS)"
    },
    {
      value: "Bachelor of Mountain Tourism Management (BMTM)",
      label: "Bachelor of Mountain Tourism Management (BMTM)"
    },
    {
      value: "Bachelor of Public Administration (BPA)",
      label: "Bachelor of Public Administration (BPA)"
    },
    {
      value: "Bachelor of Travel and Tourism Management (BTTM)",
      label: "Bachelor of Travel and Tourism Management (BTTM)"
    },
    {
      value: "Bachelor of Travel and Tourism Studies (BTTS)",
      label: "Bachelor of Travel and Tourism Studies (BTTS)"
    },
    { value: "BBA (Hons)/BBA (Emphasis)", label: "BBA (Hons)/BBA (Emphasis)" },
    {
      value: "Bachelor in Audiology and Speech Language Pathology (BASLP)",
      label: "Bachelor in Audiology and Speech Language Pathology (BASLP)"
    },
    {
      value: "Bachelor in Medical Laboratory Technology (B.Sc MLT)",
      label: "Bachelor in Medical Laboratory Technology (B.Sc MLT)"
    },
    { value: "Bachelor in Optometry", label: "Bachelor in Optometry" },
    {
      value: "Bachelor in Optometry and Vision Science",
      label: "Bachelor in Optometry and Vision Science"
    },
    {
      value: "Bachelor of Dental Surgery (BDS)",
      label: "Bachelor of Dental Surgery (BDS)"
    },
    {
      value: "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
      label: "Bachelor of Homeopathic Medicine and Surgery (BHMS)"
    },
    {
      value: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      label: "Bachelor of Medicine, Bachelor of Surgery (MBBS)"
    },
    {
      value: "​Bachelor of Nursing Science (BNS) in Oncology",
      label: "​Bachelor of Nursing Science (BNS) in Oncology"
    },
    { value: "​Bachelor of Optometry", label: "​Bachelor of Optometry" },
    {
      value: "​Bachelor of Physiotherapy",
      label: "​Bachelor of Physiotherapy"
    },
    {
      value: "​Bachelor of Science (B.Sc) in Medical Biochemistry",
      label: "​Bachelor of Science (B.Sc) in Medical Biochemistry"
    },
    {
      value: "​Bachelor of Science (B.Sc) in Medical Microbiology",
      label: "​Bachelor of Science (B.Sc) in Medical Microbiology"
    },
    {
      value: "​Bachelor of Science in Medical Imaging Technology (B.Sc MIT)",
      label: "​Bachelor of Science in Medical Imaging Technology (B.Sc MIT)"
    },
    { value: "Bachelor in Midwifery", label: "Bachelor in Midwifery" },
    {
      value: "Bachelor in Midwifery Sciences",
      label: "Bachelor in Midwifery Sciences"
    },
    {
      value: "Bachelor in Nursing Science (BNS)",
      label: "Bachelor in Nursing Science (BNS)"
    },
    { value: "Bachelor of Nursing (BN)", label: "Bachelor of Nursing (BN)" },
    {
      value: "Bachelor of Science (B.Sc) in Nursing",
      label: "Bachelor of Science (B.Sc) in Nursing"
    },
    {
      value: "Post Basic Bachelor in Nursing (PBBN)",
      label: "Post Basic Bachelor in Nursing (PBBN)"
    },
    { value: "Bachelor of Pharmacy", label: "Bachelor of Pharmacy" },
    {
      value: "Bachelor in Public Health (BPH)",
      label: "Bachelor in Public Health (BPH)"
    },
    {
      value: "Bachelor in Food/Dairy Technology",
      label: "Bachelor in Food/Dairy Technology"
    },
    {
      value: "Bachelor in Mathematical Sciences (B.Match.Sc)",
      label: "Bachelor in Mathematical Sciences (B.Match.Sc)"
    },
    {
      value: "Bachelor of Computer Application (BCA)",
      label: "Bachelor of Computer Application (BCA)"
    },
    {
      value: "Bachelor of Computer Information Systems (BCIS)",
      label: "Bachelor of Computer Information Systems (BCIS)"
    },
    {
      value: "Bachelor of Information Technology (BIT)",
      label: "Bachelor of Information Technology (BIT)"
    },
    {
      value: "Bachelor of Science (B.Sc) General",
      label: "Bachelor of Science (B.Sc) General"
    },
    {
      value: "Bachelor of Science (B.Sc) in Biochemistry",
      label: "Bachelor of Science (B.Sc) in Biochemistry"
    },
    {
      value: "Bachelor of Science (B.Sc) in Biotechnology",
      label: "Bachelor of Science (B.Sc) in Biotechnology"
    },
    {
      value: "Bachelor of Science (B.Sc) in Botany",
      label: "Bachelor of Science (B.Sc) in Botany"
    },
    {
      value: "Bachelor of Science (B.Sc) in Chemistry",
      label: "Bachelor of Science (B.Sc) in Chemistry"
    },
    {
      value: "Bachelor of Science (B.Sc) in Environmental Science",
      label: "Bachelor of Science (B.Sc) in Environmental Science"
    },
    {
      value: "Bachelor of Science (B.Sc.) in Geology",
      label: "Bachelor of Science (B.Sc.) in Geology"
    },
    {
      value:
        "Bachelor of Science (B.Sc) in Horticulture and Floriculture Management",
      label:
        "Bachelor of Science (B.Sc) in Horticulture and Floriculture Management"
    },
    {
      value: "Bachelor of Science (B.Sc) in Mathematics",
      label: "Bachelor of Science (B.Sc) in Mathematics"
    },
    {
      value: "Bachelor of Science (B.Sc) in Meteorology",
      label: "Bachelor of Science (B.Sc) in Meteorology"
    },
    {
      value: "Bachelor of Science (B.Sc) in Microbiology",
      label: "Bachelor of Science (B.Sc) in Microbiology"
    },
    {
      value: "Bachelor of Science (B.Sc) in Physics",
      label: "Bachelor of Science (B.Sc) in Physics"
    },
    {
      value: "Bachelor of Science (B.Sc) in Statistics",
      label: "Bachelor of Science (B.Sc) in Statistics"
    },
    {
      value: "Bachelor of Science (B.Sc) in Zoology",
      label: "Bachelor of Science (B.Sc) in Zoology"
    },
    { value: "B.Sc Applied Physics", label: "B.Sc Applied Physics" },
    {
      value: "B.Sc. Computer Science and Information Technology (B.SC. CSIT)",
      label: "B.Sc. Computer Science and Information Technology (B.SC. CSIT)"
    },
    { value: "B.Sc Human Biology", label: "B.Sc Human Biology" },
    {
      value: "BSc in Computational Mathematics",
      label: "BSc in Computational Mathematics"
    },
    { value: "B.Sc in Computer Science", label: "B.Sc in Computer Science" },
    {
      value: "B.Sc in Environmental Science",
      label: "B.Sc in Environmental Science"
    },
    {
      value: "B.Sc in Tea Technology and Management",
      label: "B.Sc in Tea Technology and Management"
    },
    {
      value: "B.Sc. Nutrition and Dietetics",
      label: "B.Sc. Nutrition and Dietetics"
    },
    { value: "B. Tech Biotechnology", label: "B. Tech Biotechnology" },
    { value: "B. Tech Food Technology", label: "B. Tech Food Technology" },
    {
      value: "Master in Agriculture Business Management",
      label: "Master in Agriculture Business Management"
    },
    {
      value: "Master of Science in Agriculture (M.Sc Ag)",
      label: "Master of Science in Agriculture (M.Sc Ag)"
    },
    {
      value: "Master of Science in Animal Science (M.Sc.An.Sc.)",
      label: "Master of Science in Animal Science (M.Sc.An.Sc.)"
    },
    {
      value: "Master of Veterinary Science (M.V.Sc.)",
      label: "Master of Veterinary Science (M.V.Sc.)"
    },
    { value: "M.Sc in Aquaculture", label: "M.Sc in Aquaculture" },
    { value: "M.Sc in Meat Technology", label: "M.Sc in Meat Technology" },
    { value: "MD Ayurved", label: "MD Ayurved" },
    {
      value: "Master of Computer Application",
      label: "Master of Computer Application"
    },
    {
      value: "Master of Computer Information Systems (MCIS)",
      label: "Master of Computer Information Systems (MCIS)"
    },
    {
      value: "Master of Science (M.Sc) in Computer Science",
      label: "Master of Science (M.Sc) in Computer Science"
    },
    {
      value:
        "Masters of Science in Computer Science and Information Technology (M.Sc.CSIT)",
      label:
        "Masters of Science in Computer Science and Information Technology (M.Sc.CSIT)"
    },
    {
      value: "Master in Mathematics Education",
      label: "Master in Mathematics Education"
    },
    {
      value: "Master in Technical and Vocational Education",
      label: "Master in Technical and Vocational Education"
    },
    {
      value: "Masterof Educational Sciences in Curriculum and Evaluation",
      label: "Masterof Educational Sciences in Curriculum and Evaluation"
    },
    {
      value:
        "Masterof Educational Sciences in Education, Planning and Management",
      label:
        "Masterof Educational Sciences in Education, Planning and Management"
    },
    {
      value: "Masterof Educational Sciences in English",
      label: "Masterof Educational Sciences in English"
    },
    {
      value: "Master of Educational Sciences in Health and Physical Education",
      label: "Master of Educational Sciences in Health and Physical Education"
    },
    {
      value: "Master of Educational Sciences in Nepali",
      label: "Master of Educational Sciences in Nepali"
    },
    {
      value: "Master of Education (M.Ed) General",
      label: "Master of Education (M.Ed) General"
    },
    {
      value: "Master of Education (M.Ed) in Economics Education",
      label: "Master of Education (M.Ed) in Economics Education"
    },
    {
      value: "Master of Education (M.Ed) in Geography Education",
      label: "Master of Education (M.Ed) in Geography Education"
    },
    {
      value: "Master of Education (M.Ed) in Health Education",
      label: "Master of Education (M.Ed) in Health Education"
    },
    {
      value: "Master of Education (M.Ed) in History Education",
      label: "Master of Education (M.Ed) in History Education"
    },
    {
      value: "Master of Education (M.Ed) in Physical Education",
      label: "Master of Education (M.Ed) in Physical Education"
    },
    {
      value: "Master of Education (M.Ed) in Political Science Education",
      label: "Master of Education (M.Ed) in Political Science Education"
    },
    {
      value: "Master of Education (M.Ed) in Population Education",
      label: "Master of Education (M.Ed) in Population Education"
    },
    {
      value: "Master of Education (M.Ed) in Science Education",
      label: "Master of Education (M.Ed) in Science Education"
    },
    {
      value: "Masters of Education (M.Ed) in Mathematics Education",
      label: "Masters of Education (M.Ed) in Mathematics Education"
    },
    {
      value: "M.Ed Education Planning and Management",
      label: "M.Ed Education Planning and Management"
    },
    {
      value: "M.Ed English Language Education",
      label: "M.Ed English Language Education"
    },
    {
      value: "M.Ed in English Language Teaching",
      label: "M.Ed in English Language Teaching"
    },
    {
      value:
        "M.Ed. in Information and Communication Technology Education (ICTEd)",
      label:
        "M.Ed. in Information and Communication Technology Education (ICTEd)"
    },
    {
      value: "M.Ed in Leadership and Management",
      label: "M.Ed in Leadership and Management"
    },
    {
      value: "M.Ed Nepali Language Education",
      label: "M.Ed Nepali Language Education"
    },
    {
      value: "Master in Land Administration",
      label: "Master in Land Administration"
    },
    {
      value: "Master in Planning and Operation of Energy Systems",
      label: "Master in Planning and Operation of Energy Systems"
    },
    {
      value: "Master of Computer Engineering",
      label: "Master of Computer Engineering"
    },
    {
      value: "Master of Engineering in Earthquake",
      label: "Master of Engineering in Earthquake"
    },
    {
      value: "Master of Science in Public Health and Disaster Engineering",
      label: "Master of Science in Public Health and Disaster Engineering"
    },
    {
      value: "Master of Science in Structural Engineering",
      label: "Master of Science in Structural Engineering"
    },
    {
      value: "(M.Sc) in Climate change and Development",
      label: "(M.Sc) in Climate change and Development"
    },
    {
      value: "(M.Sc) in Computer System and Knowledge Engineering",
      label: "(M.Sc) in Computer System and Knowledge Engineering"
    },
    {
      value: "(M.Sc) in Construction Management",
      label: "(M.Sc) in Construction Management"
    },
    {
      value: "(M.Sc) in Disaster Risk Management",
      label: "(M.Sc) in Disaster Risk Management"
    },
    {
      value: "(M.Sc) in Energy System Planning and Management",
      label: "(M.Sc) in Energy System Planning and Management"
    },
    {
      value: "(M.Sc) in Environmental Engineering",
      label: "(M.Sc) in Environmental Engineering"
    },
    {
      value: "(M.Sc) in Information & Communication Engineering",
      label: "(M.Sc) in Information & Communication Engineering"
    },
    {
      value: "(M.Sc) in Material Science",
      label: "(M.Sc) in Material Science"
    },
    {
      value: "(M.Sc) in Power System Engineering",
      label: "(M.Sc) in Power System Engineering"
    },
    {
      value: "(M.Sc) in Renewable Energy Engineering",
      label: "(M.Sc) in Renewable Energy Engineering"
    },
    {
      value: "(M.Sc) in Structural Engineering ",
      label: "(M.Sc) in Structural Engineering "
    },
    {
      value: "(M.Sc) in Technology and Innovation Management",
      label: "(M.Sc) in Technology and Innovation Management"
    },
    {
      value: "(M.Sc) in Transportation Engineering",
      label: "(M.Sc) in Transportation Engineering"
    },
    { value: "(M.Sc) in Urban Planning", label: "(M.Sc) in Urban Planning" },
    {
      value: "(M.Sc) in Water Resources Engineering",
      label: "(M.Sc) in Water Resources Engineering"
    },
    {
      value: "Master Program in Energy Efficient Building Design (EEBD)",
      label: "Master Program in Energy Efficient Building Design (EEBD)"
    },
    {
      value: "ME in Communication Engineering",
      label: "ME in Communication Engineering"
    },
    {
      value: "ME in Computer Engineering",
      label: "ME in Computer Engineering"
    },
    {
      value: "ME in Electrical and Power Engineering",
      label: "ME in Electrical and Power Engineering"
    },
    {
      value: "ME in Mechanical Engineering",
      label: "ME in Mechanical Engineering"
    },
    {
      value: "ME in Structural Engineering",
      label: "ME in Structural Engineering"
    },
    {
      value: "M.Sc Earthquake Engineering",
      label: "M.Sc Earthquake Engineering"
    },
    {
      value: "M.Sc in Communications and Knowledge Engineering",
      label: "M.Sc in Communications and Knowledge Engineering"
    },
    {
      value: "M.Sc in Disaster Risk Engineering and Management",
      label: "M.Sc in Disaster Risk Engineering and Management"
    },
    {
      value: "M.Sc in Distributed Generation Engineering",
      label: "M.Sc in Distributed Generation Engineering"
    },
    {
      value: "M.Sc. in Electrical Engineering in Power System",
      label: "M.Sc. in Electrical Engineering in Power System"
    },
    {
      value: "M.Sc in Engineering Management",
      label: "M.Sc in Engineering Management"
    },
    {
      value: "M.Sc in Hydropower Engineering",
      label: "M.Sc in Hydropower Engineering"
    },
    {
      value: "M.Sc in Information System Engineering",
      label: "M.Sc in Information System Engineering"
    },
    {
      value: "M.Sc in Infrastructure Engineering and Management",
      label: "M.Sc in Infrastructure Engineering and Management"
    },
    {
      value: "M.Sc In Interdisciplinary Water Resources Management",
      label: "M.Sc In Interdisciplinary Water Resources Management"
    },
    {
      value: "M.Sc in Transportation Engineering and Management",
      label: "M.Sc in Transportation Engineering and Management"
    },
    {
      value: "​M.Sc Mechanical Engineering in Design and Manufacturing",
      label: "​M.Sc Mechanical Engineering in Design and Manufacturing"
    },
    {
      value: "M.Tech. Environmental Engineering",
      label: "M.Tech. Environmental Engineering"
    },
    {
      value: "M.Tech in Information Technology",
      label: "M.Tech in Information Technology"
    },
    {
      value: "Master of Science (M.Sc) in Forestry",
      label: "Master of Science (M.Sc) in Forestry"
    },
    {
      value:
        "Master of Science (M.Sc.) in Natural Resource Management and Rural Development",
      label:
        "Master of Science (M.Sc.) in Natural Resource Management and Rural Development"
    },
    {
      value: "Master of Science (M.Sc.) in Watershed Management",
      label: "Master of Science (M.Sc.) in Watershed Management"
    },
    {
      value: "Masters in Environmental Administration and Management",
      label: "Masters in Environmental Administration and Management"
    },
    {
      value:
        "M.Sc in Wildlife Protected Area Management and Biodiversity Conservation",
      label:
        "M.Sc in Wildlife Protected Area Management and Biodiversity Conservation"
    },
    { value: "3 Year LLM", label: "3 Year LLM" },
    {
      value: "Master Degree in Human Rights",
      label: "Master Degree in Human Rights"
    },
    {
      value: "Master in Conflict and International Humanitarian Law",
      label: "Master in Conflict and International Humanitarian Law"
    },
    { value: "Master of Laws", label: "Master of Laws" },
    {
      value: "Masters by Research in Energy and Infrastructure Law",
      label: "Masters by Research in Energy and Infrastructure Law"
    },
    { value: "Executive MBA", label: "Executive MBA" },
    {
      value: "​Master of Business Administration-Banking and Finance (MBA-BF)",
      label: "​Master of Business Administration-Banking and Finance (MBA-BF)"
    },
    {
      value: "Master of Business Administration-Evening (MBAe) ",
      label: "Master of Business Administration-Evening (MBAe) "
    },
    {
      value: "​Master of Business Administration in Entrepreneurship (MBA-E)",
      label: "​Master of Business Administration in Entrepreneurship (MBA-E)"
    },
    {
      value:
        "Master of Business Administration in Information Technology (MBA IT)",
      label:
        "Master of Business Administration in Information Technology (MBA IT)"
    },
    {
      value: "Master of Business Administration (MBA)",
      label: "Master of Business Administration (MBA)"
    },
    {
      value: "Master of Business Management (MBM)",
      label: "Master of Business Management (MBM)"
    },
    {
      value: "Master of Business Studies (MBS)",
      label: "Master of Business Studies (MBS)"
    },
    {
      value: "Master of Finance and Control (MFC)",
      label: "Master of Finance and Control (MFC)"
    },
    {
      value: "Master of Healthcare Management (MHCM)",
      label: "Master of Healthcare Management (MHCM)"
    },
    {
      value: "Master of Hospitality Management (MHM)",
      label: "Master of Hospitality Management (MHM)"
    },
    {
      value: "Master of Public Administration-MPA",
      label: "Master of Public Administration-MPA"
    },
    { value: "Master of Tourism Studies", label: "Master of Tourism Studies" },
    {
      value: "Master of Travel and Tourism Management (MTTM) ",
      label: "Master of Travel and Tourism Management (MTTM) "
    },
    { value: "MBA (Global Business)", label: "MBA (Global Business)" },
    {
      value: "MBA in Global Leadership and Management",
      label: "MBA in Global Leadership and Management"
    },
    {
      value: "MS in Development Management and Governance (MSDMG)",
      label: "MS in Development Management and Governance (MSDMG)"
    },
    {
      value: "Master of Dental Surgery (MDS)",
      label: "Master of Dental Surgery (MDS)"
    },
    {
      value: "Master of Optometry (M.Optom)",
      label: "Master of Optometry (M.Optom)"
    },
    {
      value: "Master of Science in Medical Biochemistry (M.Sc MB)",
      label: "Master of Science in Medical Biochemistry (M.Sc MB)"
    },
    {
      value: "Master of Science in Medical Microbiology (M.Sc MM)",
      label: "Master of Science in Medical Microbiology (M.Sc MM)"
    },
    {
      value: "Master of Science (M.Sc) in Anatomy",
      label: "Master of Science (M.Sc) in Anatomy"
    },
    {
      value: "Master of Science (M.Sc) in Human Anatomy",
      label: "Master of Science (M.Sc) in Human Anatomy"
    },
    {
      value: "Master of Science (M.Sc) in Human Physiology",
      label: "Master of Science (M.Sc) in Human Physiology"
    },
    {
      value: "Master of Science (M.Sc) in Medical Biochemistry",
      label: "Master of Science (M.Sc) in Medical Biochemistry"
    },
    {
      value: "Master of Science (M.Sc) in Medical Microbiology",
      label: "Master of Science (M.Sc) in Medical Microbiology"
    },
    {
      value: "Master of Science (M.Sc) in Pharmacology",
      label: "Master of Science (M.Sc) in Pharmacology"
    },
    {
      value: "Master of Science (M.Sc) in Physiology",
      label: "Master of Science (M.Sc) in Physiology"
    },
    { value: "MD Anaesthesiology", label: "MD Anaesthesiology" },
    { value: "MD Biochemistry", label: "MD Biochemistry" },
    { value: "MD Clinical Pharmacology", label: "MD Clinical Pharmacology" },
    { value: "MD Clinical Physiology", label: "MD Clinical Physiology" },
    { value: "MD Community Medicine", label: "MD Community Medicine" },
    { value: "MD Dermatology", label: "MD Dermatology" },
    {
      value: "MD Dermatology & Venereology",
      label: "MD Dermatology & Venereology"
    },
    { value: "MD Forensic Medicine", label: "MD Forensic Medicine" },
    { value: "MD General Practice", label: "MD General Practice" },
    {
      value: "MD in General Practice and Emergency Medicine (MDGP)",
      label: "MD in General Practice and Emergency Medicine (MDGP)"
    },
    {
      value: "MD in Hospital Administration",
      label: "MD in Hospital Administration"
    },
    { value: "MD in Internal Medicine", label: "MD in Internal Medicine" },
    {
      value: "MD in Obstetrics and Gynaecology",
      label: "MD in Obstetrics and Gynaecology"
    },
    { value: "MD in Ophthalmology", label: "MD in Ophthalmology" },
    { value: "MD in Paediatric", label: "MD in Paediatric" },
    { value: "MD in Pathology", label: "MD in Pathology" },
    { value: "MD in Psychiatry", label: "MD in Psychiatry" },
    { value: "MD in radiation oncology", label: "MD in radiation oncology" },
    { value: "MD in Radiodiagnosis", label: "MD in Radiodiagnosis" },
    {
      value: "MD in Radiology and Imaging",
      label: "MD in Radiology and Imaging"
    },
    { value: "MD Internal Medicine", label: "MD Internal Medicine" },
    { value: "MD Microbiology", label: "MD Microbiology" },
    { value: "MD Pharmacology", label: "MD Pharmacology" },
    { value: "MD Physiology", label: "MD Physiology" },
    { value: "MD Radiotherapy", label: "MD Radiotherapy" },
    { value: "MDS Community Dentistry", label: "MDS Community Dentistry" },
    {
      value: "MDS Conservative Dentistry and Endodontics",
      label: "MDS Conservative Dentistry and Endodontics"
    },
    {
      value: "MDS Oral and Maxillofacial Surgery",
      label: "MDS Oral and Maxillofacial Surgery"
    },
    { value: "MDS Oral Pathology", label: "MDS Oral Pathology" },
    { value: "MDS Orthodontics", label: "MDS Orthodontics" },
    { value: "MDS Periodontics", label: "MDS Periodontics" },
    {
      value: "MDS Periodontology and Oral Implantology",
      label: "MDS Periodontology and Oral Implantology"
    },
    { value: "MDS Prosthodontics", label: "MDS Prosthodontics" },
    { value: "MS Anatomy", label: "MS Anatomy" },
    {
      value: "M.Sc. Clinical Biochemistry",
      label: "M.Sc. Clinical Biochemistry"
    },
    {
      value: "M.Sc. Clinical Microbiology",
      label: "M.Sc. Clinical Microbiology"
    },
    { value: "M.Sc in Microbiology", label: "M.Sc in Microbiology" },
    {
      value: "M.Sc in Nutrition and Dietetics",
      label: "M.Sc in Nutrition and Dietetics"
    },
    {
      value: "M.Sc Medical Imaging Technology",
      label: "M.Sc Medical Imaging Technology"
    },
    { value: "MS General Surgery", label: "MS General Surgery" },
    {
      value: "MS in Clinical Otorhinolaryngology and Head and Neck Surgery",
      label: "MS in Clinical Otorhinolaryngology and Head and Neck Surgery"
    },
    {
      value: "MS in Orthopaedic and Trauma Surgery",
      label: "MS in Orthopaedic and Trauma Surgery"
    },
    { value: "MS in Orthopedics", label: "MS in Orthopedics" },
    {
      value: "MS in Otorhinolaryngology (ENT)",
      label: "MS in Otorhinolaryngology (ENT)"
    },
    { value: "MS Ophthalmology", label: "MS Ophthalmology" },
    { value: "Master in Nursing (MN)", label: "Master in Nursing (MN)" },
    {
      value: "Master of Science in Midwifery",
      label: "Master of Science in Midwifery"
    },
    { value: "MN Adult Nursing", label: "MN Adult Nursing" },
    { value: "MN in Paediatric Nursing", label: "MN in Paediatric Nursing" },
    {
      value: "MN in Women Health and Development",
      label: "MN in Women Health and Development"
    },
    { value: "M.Sc. Nursing Program", label: "M.Sc. Nursing Program" },
    { value: "Master in Pharmacy", label: "Master in Pharmacy" },
    {
      value: "Master of Pharmaceutical Sciences",
      label: "Master of Pharmaceutical Sciences"
    },
    {
      value: "M. Pharm in Clinical Pharmacy",
      label: "M. Pharm in Clinical Pharmacy"
    },
    {
      value: "Master in Public Health (MPH)",
      label: "Master in Public Health (MPH)"
    },
    {
      value: "Master in Public Health Nutrition (MPHN)",
      label: "Master in Public Health Nutrition (MPHN)"
    },
    { value: "Master in e-Governance", label: "Master in e-Governance" },
    {
      value: "Master of Information Technology (MIT)",
      label: "Master of Information Technology (MIT)"
    },
    {
      value: "Master of Science (M.Sc) Chemistr",
      label: "Master of Science (M.Sc) Chemistr"
    },
    {
      value: "Master of Science (M.Sc) in Botany",
      label: "Master of Science (M.Sc) in Botany"
    },
    {
      value: "Master of Science (M.Sc) in Geology",
      label: "Master of Science (M.Sc) in Geology"
    },
    {
      value: "Master of Science (M.Sc) in Mathematics",
      label: "Master of Science (M.Sc) in Mathematics"
    },
    {
      value: "Master of Science (M.Sc) in Meteorology",
      label: "Master of Science (M.Sc) in Meteorology"
    },
    {
      value: "Master of Science (M.Sc) in Physics",
      label: "Master of Science (M.Sc) in Physics"
    },
    {
      value: "Master of Science (M.Sc) in Statistics",
      label: "Master of Science (M.Sc) in Statistics"
    },
    {
      value: "Master of Science (M.Sc) in Urban Design in Conservation",
      label: "Master of Science (M.Sc) in Urban Design in Conservation"
    },
    {
      value: "Master of Science (M.Sc) in Zoology",
      label: "Master of Science (M.Sc) in Zoology"
    },
    { value: "M.Sc. Biotechnology", label: "M.Sc. Biotechnology" },
    { value: "M.Sc Dairy Technology", label: "M.Sc Dairy Technology" },
    {
      value: "M.Sc Environment and Natural Resources",
      label: "M.Sc Environment and Natural Resources"
    },
    {
      value: "M. Sc. in Biodiversity and Environmental Management",
      label: "M. Sc. in Biodiversity and Environmental Management"
    },
    {
      value: "M.Sc in Construction Management",
      label: "M.Sc in Construction Management"
    },
    {
      value: "M.Sc in Engineering Geology",
      label: "M.Sc in Engineering Geology"
    },
    {
      value: "M.Sc in Environmental Management",
      label: "M.Sc in Environmental Management"
    },
    {
      value: "M.Sc in Environmental Science",
      label: "M.Sc in Environmental Science"
    },
    { value: "M.Tech Biotechnology", label: "M.Tech Biotechnology" },
    { value: "M.Tech Food Technology", label: "M.Tech Food Technology" }
  ];
  return (
    <CustomSelect
      options={programOptions}
      value={program}
      valueName="program"
      placeholder="Select Program"
      {...rest}
    />
  );
}
