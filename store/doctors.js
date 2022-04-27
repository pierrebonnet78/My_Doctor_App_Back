const doctors = [
  {
    id: 1,
    firstname: "Pierre",
    lastname: "Bonnet",
    email: "pierre.doc@domain.com",
    password: "12345",
    sexe: {
      label: "Male",
      value: 2,
    },
    seniority: 5,
    secretWord: "Gaston",
  },
  {
    id: 2,
    firstname: "John",
    lastname: "Doc",
    email: "john.doc@domain.com",
    password: "12345",
    sexe: {
      label: "Male",
      value: 2,
    },
    seniority: 12,
    secretWord: "Doctor",
  },
];

const getDoctors = () => doctors;

const getDoctorById = (id) => doctors.find((doctor) => doctor.id === id);

const getDoctorByEmail = (email) =>
  doctors.find((doctor) => doctor.email === email);

const addDoctor = (doctor) => {
  doctor.id = doctors.length + 1;
  doctors.push(doctor);
};

module.exports = {
  getDoctors,
  getDoctorById,
  getDoctorByEmail,
  addDoctor,
};
