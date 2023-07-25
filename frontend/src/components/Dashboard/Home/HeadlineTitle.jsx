import React, { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";

const HeadlineTitle = ({ headlineData, setHomeSection, homeSection }) => {
  const [headline, setHeadline] = useState(
    headlineData.length > 0 ? headlineData : [{ headline: "" }]
  );
  useEffect(() => {
    if (headlineData.length > 0) {
      setHeadline(headlineData);
    } else {
      setHeadline([{ headline: "" }]);
    }
  }, [headlineData]);
  const addNewHeadline = () => {
    setHeadline([...headline, { headline: "" }]);
  };

  const removeHeadlineField = (index) => {
    const values = [...headline];
    values.splice(index, 1);
    setHeadline(values);
    setHomeSection((prevHomeSection) => ({
      ...prevHomeSection,
      headline: values,
    }));
  };

  const updateHeadline = (index, value) => {
    const values = [...headline];
    values[index].headline = value;
    setHeadline(values);
    setHomeSection((prevHomeSection) => ({
      ...prevHomeSection,
      headline: values,
    }));
  };

  return (
    <div className="p-10 rounded-lg border dark:border-slate-400 my-5 md:w-1/3 w-full">
      <p className="text-2xl font-bold dark:text-white mb-5">
        Set Your Headline Title
      </p>
      {headline.map((item, index) => {
        return (
          <div className="mb-3" key={index}>
            <div className="flex flex-row justify-between mb-2">
              <div className="block">
                <Label htmlFor={`headline${index}`} value="Headline" />
              </div>
              {headline.length > 1 && (
                <button
                  onClick={() => removeHeadlineField(index)}
                  type="button"
                  className="dark:text-white border border-slate-500 px-3 rounded-md hover:bg-slate-300 dark:hover:bg-slate-500 duration-100"
                >
                  Remove
                </button>
              )}
            </div>
            <TextInput
              className="transition-background"
              id={`headline${index}`}
              name={`headline${index}`}
              value={item.headline}
              onChange={(e) => updateHeadline(index, e.target.value)}
              placeholder="Ex. : Web developer , UX designer"
              required
              type="text"
            />
          </div>
        );
      })}
      {headline.length < 3 && (
        <Button onClick={addNewHeadline} className="mt-5">
          Add Headline
        </Button>
      )}
    </div>
  );
};

export default HeadlineTitle;
