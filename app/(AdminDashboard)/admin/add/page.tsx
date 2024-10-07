"use client";
import Button from "@/app/components/Button";
import CustomCheckBox from "@/app/components/CustomCheckbox";
import Status from "@/app/components/Status";
import Platform from "@/app/components/Platform";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Card from "@/app/components/Card";
import Input from "@/app/components/Input";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import CustomCheckBoxtab from "@/app/components/CustomCheckboxtab";

const meatTypes = [
  { id: 1, name: "Kurczak" },
  { id: 2, name: "Wołowina" },
  { id: 3, name: "Jagnięcina" },
  { id: 4, name: "Wieprzowina" },
  { id: 5, name: "Falafel" },
];

const sauces = [
  { id: 1, name: "Łagodny", isSpicy: false },
  { id: 2, name: "Czosnek", isSpicy: false },
  { id: 3, name: "Pikantny", isSpicy: true },
  { id: 4, name: "Mieszany", isSpicy: true },
];

const Add = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isKebabCreated, setisKebabCreated] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedMeatTypes, setSelectedMeatTypes] = useState(new Set());
  const [selectedSauces, setSelectedSauces] = useState(new Set());

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      coordinatesX: "",
      coordinatesY: "",
      closingYear: "",
      openingYear: "",
      address: "",
      HasPyszne: false,
      hasGlovo: false,
      hasUberEats: false,
      phoneNumber: "",
      appLink: "",
      websiteLink: "",
      network: "",
      isFoodTruck: false,
      status: "",
      isKraft: false,
      mondayOpensAt: "",
      mondayClosesAt: "",
      tuesdayOpensAt: "",
      tuesdayClosesAt: "",
      wednesdayOpensAt: "",
      wednesdayClosesAt: "",
      thursdayOpensAt: "",
      thursdayClosesAt: "",
      fridayOpensAt: "",
      fridayClosesAt: "",
      saturdayOpensAt: "",
      saturdayClosesAt: "",
      sundayOpensAt: "",
      sundayClosesAt: "",

      meatTypeIds: [],
      sauceIds: [],
      logo: "",
    },
  });

  useEffect(() => {
    if (isKebabCreated) {
      reset();
      setValue("file", null);
      setValue("status", "");
      setStatus("");
      setSelectedMeatTypes(new Set());
      setValue("meatTypeIds", []);
      setSelectedSauces(new Set());
      setValue("sauceIds", []);
      setisKebabCreated(false);
    }
  }, [isKebabCreated, reset, setValue]);
  const handleCheckboxChange = (id: number) => {
    const newSelectedMeatTypes = new Set(selectedMeatTypes);

    if (newSelectedMeatTypes.has(id)) {
      newSelectedMeatTypes.delete(id);
    } else {
      newSelectedMeatTypes.add(id);
    }

    setSelectedMeatTypes(newSelectedMeatTypes);
    setValue("meatTypeIds", Array.from(newSelectedMeatTypes));
  };
  const handleSauceChange = (id: number) => {
    const newSelectedSauces = new Set(selectedSauces);

    if (newSelectedSauces.has(id)) {
      newSelectedSauces.delete(id);
    } else {
      newSelectedSauces.add(id);
    }

    setSelectedSauces(newSelectedSauces);
    setValue("sauceIds", Array.from(newSelectedSauces));
  };

  {
    /*-------------------------------------------------------------------------*/
  }
  const handleStatusChange = (statusValue: string) => {
    if (status === statusValue) {
      setStatus("");
      setValue("status", "");
    } else {
      setStatus(statusValue);
      setValue("status", statusValue);
    }
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.status = status;

    const token = Cookies.get("token");
    let kebabId;

    try {
      const response = await axios.post(
        "https://kebapp.wheelwallet.cloud/api/kebabs",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      const kebabId = response.data.id;
      setisKebabCreated(true);

      if (data.logo && kebabId) {
        const formData = new FormData();
        formData.append("logo", data.logo);

        await axios.post(
          `https://kebapp.wheelwallet.cloud/api/kebabs/${kebabId}/logo`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        toast.success("Logo uploaded!");
      }
    } catch (error) {}
  };

  {
    /*-------------------------------------------------------------------------*/
  }
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <Card
            label="nazwa"
            id="name"
            register={register}
            errors={errors}
            required
          />
          <Card
            label="adres"
            id="address"
            register={register}
            errors={errors}
            required
          />
          <Input
            label="X"
            id="coordinatesX"
            register={register}
            errors={errors}
            type="number"
            required
          />
          <Input
            label="Y"
            id="coordinatesY"
            register={register}
            errors={errors}
            type="number"
            required
          />
        </div>
        <div className="flex gap-4 justify-between flex-wrap">
          <Card
            label="Rok otwarcia"
            id="openingYear"
            register={register}
            errors={errors}
            type="number"
          />
          <Card
            label="Rok zamknięcia"
            id="closingYear"
            register={register}
            errors={errors}
            type="number"
          />
        </div>
        {/* MIDDLE CHARTS */}

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full h-auto">
            <div>
              <p className="p-2 text-2xl font-semibold text-slate-700 mb-5">
                Czy kebab znajduję się w jakiejś sieci?
              </p>
              <Card
                label="siec"
                id="network"
                register={register}
                errors={errors}
              />
            </div>

            <div>
              <p className="p-2 text-2xl font-semibold text-slate-700 mb-5">
                Czy kebab znajduję się w "budzie"?
              </p>
              <div className="bg-white p-8 rounded-2xl justify-center items-center flex flex-wrap">
                <CustomCheckBox
                  id="isFoodTruck"
                  register={register}
                  label="Buda"
                />
              </div>
            </div>
            {/* --------------------------------------------------------------------------------------------- */}
            <div className="flex flex-col lg:flex-row">
              <div className="pt-5 gap-5 flex flex-row mb-40 flex-wrap">
                <div className="w-full mr-5">
                  <p className="p-2 text-2xl font-semibold text-slate-700 mb-3">
                    Informacje o statusie
                  </p>
                  <div className="bg-white p-8 rounded-2xl gap-2 flex">
                    <Status
                      id="active"
                      register={register}
                      label="active"
                      onChange={() => handleStatusChange("active")}
                      checked={status === "active"}
                    />
                    <Status
                      id="planned"
                      register={register}
                      label="planned"
                      onChange={() => handleStatusChange("planned")}
                      checked={status === "planned"}
                    />
                    <Status
                      id="inactive"
                      register={register}
                      label="inactive"
                      onChange={() => handleStatusChange("inactive")}
                      checked={status === "inactive"}
                    />
                  </div>
                </div>
                <div className="w-full mr-5">
                  <p className="p-2 text-2xl font-semibold text-slate-700 mb-5">
                    Czy kebab jest kraftowy?
                  </p>
                  <div className="bg-white p-4 rounded-2xl">
                    <CustomCheckBox
                      id="isKraft"
                      register={register}
                      label="Tak"
                    />
                  </div>
                  {/* --------------------------------------------------------------------------------------------- */}
                  <p className="p-2 pt-3 text-2xl font-semibold text-slate-700 mb-5">
                    Logo
                  </p>
                  <input
                    type="file"
                    id="logo"
                    onChange={(event) => {
                      if (event.target.files && event.target.files.length > 0) {
                        const file = event.target.files[0];
                        setValue("logo", file);
                      }
                    }}
                  />
                  {/* --------------------------------------------------------------------------------------------- */}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="p-2 pt-8 text-2xl font-semibold text-slate-700 mb-5">
                  Godziny otwarcia
                </p>
                <div className="bg-white p-8 rounded-2xl grid grid-cols-2  gap-4">
                  <Input
                    id="mondayOpensAt"
                    label="Pon open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="mondayClosesAt"
                    label="Pon close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="tuesdayOpensAt"
                    label="Wt open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="tuesdayClosesAt"
                    label="wt close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="wednesdayOpensAt"
                    label="śr open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="wednesdayClosesAt"
                    label="śr close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="thursdayOpensAt"
                    label="czw open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="thursdayClosesAt"
                    label="czw close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="fridayOpensAt"
                    label="pt open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="fridayClosesAt"
                    label="pt close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="saturdayOpensAt"
                    label="sob open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="saturdayClosesAt"
                    label="sob close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="sundayOpensAt"
                    label="Niedz open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                  <Input
                    id="sundayClosesAt"
                    label="Niedz close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <div className="text-center font-semibold text-2xl">Dostępność</div>
        <div className="flex flex-row">
          <Platform
            id="hasGlovo"
            register={register}
            label="glovo"
            icon="/platforms/glovo.png"
          />
          <Platform
            id="hasPyszne"
            register={register}
            label="pyszne"
            icon="/platforms/pyszne.png"
          />
          <Platform
            id="hasUberEats"
            register={register}
            label="ubereats"
            icon="/platforms/ubereats.png"
          />
        </div>
        <Input
          id="phoneNumber"
          label="Telefon"
          disabled={isLoading}
          register={register}
          errors={errors}
          type="tel"
        />
        <Input
          id="appLink"
          label="Nazwa aplikacji"
          disabled={isLoading}
          register={register}
          errors={errors}
        />
        <Input
          id="websiteLink"
          label="Strona Internetowa"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <div className="bg-white p-8 rounded-2xl justify-center items-center flex flex-wrap">
          <p className="p-2 text-2xl font-semibold text-slate-700">Mięsa</p>
          {meatTypes.map((meat) => (
            <CustomCheckBoxtab
              key={meat.id}
              id={`meatType_${meat.id}`}
              label={meat.name}
              register={register}
              checked={selectedMeatTypes.has(meat.id)}
              onChange={() => handleCheckboxChange(meat.id)}
            />
          ))}

          <p className="mb-4 text-2xl font-semibold text-slate-700">Sosy</p>
          {sauces.map((sauce) => (
            <CustomCheckBoxtab
              key={sauce.id}
              id={`sauce_${sauce.id}`}
              label={sauce.name}
              register={register}
              checked={selectedSauces.has(sauce.id)}
              onChange={() => handleSauceChange(sauce.id)}
            />
          ))}
        </div>
        <Button
          label={isLoading ? "Ładuję się..." : "Dodaj Kebaba"}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default Add;
