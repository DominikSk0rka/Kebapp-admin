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

const Add = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isKebabCreated, setisKebabCreated] = useState(false);
  const [status, setStatus] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

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
      czosnek: false,
      pomidorowy: false,
      chili: false,
      jogurtowy: false,
      curry: false,
      bbg: false,
      HasPyszne: false,
      hasGlovo: false,
      hasUberEats: false,
      phoneNumber: "",
      appLink: "",
      websiteLink: "",
      kurczak: false,
      wolowina: false,
      baranina: false,
      falafel: false,
      network: "",
      isFoodTruck: false,
      status: "",
      isKraft: false,
      mondayOpensAt: "",
      mondayClosesAt: "",
      pn: "",
      wt: "",
      sr: "",
      czw: "",
      pt: "",
      sob: "",
      niedz: "",
      // logo: "",
    },
  });

  useEffect(() => {
    if (isKebabCreated) {
      reset();
      setValue("file", null);
      setisKebabCreated(false);
    }
  }, [isKebabCreated]);

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

    axios
      .post("https://kebapp.wheelwallet.cloud/api/kebabs", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
      .then((response) => {
        setisKebabCreated(true);
        toast.success("Stworzono kebaba!");
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          const responseData = error.response.data;

          if (responseData.name) {
            setValidationErrors({ name: responseData.name });
            toast.error(`Wrong data ${responseData.name}`);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    console.log("Token", token);
    console.log("Data", data);
  };
  {
    /*-------------------------------------------------------------------------*/
  }
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
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
                  {/* <p className="p-2 pt-3 text-2xl font-semibold text-slate-700 mb-5">
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
                  /> */}
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
                    type="number"
                  />
                  <Input
                    id="tuesdayClosesAt"
                    label="wt close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="wednesdayOpensAt"
                    label="śr open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="wednesdayClosesAt"
                    label="śr close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="thursdayOpensAt"
                    label="czw open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="thursdayClosesAt"
                    label="czw close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="fridayOpensAt"
                    label="pt open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="fridayClosesAt"
                    label="pt close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="saturdayOpensAt"
                    label="sob open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="saturdayClosesAt"
                    label="sob close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="sundayOpensAt"
                    label="Niedz open"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
                  />
                  <Input
                    id="sundayClosesAt"
                    label="Niedz close"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="number"
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
          <CustomCheckBox id="kurczak" register={register} label="Kurczak" />
          <CustomCheckBox id="wolowina" register={register} label="Wolowina" />
          <CustomCheckBox id="baranina" register={register} label="Baranina" />
          <CustomCheckBox id="falafel" register={register} label="Falafel" />
          <p className="mb-4 text-2xl font-semibold text-slate-700">Sosy</p>
          <CustomCheckBox
            id="czosnek"
            register={register}
            label="Sos czosnkowy"
          />
          <CustomCheckBox
            id="pomidorowy"
            register={register}
            label="Sos pomidorowy"
          />
          <CustomCheckBox id="chili" register={register} label="Sos chili" />
          <CustomCheckBox
            id="jogurtowy"
            register={register}
            label="Sos jogurtowy"
          />
          <CustomCheckBox id="curry" register={register} label="Sos curry" />
          <CustomCheckBox id="bbg" register={register} label="Sos BBQ" />
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
