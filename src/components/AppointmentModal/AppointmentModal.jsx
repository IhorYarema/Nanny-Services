import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./AppointmentModal.module.css";
import Modal from "../Modal/Modal";
import { appointmentSchema } from "./validation";
import CustomTimePicker from "./CustomTimePicker/CustomTimePicker";

export default function AppointmentModal({ nanny, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(appointmentSchema),
    defaultValues: {
      phone: "+380",
      meetingTime: "00:00",
    },
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    if (!phoneValue || !phoneValue.startsWith("+380")) {
      setValue("phone", "+380");
    }
  }, [phoneValue, setValue]);

  const onSubmit = (data) => {
    console.log("📩 Appointment request:", { ...data, nanny: nanny.name });
    alert(`✅ Request sent to ${nanny.name}!`);
    reset({ phone: "+380", meetingTime: "00:00" });
    onClose();
  };

  return (
    <Modal onClose={onClose} className={css.modalForm}>
      <h2 className={css.title}>Make an appointment with a babysitter</h2>
      <p className={css.greyTextUnderTitle}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={css.imgWrapper}>
        <img className={css.img} src={nanny.avatar_url} alt={nanny.name} />

        <div className={css.nameContainer}>
          <p className={css.greyText}>Your nanny</p>
          <h3 className={css.name}>{nanny.name}</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.inputsContainer}>
          <input
            {...register("address")}
            className={css.inputInContainer}
            placeholder="Address"
          />
          {errors.address && (
            <p className={css.error}>{errors.address.message}</p>
          )}

          <input
            {...register("phone")}
            className={css.inputInContainer}
            onFocus={(e) => {
              if (e.target.value === "") setValue("phone", "+380");
            }}
            onChange={(e) => {
              const input = e.target.value;
              if (!input.startsWith("+380")) {
                setValue("phone", "+380");
                return;
              }
              const digits = input.replace(/[^\d+]/g, "");
              setValue("phone", digits);
            }}
            onClick={(e) => {
              const input = e.target;
              if (input.selectionStart < 4) {
                input.setSelectionRange(4, 4);
              }
            }}
          />
          {errors.phone && <p className={css.error}>{errors.phone.message}</p>}
        </div>

        <div className={css.inputsContainer}>
          <input
            {...register("childAge")}
            className={css.inputInContainer}
            placeholder="Child's age"
          />
          {errors.childAge && (
            <p className={css.error}>{errors.childAge.message}</p>
          )}

          <CustomTimePicker
            value={watch("meetingTime")}
            onChange={(val) => setValue("meetingTime", val)}
            className={css.inputInContainer}
          />
          {errors.meetingTime && (
            <p className={css.error}>{errors.meetingTime.message}</p>
          )}
        </div>

        <input
          {...register("email")}
          className={css.input}
          placeholder="Email"
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}

        <input
          {...register("parentName")}
          className={css.input}
          placeholder="Father's or mother's name"
        />
        {errors.parentName && (
          <p className={css.error}>{errors.parentName.message}</p>
        )}

        <textarea
          {...register("comment")}
          className={css.textarea}
          placeholder="Comment"
        />
        {errors.comment && (
          <p className={css.error}>{errors.comment.message}</p>
        )}

        <button type="submit" className={css.submitBtn}>
          Send
        </button>
      </form>
    </Modal>
  );
}
