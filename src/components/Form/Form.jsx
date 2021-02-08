import React from "react";
import { useFormik } from "formik";

const Form = () => {
  // // A custom validation function. This must return an object
  // // which keys are symmetrical to our values/initialValues
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = "Required";
  //   } else if (values.name.length > 15) {
  //     errors.name = "Must be 15 characters or less";
  //   }

  //   if (!values.operatingSystem) {
  //     errors.operatingSystem = "Required";
  //   } else if (values.operatingSystem.length > 20) {
  //     errors.operatingSystem = "Must be 20 characters or less";
  //   }

  //   if (!values.permissions) {
  //     errors.permissions = "Required";
  //   } else if (values.permissions.length > 10) {
  //     errors.permissions = "Must be 10 characters or less";
  //   }

  //   if (!values.jre) {
  //     errors.jre = "Required";
  //   } else if (values.jre.length > 20) {
  //     errors.jre = "Too long of a JRE path";
  //   }

  //   return errors;
  // };

  const styleRequiredInput = (formikErroKey) => {
    return formikErroKey
      ? "border-2 border-red-200"
      : "border-2 border-black-200";
  };

  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      finalState: {
        dto: {
          currentNodeDefinition: {
            planetData: {
              name: "samratMac",
              os: "MAC",
              labels: "test",
            },
            jrePath: "",
          },
        },
      },
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values.finalState, null, 2);
      fetch("http://localhost:8082/rpa/ajax/resourceDefinitionBean.doSave", {
        headers: {
          "Content-Type": "text/plain",
          "x-csrf-token": "9a946f42-c45c-4266-9b5e-0ad94e2171d8",
          NewHeader: "JSON-MODE",
          "Access-Control-Allow-Methods": "POST",
        },
        body,
        method: "POST",
        mode: "no-cors",
        credentials: "include",
      }).then((response) => console.log("Success"));
    },
  });

  return (
    <div className="bg-grey-200">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col shadow-lg p-2 border-grey-200"
      >
        <label htmlFor="name" className="mb-2">
          Name
        </label>
        <input
          id="name"
          name="finalState.dto.currentNodeDefinition.planetData.name"
          type="text"
          onChange={formik.handleChange}
          value={
            formik.values.finalState.dto.currentNodeDefinition.planetData.name
          }
          className={styleRequiredInput(formik.errors.name)}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}

        <label htmlFor="operatingSystem" className="mb-2">
          Operating System
        </label>
        <select
          name="finalState.dto.currentNodeDefinition.planetData.os"
          id="operatingSystem"
          onChange={formik.handleChange}
          value={
            formik.values.finalState.dto.currentNodeDefinition.planetData.os
          }
          className={styleRequiredInput(formik.errors.operatingSystem)}
        >
          <option value="Windows">Windows</option>
          <option value="Mac">Mac</option>
          <option value="Linux">Linux</option>
        </select>

        {formik.errors.operatingSystem ? (
          <div>{formik.errors.operatingSystem}</div>
        ) : null}

        <label htmlFor="jre" className="mb-2">
          JRE path
        </label>
        <input
          id="jre"
          name="finalState.dto.currentNodeDefinition.jrePath"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.finalState.dto.currentNodeDefinition.jrePath}
          className={styleRequiredInput(formik.errors.jre)}
        />
        {formik.errors.jre ? <div>{formik.errors.jre}</div> : null}

        <label htmlFor="permissions" className="mb-2">
          Permissions
        </label>
        <input
          id="permissions"
          name="finalState.dto.currentNodeDefinition.planetData.labels"
          type="text"
          onChange={formik.handleChange}
          value={
            formik.values.finalState.dto.currentNodeDefinition.planetData.labels
          }
          className={styleRequiredInput(formik.errors.permissions)}
        />
        {formik.errors.permissions ? (
          <div>{formik.errors.permissions}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
