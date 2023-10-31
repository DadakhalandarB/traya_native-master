export const handleFresh = (questions, question, response, source) => {
  const eventData = {
    [question.text]: response,
    source: source,
  };
  if (question.id === "3h" || question.id === "4q") {
    freshTrackEvent(questions, "Act_booked_Form", eventData);
  } else {
    freshTrackEvent(questions, question.group, eventData);
  }
  freshUserAttributes(questions, question, response);
};

export const freshTrackEvent = (questions, event, data) => {
  try {
    data.email = questions?.email?.reply;
    FM.trackCustomEvent(event, { ...data });
  } catch (error) {
    console.warn(error.message);
  }
};

export const freshTrackEventV2 = (event, data) => {
  try {
    // data.email = questions?.email?.reply;
    FM.trackCustomEvent(event, { ...data });
  } catch (error) {
    console.warn(error.message);
  }
};

export const freshVisitor = (data) => {
  try {
    FM.associateVisitor(data);
  } catch (error) {
    console.warn(error.message);
  }
};

export const sendUtmDataToMoengage = (data) => {
  if (!isEmpty(data)) {
    setTimeout(() => {
      for (let key in data) {
        const attribute = key.replace(/utm_/i, "");
        freshUserAttributes(attribute, data[key]);
      }
    }, [2000]);
  }
};
export const handleFreshUserAttributes = async (data) => {
  try {
    var identifier = data.email;
    fwcrm.identify(identifier, data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const handleCustomUserAttributes = (attribute, response) => {
  try {
    window.Moengage.add_user_attribute(attribute, response);
  } catch (error) {
    console.warn(error.message);
  }
};

const freshUserAttributes = (questions, question, response) => {
  const email = questions?.email?.reply;
  switch (question.id) {
    case "first_name": {
      let firstName = response.split(" ").shift();
      let lastname =
        response.split(" ").length > 1
          ? response.split(" ").slice(1).join().replace(",", " ")
          : "";
      let data = {
        email: email,
        "First name": firstName,
        "Last name": lastname,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "phone_number": {
      let data = {
        email: email,
        Mobile: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "email": {
      let data = {
        Emails: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "C1d": {
      let data = {
        email: email,
        age: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "gender": {
      let data = {
        email: email,
        Gender: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "male-branch":
    case "describe_dandruff": {
      let data = {
        email: email,
        Dandruff: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "2c":
    case "fhf2": {
      let data = {
        email: email,
        "Family History": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "fs1": {
      let data = {
        email: email,
        Vitamins: response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "fs2": {
      let data = {
        email: email,
        "Breast Feeding": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "fs3": {
      let data = {
        email: email,
        Menopause: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hairfall_description":
    case "2e": {
      let data = {
        email: email,
        "Hairloss Description": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "male_experiance": {
      let data = {
        email: email,
        "Male Experiance": response.toString(),
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3i": {
      let data = {
        email: email,
        "Hair Goal Male": response.toString(),
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "female_experiance": {
      let data = {
        email: email,
        "Female Experiance": response.toString(),
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3b":
    case "energy_level":
    case "4h": {
      let data = {
        email: email,
        Energy: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3c": {
      let data = {
        email: email,
        Constipation: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3d":
    case "4j":
    case "stress_check": {
      let data = {
        email: email,
        Stress: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3e":
    case "sleep_check":
    case "4k": {
      let data = {
        email: email,
        Sleep: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3f": {
      let data = {
        email: email,
        "Other health problems": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "feel_consitpate": {
      let data = {
        email: email,
        "Feel Consitpated": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "check_bloat":
    case "3di": {
      let data = {
        email: email,
        GAB: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "female_cond": {
      let data = {
        email: email,
        "Female Cond": response.toString(),
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "vitamin_def": {
      let data = {
        email: email,
        "Vitamin Def": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "vitamin_def1": {
      let data = {
        email: email,
        "Eating Vitamin Tablets": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "female_stage": {
      let data = {
        email: email,
        Stage: response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "gut_problems": {
      let data = {
        email: email,
        "Gut Problems": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "3j": {
      let data = {
        email: email,
        "Blood Pressure": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hair_type": {
      let data = {
        email: email,
        "Hair Type": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hair_quality": {
      let data = {
        email: email,
        "Hair Quality": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hair_quality1": {
      let data = {
        email: email,
        "Hair Damage": response.toString(),
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hair_vol": {
      let data = {
        email: email,
        "Hair Density": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "strads_lost":
    case "fhf1": {
      let data = {
        email: email,
        "Strands Lost Per Day": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "hair_vol1":
    case "hairfall_description": {
      let data = {
        email: email,
        "Where Do You Stand": response,
      };
      handleFreshUserAttributes(data);
      break;
    }
    case "hair_feel": {
      let data = {
        email: email,
        "Hair Feel": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "feel_hair_fall": {
      let data = {
        email: email,
        "Facing Hair Fall": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hair_length": {
      let data = {
        email: email,
        "Current Length Of Hair": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hairfall_description": {
      let data = {
        email: email,
        "Type Of Hair Fall": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "hair_goals": {
      let data = {
        email: email,
        "Hair Goal Female": response.toString(),
      };
      handleFreshUserAttributes(data);
      break;
    }

    case "feel_oily": {
      let data = {
        email: email,
        "Oily Hair": response,
      };
      handleFreshUserAttributes(data);
      break;
    }

    default:
      break;
  }
};
