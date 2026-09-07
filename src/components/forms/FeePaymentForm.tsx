"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import {
  feePaymentSchema,
  FeePaymentSchema,
} from "@/lib/formValidationSchemas";
import { createFeePayment } from "@/lib/actions";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const FeePaymentForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FeePaymentSchema>({
    resolver: zodResolver(feePaymentSchema),
  });

  const [state, formAction] = useFormState(createFeePayment, {
    success: false,
    error: false,
    message: "",
  });

  const onSubmit = handleSubmit((formData) => {
    formAction(formData);
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success(state.message || "Financial transaction logged successfully!");
      setOpen(false);
      router.refresh();
    } else if (state.error) {
      toast.error(state.message || "Failed to log financial record.");
    }
  }, [state, router, setOpen]);

  const students = relatedData?.students || [];

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Log Financial Record</h1>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Amount ($)"
          name="amount"
          type="number"
          defaultValue={data?.amount}
          register={register}
          error={errors?.amount}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Transaction Type</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow focus:border-transparent transition-all cursor-pointer"
            {...register("type")}
            defaultValue={data?.type || "income"}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.type?.message && (
            <p className="text-xs text-red-400">{errors.type.message.toString()}</p>
          )}
        </div>

        <InputField
          label="Category (e.g. Tuition, Salaries)"
          name="category"
          defaultValue={data?.category}
          register={register}
          error={errors?.category}
        />

        <InputField
          label="Date"
          name="date"
          defaultValue={
            data?.date
              ? new Date(data.date).toISOString().slice(0, 16)
              : new Date().toISOString().slice(0, 16)
          }
          register={register}
          error={errors?.date}
          type="datetime-local"
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Student (optional)</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow focus:border-transparent transition-all cursor-pointer"
            {...register("studentId")}
            defaultValue={data?.studentId}
          >
            <option value="">None / General</option>
            {students.map((student: { id: string; name: string; surname: string }) => (
              <option value={student.id} key={student.id}>
                {student.name} {student.surname}
              </option>
            ))}
          </select>
          {errors.studentId?.message && (
            <p className="text-xs text-red-400">
              {errors.studentId.message.toString()}
            </p>
          )}
        </div>

        <InputField
          label="Description"
          name="description"
          defaultValue={data?.description}
          register={register}
          error={errors?.description}
        />
      </div>
      {state.error && (
        <span className="text-red-500 text-sm">{state.message || "Something went wrong!"}</span>
      )}
      <button className="bg-hsYellow text-black font-semibold hover:bg-yellow-400 p-2 rounded-md transition-colors">
        Log Record
      </button>
    </form>
  );
};

export default FeePaymentForm;
