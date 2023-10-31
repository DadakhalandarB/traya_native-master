const getInputType = type => {
  return {
    email: "email",
    number: "tel",
    phone: "tel",
    string: "text",
  }[type];
};

export default getInputType;
