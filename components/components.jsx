import React, { lazy } from "react";
import Loader from "./Loader";

const InputAge = lazy(() => import("./form/InputAge"));
const InputCheckbox = lazy(() => import("./form/InputCheckbox"));
const InputEmail = lazy(() => import("./form/InputEmail"));
const InputImage = lazy(() => import("./form/InputImage"));
const InputName = lazy(() => import("./form/InputName"));
const InputPhoneNumber = lazy(() => import("./form/InputPhoneNumber"));
const InputPhoneNumberV2 = lazy(() => import("./form/InputPhoneNumberV2"));
const InputRadio = lazy(() => import("./form/InputRadio"));
const InputSlots = lazy(() => import("./form/InputSlots"));
const InputAgeV3 = lazy(() => import("./v3/InputAgeV3"));
const InputCheckboxV3 = lazy(() => import("./v3/InputCheckboxV3"));
const InputEmailV3 = lazy(() => import("./v3/InputEmailV3"));
const InputImageV3 = lazy(() => import("./v3/InputImageV3"));
const InputNameV3 = lazy(() => import("./v3/InputNameV3"));
const InputPhoneNumberV3 = lazy(() => import("./v3/InputPhoneNumberV3"));
const InputRadioV3 = lazy(() => import("./v3/InputRadioV3"));
const MiniInputImage = lazy(() => import("./v2/InputImage"));
const MiniInputRadio = lazy(() => import("./v2/InputRadio"));
const MiniInputUserDetails = lazy(() => import("./v2/InputUserDetails"));
const InputSlider = lazy(() => import("./form/InputSlider"));
const InputSelect = lazy(() => import("./form/InputSelect"));
const InputWeight = lazy(() => import("./form/InputWeight"));
const InputSlotsV4 = lazy(() => import("./v4/InputSlots"));
const InputRadioV4 = lazy(() => import("./v4/InputRadio"));
const InputRadioV2 = lazy(() => import("./v4/InputRadioV2"));
const InputAgeV4 = lazy(() => import("./v4/InputAge"));
const InputCheckboxV4 = lazy(() => import("./v4/InputCheckbox"));
const InputSlotsV2 = lazy(() => import("./v2/InputSlots"));
const UserInputs = lazy(() => import("./UserInputs"));
const UserInputs2 = lazy(() => import("./UserInputs2"));
const UserFeedback = lazy(() => import("./UserFeedback"));

const _components = {
  inputAge: InputAge,
  inputCheckbox: InputCheckbox,
  inputEmail: InputEmail,
  inputImage: InputImage,
  inputName: InputName,
  inputPhoneNumber: InputPhoneNumber,
  inputRadio: InputRadio,
  inputSlots: InputSlots,
  miniInputImage: MiniInputImage,
  miniInputRadio: MiniInputRadio,
  miniform: MiniInputUserDetails,
  v3InputAge: InputAgeV3,
  v3InputCheckbox: InputCheckboxV3,
  v3InputEmail: InputEmailV3,
  v3InputImage: InputImageV3,
  v3InputName: InputNameV3,
  v3InputPhoneNumber: InputPhoneNumberV3,
  v3InputRadio: InputRadioV3,
  inputSlider: InputSlider,
  inputSelect: InputSelect,
  inputWeight: InputWeight,
  inputSlotsV4: InputSlotsV4,
  inputRadioV4: InputRadioV4,
  inputRadioV2: InputRadioV2,
  inputAgeV4: InputAgeV4,
  inputCheckboxV4: InputCheckboxV4,
  miniInputSlots: InputSlotsV2,
  UserInputs: UserInputs,
  UserInputs2: UserInputs2,
  InputPhoneNumberV2: InputPhoneNumberV2,
  UserFeedback: UserFeedback,
};

const components = (block, context, handler, error) => {
  if (typeof _components[block.component] !== "undefined") {
    return React.createElement(_components[block.component], {
      key: block.id,
      block: block,
      context: context,
      handler: handler,
      error: error,
    });
  }

  return React.createElement(
    () => (
      <div>
        <Loader />
      </div>
    ),
    { key: block.id }
  );
};

export default components;
